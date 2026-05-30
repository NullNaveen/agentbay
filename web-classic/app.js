// AgentBay front-end — vanilla JS, no build step.
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const api = async (path, opts = {}) => {
  const r = await fetch(path, { headers: { "Content-Type": "application/json" }, ...opts });
  return r.json();
};

const state = {
  os: null, agent: null, provider: "deepseek",
  model: "deepseek-chat", convos: [], current: null,
};

// ---------- theme ----------
function applyTheme(t) { document.documentElement.dataset.theme = t; localStorage.setItem("ab_theme", t); }
applyTheme(localStorage.getItem("ab_theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

// ---------- wizard ----------
function showStep(name) {
  $$(".step").forEach(s => s.classList.toggle("hidden", s.dataset.step !== name));
}

async function init() {
  state.os = await api("/api/detect");
  $("#envLine").textContent = `Detected: ${state.os.os_pretty} · ${state.os.arch} · Python ${state.os.python}`;
  const cfg = await api("/api/config");
  // if already configured, jump to chat
  if (cfg.agent && (cfg.deepseek_key_set || cfg.provider === "local")) {
    state.agent = cfg.agent; state.provider = cfg.provider;
    state.model = cfg.provider === "deepseek" ? cfg.deepseek_model : cfg.local_model;
    enterChat();
  }
}

$$(".agent-pick").forEach(b => b.onclick = async () => {
  $$(".agent-pick").forEach(x => x.classList.remove("sel"));
  b.classList.add("sel");
  state.agent = b.dataset.agent;
  await api("/api/config", { method: "POST", body: JSON.stringify({ agent: state.agent }) });
  showStep("install");
  checkInstall();
});

$$(".back-btn").forEach(b => b.onclick = () => {
  const cur = b.closest(".step").dataset.step;
  showStep(cur === "config" ? "install" : "agent");
});

async function checkInstall() {
  const box = $("#statusBox"); box.className = "status-box"; box.textContent = "Checking…";
  $("#installBtn").classList.add("hidden"); $("#installNext").classList.add("hidden");
  const { agents } = await api("/api/agents");
  const a = agents.find(x => x.agent === state.agent);
  $("#installTitle").textContent = a.label;
  if (a.installed) {
    box.className = "status-box ok";
    box.textContent = `✓ ${a.label} is installed${a.version ? " — " + a.version : ""}`;
    $("#installNext").classList.remove("hidden");
  } else {
    box.className = "status-box warn";
    const rel = await api("/api/release/" + state.agent);
    box.textContent = `${a.label} is not installed. Latest release: ${rel.tag || "unknown"}. Install it for ${state.os.os_pretty}?`;
    $("#installBtn").classList.remove("hidden");
  }
}

$("#installBtn").onclick = async () => {
  const log = $("#installLog"); log.classList.remove("hidden"); log.textContent = "Starting install…\n";
  $("#installBtn").disabled = true;
  const { job } = await api("/api/install", { method: "POST", body: JSON.stringify({ agent: state.agent }) });
  const poll = setInterval(async () => {
    const st = await api("/api/install/status/" + job);
    log.textContent = (st.log || []).join("\n");
    log.scrollTop = log.scrollHeight;
    if (st.status === "done" || st.status === "error") {
      clearInterval(poll); $("#installBtn").disabled = false;
      if (st.status === "done") { checkInstall(); }
      else { log.textContent += "\n\nInstall failed. You can install manually, then click Continue."; $("#installNext").classList.remove("hidden"); }
    }
  }, 1200);
};

$("#installNext").onclick = () => { showStep("config"); loadModels(); };

// ---------- config ----------
$("#provider").onchange = e => {
  state.provider = e.target.value;
  $("#deepseekFields").classList.toggle("hidden", state.provider !== "deepseek");
  $("#localFields").classList.toggle("hidden", state.provider !== "local");
};

async function loadModels() {
  const cfg = await api("/api/config");
  $("#provider").value = cfg.provider || "deepseek";
  $("#provider").onchange({ target: $("#provider") });
}

$("#testKey").onclick = async () => {
  const r = $("#testResult"); r.textContent = "Testing…"; r.className = "test-result";
  const res = await api("/api/test-key", { method: "POST", body: JSON.stringify({ deepseek_key: $("#dsKey").value }) });
  if (res.ok) {
    r.className = "test-result ok"; r.textContent = "✓ Connected. Models: " + res.models.slice(0, 6).join(", ");
    const sel = $("#dsModel"); sel.innerHTML = "";
    res.models.forEach(m => { const o = document.createElement("option"); o.value = o.textContent = m; sel.appendChild(o); });
  } else { r.className = "test-result err"; r.textContent = "✗ " + (res.error || "failed"); }
};

$("#configNext").onclick = async () => {
  const body = { provider: state.provider };
  if (state.provider === "deepseek") {
    if ($("#dsKey").value) body.deepseek_key = $("#dsKey").value;
    body.deepseek_model = $("#dsModel").value || "deepseek-chat";
    state.model = body.deepseek_model;
  } else {
    body.local_base_url = $("#localUrl").value; body.local_model = $("#localModel").value;
    state.model = body.local_model;
  }
  await api("/api/config", { method: "POST", body: JSON.stringify(body) });
  enterChat();
};

// ---------- chat ----------
function enterChat() {
  $("#wizard").classList.add("hidden");
  $("#chat").classList.remove("hidden");
  const emoji = state.agent === "hermes" ? "⚕" : state.agent === "openclaw" ? "🐾" : "⚓";
  $("#agentAvatar").textContent = emoji;
  $("#agentName").textContent = state.agent === "hermes" ? "Hermes" : state.agent === "openclaw" ? "OpenClaw" : "AgentBay";
  $("#modelChip").textContent = state.model;
  $("#emptyTitle").textContent = "How can I help?";
  loadConvos(); newChat();
}

function loadConvos() {
  state.convos = JSON.parse(localStorage.getItem("ab_convos") || "[]");
  renderConvos();
}
function saveConvos() { localStorage.setItem("ab_convos", JSON.stringify(state.convos)); }
function renderConvos() {
  const c = $("#convos"); c.innerHTML = "";
  state.convos.forEach(cv => {
    const d = document.createElement("div");
    d.className = "convo" + (cv.id === state.current ? " active" : "");
    d.textContent = cv.title || "New chat";
    d.onclick = () => { state.current = cv.id; renderThread(); renderConvos(); };
    c.appendChild(d);
  });
}
function curConvo() { return state.convos.find(c => c.id === state.current); }

function newChat() {
  const id = "c" + Date.now();
  state.convos.unshift({ id, title: "New chat", messages: [] });
  state.current = id; saveConvos(); renderConvos(); renderThread();
}
$("#newChat").onclick = newChat;

const EMPTY_HTML = `<div class="empty" id="emptyState">
  <div class="empty-mark">⚓</div>
  <h2 id="emptyTitle">How can I help?</h2>
  <div class="suggests">
    <button class="sg">Summarize a document</button>
    <button class="sg">Write a Python script</button>
    <button class="sg">Explain a concept simply</button>
  </div></div>`;

function bindSuggests() {
  $$(".sg").forEach(b => b.onclick = () => { $("#input").value = b.textContent; submit(); });
}

function renderThread() {
  const t = $("#thread"); const cv = curConvo();
  if (!cv || cv.messages.length === 0) {
    t.innerHTML = EMPTY_HTML; bindSuggests();
    return;
  }
  t.innerHTML = "";
  cv.messages.forEach(m => t.appendChild(msgEl(m.role, m.content)));
  t.scrollTop = t.scrollHeight;
}
function msgEl(role, content) {
  const d = document.createElement("div");
  d.className = "msg " + (role === "user" ? "user" : "bot");
  if (role === "user") {
    d.innerHTML = `<div class="bubble"></div>`;
    d.querySelector(".bubble").textContent = content;
  } else {
    d.innerHTML = `<div class="who">${state.agent === "hermes" ? "⚕" : state.agent === "openclaw" ? "🐾" : "⚓"}</div><div class="bubble"></div>`;
    d.querySelector(".bubble").textContent = content;
  }
  return d;
}

async function sendMessage(text) {
  const cv = curConvo(); if (!cv) return;
  cv.messages.push({ role: "user", content: text });
  if (cv.title === "New chat") cv.title = text.slice(0, 38);
  saveConvos(); renderConvos(); renderThread();

  const t = $("#thread");
  const botEl = msgEl("assistant", ""); t.appendChild(botEl);
  const bub = botEl.querySelector(".bubble"); bub.innerHTML = '<span class="typing">…thinking</span>';
  t.scrollTop = t.scrollHeight;

  const res = await api("/api/chat", { method: "POST", body: JSON.stringify({ messages: cv.messages.map(m => ({ role: m.role, content: m.content })) }) });
  const reply = res.reply || ("⚠ " + (res.error || "no response"));
  bub.textContent = reply;
  cv.messages.push({ role: "assistant", content: reply });
  saveConvos(); t.scrollTop = t.scrollHeight;
}

function submit() {
  const inp = $("#input"); const v = inp.value.trim(); if (!v) return;
  inp.value = ""; inp.style.height = "auto"; sendMessage(v);
}
$("#send").onclick = submit;
$("#input").addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); submit(); } });
$("#input").addEventListener("input", e => { e.target.style.height = "auto"; e.target.style.height = e.target.scrollHeight + "px"; });

$("#sideToggle").onclick = () => $("#chat").classList.toggle("collapsed");
$("#themeBtn").onclick = () => applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");

// ---------- settings ----------
$("#gearBtn").onclick = async () => {
  const cfg = await api("/api/config");
  $("#setAgent").textContent = state.agent;
  $("#setProvider").value = cfg.provider;
  $("#setModel").value = state.model;
  $("#settingsModal").classList.remove("hidden");
};
$("#closeSettings").onclick = () => $("#settingsModal").classList.add("hidden");
$("#saveSettings").onclick = async () => {
  const body = { provider: $("#setProvider").value };
  if ($("#setKey").value) body.deepseek_key = $("#setKey").value;
  if ($("#setModel").value) { body.deepseek_model = $("#setModel").value; body.local_model = $("#setModel").value; state.model = $("#setModel").value; }
  await api("/api/config", { method: "POST", body: JSON.stringify(body) });
  $("#modelChip").textContent = state.model;
  const r = $("#setResult"); r.className = "test-result ok"; r.textContent = "✓ Saved";
  setTimeout(() => $("#settingsModal").classList.add("hidden"), 700);
};
$("#reRun").onclick = () => { $("#settingsModal").classList.add("hidden"); $("#chat").classList.add("hidden"); $("#wizard").classList.remove("hidden"); showStep("agent"); };

init();
