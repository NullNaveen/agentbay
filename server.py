#!/usr/bin/env python3
"""
AgentBay — one-click launcher + chat UI for local AI agents (Hermes & OpenClaw).

Zero third-party dependencies: pure Python 3.8+ standard library. Serves a
small web UI and a JSON API that detects the OS, checks whether the chosen
agent is installed, installs it from GitHub if not, stores provider config
(e.g. a DeepSeek API key), and proxies chat to the configured provider.

Run:  python3 server.py [--port 8700] [--host 127.0.0.1] [--no-browser]
"""

import argparse
import base64
import hashlib
import datetime
import io
import json
import os
import platform
import re
import secrets
import shutil
import socket
import ssl
import subprocess
import sys
import tarfile
import tempfile
import queue
import threading
import time
import uuid
import urllib.request
import urllib.error
import urllib.parse
import webbrowser

# On Windows, every subprocess.Popen/run normally flashes a console window. AgentBay
# runs many (git, hermes, pip, playwright, cloudflared, …), so without this the user
# sees terminals pop open and close. Patch Popen once to hide the window — run()
# uses Popen internally, so this covers everything, including launch from the icon.
if os.name == "nt":
    _CREATE_NO_WINDOW = 0x08000000
    _orig_popen = subprocess.Popen

    class _HiddenPopen(_orig_popen):
        def __init__(self, *args, **kwargs):
            kwargs["creationflags"] = kwargs.get("creationflags", 0) | _CREATE_NO_WINDOW
            try:
                si = kwargs.get("startupinfo") or subprocess.STARTUPINFO()
                si.dwFlags |= subprocess.STARTF_USESHOWWINDOW
                si.wShowWindow = 0  # SW_HIDE
                kwargs["startupinfo"] = si
            except Exception:
                pass
            super().__init__(*args, **kwargs)

    subprocess.Popen = _HiddenPopen
import zipfile
import html as _html
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
WEB = ROOT / "web"
CONFIG_DIR = Path(os.path.expanduser("~/.agentbay"))
CONFIG_FILE = CONFIG_DIR / "config.json"

# ---- Agent registry -------------------------------------------------------
AGENTS = {
    "hermes": {
        "label": "Hermes Agent",
        "repo": "NousResearch/hermes-agent",
        "bin": "hermes",
        "version_cmd": ["hermes", "--version"],
        # official installer one-liners per OS
        "install": {
            "darwin": "curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash",
            "linux": "curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash",
            "windows": "irm https://hermes-agent.nousresearch.com/install.ps1 | iex",
        },
        "update": {
            "darwin": "hermes update --yes", "linux": "hermes update --yes",
            "windows": "hermes update --yes",
        },
        "docs": "https://hermes-agent.nousresearch.com/docs",
    },
    "openclaw": {
        "label": "OpenClaw",
        "repo": "openclaw/openclaw",
        "bin": "openclaw",
        "version_cmd": ["openclaw", "--version"],
        "install": {
            "darwin": "npm install -g openclaw@latest",
            "linux": "npm install -g openclaw@latest",
            "windows": "npm install -g openclaw@latest",
        },
        "update": {
            "darwin": "npm install -g openclaw@latest", "linux": "npm install -g openclaw@latest",
            "windows": "npm install -g openclaw@latest",
        },
        "docs": "https://github.com/openclaw/openclaw",
    },
}

# ---- Provider registry ----------------------------------------------------
# api: "openai" = OpenAI-wire /chat/completions (OpenAI, DeepSeek, local, etc.)
#      "anthropic" = Claude /v1/messages
PROVIDERS = {
    "deepseek": {"label": "DeepSeek", "api": "openai", "base_url": "https://api.deepseek.com/v1",
                 "default_model": "deepseek-v4-pro", "key_env": "DEEPSEEK_API_KEY", "needs_key": True,
                 "signup_url": "https://platform.deepseek.com/api_keys"},
    "openai":   {"label": "OpenAI", "api": "openai", "base_url": "https://api.openai.com/v1",
                 "default_model": "gpt-4o-mini", "key_env": "OPENAI_API_KEY", "needs_key": True,
                 "signup_url": "https://platform.openai.com/api-keys"},
    "anthropic":{"label": "Claude (Anthropic)", "api": "anthropic", "base_url": "https://api.anthropic.com/v1",
                 "default_model": "claude-sonnet-4-6", "key_env": "ANTHROPIC_API_KEY", "needs_key": True,
                 "signup_url": "https://console.anthropic.com/settings/keys"},
    "gemini":   {"label": "Google Gemini", "api": "openai", "base_url": "https://generativelanguage.googleapis.com/v1beta/openai",
                 "default_model": "gemini-2.5-flash", "key_env": "GEMINI_API_KEY", "needs_key": True,
                 "signup_url": "https://aistudio.google.com/app/apikey", "free": True,
                 "free_note": "Google AI Studio gives a free tier (rate-limited)."},
    "groq":     {"label": "Groq", "api": "openai", "base_url": "https://api.groq.com/openai/v1",
                 "default_model": "llama-3.3-70b-versatile", "key_env": "GROQ_API_KEY", "needs_key": True,
                 "signup_url": "https://console.groq.com/keys", "free": True,
                 "free_note": "Groq has a free tier (rate-limited)."},
    "openrouter": {"label": "OpenRouter", "api": "openai", "base_url": "https://openrouter.ai/api/v1",
                 "default_model": "openai/gpt-5-mini", "key_env": "OPENROUTER_API_KEY", "needs_key": True,
                 "signup_url": "https://openrouter.ai/keys", "free": True,
                 "free_note": "OpenRouter lists many free models (the ':free' ones cost nothing)."},
    "mistral":  {"label": "Mistral", "api": "openai", "base_url": "https://api.mistral.ai/v1",
                 "default_model": "mistral-large-latest", "key_env": "MISTRAL_API_KEY", "needs_key": True,
                 "signup_url": "https://console.mistral.ai/api-keys"},
    "nous":     {"label": "Nous Portal", "api": "openai",
                 "base_url": "https://inference.nousresearch.com/v1",
                 "default_model": "hermes-3-70b", "key_env": "NOUS_API_KEY", "needs_key": True, "free": True,
                 "signup_url": "https://portal.nousresearch.com/",
                 "free_note": "Subscribe on the Nous Portal (free tier available) to get an API key; manage your plan + expiry there."},
    "local":    {"label": "Local (Ollama / MLX)", "api": "openai", "base_url": "http://localhost:11434/v1",
                 "default_model": "smart-model", "key_env": None, "needs_key": False},
}

DEFAULT_CONFIG = {
    "agent": None,            # 'hermes' | 'openclaw'
    "provider": "deepseek",   # active provider id (key of PROVIDERS)
    "active_model": "",       # active model id within the active provider
    # per-provider: key, base_url, and the list of ENABLED models (user-chosen)
    "providers": {
        "deepseek":  {"key": "", "base_url": "https://api.deepseek.com/v1", "models": []},
        "openai":    {"key": "", "base_url": "https://api.openai.com/v1", "models": []},
        "anthropic": {"key": "", "base_url": "https://api.anthropic.com/v1", "models": []},
        "local":     {"key": "", "base_url": "http://localhost:11434/v1", "models": []},
    },
}

_install_jobs = {}   # job_id -> {status, log[]}
_job_lock = threading.Lock()


# ---- SSL context (handles python.org builds with no CA bundle) ------------
def _ssl_ctx():
    # 1. certifi if available
    try:
        import certifi
        return ssl.create_default_context(cafile=certifi.where())
    except Exception:
        pass
    # 2. default (works when system certs are wired in)
    try:
        ctx = ssl.create_default_context()
        if ctx.get_ca_certs():
            return ctx
    except Exception:
        ctx = ssl.create_default_context()
    # 3. common CA bundle locations (macOS / Linux / Homebrew)
    for p in ("/etc/ssl/cert.pem", "/private/etc/ssl/cert.pem",
              "/opt/homebrew/etc/ca-certificates/cert.pem",
              "/usr/local/etc/openssl/cert.pem",
              "/etc/pki/tls/certs/ca-bundle.crt",
              "/etc/ssl/certs/ca-certificates.crt"):
        if os.path.exists(p):
            try:
                ctx.load_verify_locations(p); return ctx
            except Exception:
                continue
    return ctx


_SSL = _ssl_ctx()


def _urlopen(req, timeout=30):
    return urllib.request.urlopen(req, timeout=timeout, context=_SSL)


# ---- config ---------------------------------------------------------------
def _deep_merge(base, over):
    out = dict(base)
    for k, v in (over or {}).items():
        if isinstance(v, dict) and isinstance(out.get(k), dict):
            out[k] = _deep_merge(out[k], v)
        else:
            out[k] = v
    return out


def load_config():
    cfg = _deep_merge(DEFAULT_CONFIG, {})
    if CONFIG_FILE.exists():
        try:
            cfg = _deep_merge(cfg, json.loads(CONFIG_FILE.read_text()))
        except Exception:
            pass
    # env-var key fallback (lets users export keys instead of typing them)
    for pid, spec in PROVIDERS.items():
        env = spec.get("key_env")
        if env and not cfg["providers"].get(pid, {}).get("key") and os.environ.get(env):
            cfg["providers"].setdefault(pid, {})["key"] = os.environ[env]
    return cfg


def save_config(updates):
    CONFIG_DIR.mkdir(parents=True, exist_ok=True)
    cfg = _deep_merge(load_config(), updates)
    CONFIG_FILE.write_text(json.dumps(cfg, indent=2))
    try:
        os.chmod(CONFIG_FILE, 0o600)
    except Exception:
        pass
    return cfg


# ---- server-side chat store (so all browsers of one account share chats) ----
# One store per AgentBay instance (CONFIG_DIR). On EC2 each user is a separate
# instance, so their browsers/devices/teammates see the same conversations.
SESSIONS_FILE = CONFIG_DIR / "sessions.json"
_sessions_lock = threading.Lock()


def _read_sessions_store():
    try:
        d = json.loads(SESSIONS_FILE.read_text())
        if isinstance(d, list):                       # legacy: bare list
            d = {"sessions": d, "deleted": {}}
        d.setdefault("sessions", [])
        d.setdefault("deleted", {})
        return d
    except Exception:
        return {"sessions": [], "deleted": {}}


def _write_sessions_store(store):
    try:
        CONFIG_DIR.mkdir(parents=True, exist_ok=True)
        SESSIONS_FILE.write_text(json.dumps(store))
        try:
            os.chmod(SESSIONS_FILE, 0o600)
        except Exception:
            pass
    except Exception:
        pass


def _sess_updated(s):
    try:
        return int(s.get("updated") or s.get("ts_ms") or 0)
    except Exception:
        return 0


def list_sessions():
    st = _read_sessions_store()
    return {"sessions": st["sessions"], "deleted": list(st["deleted"].keys())}


def merge_sessions(incoming):
    """Merge incoming sessions into the store: per id, the newest `updated` wins;
    ids tombstoned by a >= delete are not resurrected. Returns the merged view."""
    if not isinstance(incoming, list):
        incoming = []
    with _sessions_lock:
        st = _read_sessions_store()
        by_id = {s["id"]: s for s in st["sessions"] if isinstance(s, dict) and s.get("id")}
        deleted = st["deleted"]
        for s in incoming:
            if not isinstance(s, dict) or not s.get("id"):
                continue
            sid, up = s["id"], _sess_updated(s)
            if sid in deleted and deleted[sid] >= up:
                continue                              # don't resurrect a newer delete
            old = by_id.get(sid)
            if not old or up >= _sess_updated(old):
                by_id[sid] = s
        merged = sorted(by_id.values(), key=_sess_updated, reverse=True)
        st["sessions"] = merged
        _write_sessions_store(st)
        return {"sessions": merged, "deleted": list(deleted.keys())}


def delete_session(sid, ts=0):
    if not sid:
        return list_sessions()
    with _sessions_lock:
        st = _read_sessions_store()
        st["sessions"] = [s for s in st["sessions"] if s.get("id") != sid]
        st["deleted"][sid] = max(int(ts or 0), st["deleted"].get(sid, 0)) or int(time.time() * 1000)
        # keep the tombstone list from growing forever
        if len(st["deleted"]) > 2000:
            for k in sorted(st["deleted"], key=lambda k: st["deleted"][k])[:500]:
                st["deleted"].pop(k, None)
        _write_sessions_store(st)
        return {"sessions": st["sessions"], "deleted": list(st["deleted"].keys())}


def public_config(cfg):
    """Config safe to send to the browser — never echo raw keys."""
    c = json.loads(json.dumps(cfg))   # deep copy
    provs = {}
    for pid, spec in PROVIDERS.items():
        p = c.get("providers", {}).get(pid, {})
        provs[pid] = {
            "label": spec["label"], "api": spec["api"], "needs_key": spec["needs_key"],
            "models": p.get("models", []),                 # enabled models
            "base_url": p.get("base_url", spec["base_url"]),
            "key_set": bool(p.get("key")),
            "free": spec.get("free", False),
            "free_note": spec.get("free_note", ""),
            "signup_url": spec.get("signup_url", ""),
        }
    c["providers"] = provs
    c["enabled_models"] = enabled_models(cfg)
    c["user_name"] = (cfg.get("display_name") or os.environ.get("AGENTBAY_USER")
                      or os.environ.get("USER") or os.environ.get("USERNAME") or "User")
    return c


def enabled_models(cfg):
    """The models the user EXPLICITLY added in Settings → Providers — this is the
    ONLY source for the top dropdown. Empty until the user saves a provider there.

    Providers that were auto-imported from the agent (marked `from_agent`) are NOT
    shown — the user only wants to see what they configured themselves. Each shown
    provider still routes THROUGH the agent (tools/terminal) using that provider+
    model as its brain; its saved key is handed to the agent at run time."""
    out = []
    for pid, p in (cfg.get("providers") or {}).items():
        if not isinstance(p, dict):
            continue
        if p.get("from_agent"):
            continue                          # auto-imported from the agent → don't clutter the dropdown
        spec = PROVIDERS.get(pid, {})
        if spec.get("needs_key") and not p.get("key"):
            continue                          # needs a key but none saved → nothing to show
        plabel = spec.get("label") or p.get("label") or pid
        for m in (p.get("models") or []):
            if m:
                out.append({"id": pid + "::" + m, "provider": pid, "model": m,
                            "label": m, "provider_label": plabel})
    return out


def resolve_provider(cfg, pid=None, model=None):
    pid = pid or cfg.get("provider", "deepseek")
    spec = PROVIDERS.get(pid, PROVIDERS["deepseek"])
    p = cfg.get("providers", {}).get(pid, {})
    enabled = p.get("models", [])
    mdl = model or cfg.get("active_model") or (enabled[0] if enabled else spec["default_model"])
    base = (p.get("base_url") or spec["base_url"]).rstrip("/")
    # Local servers (Ollama/LM Studio) expose the OpenAI API at /v1 — if the user
    # pasted just host:port, add it so both fetch and chat work.
    if pid == "local" and not base.endswith("/v1"):
        try:
            if urllib.parse.urlparse(base).path in ("", "/"):
                base += "/v1"
        except Exception:
            pass
    return pid, spec, {"key": p.get("key", ""), "model": mdl, "base_url": base}


# ---- project knowledge: extract text from any uploaded file ---------------
_TEXT_EXT = {".txt", ".md", ".markdown", ".csv", ".tsv", ".json", ".yaml", ".yml",
             ".xml", ".html", ".htm", ".py", ".js", ".jsx", ".ts", ".tsx", ".java",
             ".c", ".h", ".cpp", ".cc", ".hpp", ".go", ".rs", ".rb", ".php", ".sh",
             ".bash", ".zsh", ".sql", ".css", ".scss", ".less", ".ini", ".toml",
             ".cfg", ".conf", ".log", ".env", ".tex", ".rst", ".srt", ".vtt",
             ".gitignore", ".dockerfile", ".properties", ".kt", ".swift", ".m",
             ".r", ".lua", ".pl", ".dart", ".scala", ".clj", ".ex", ".exs"}


def _ooxml_text(data):
    """Extract text from OOXML (.docx/.pptx/.xlsx) — a zip of XML parts. Stdlib only."""
    out = []
    with zipfile.ZipFile(io.BytesIO(data)) as z:
        names = z.namelist()
        parts = [n for n in names if re.match(r"word/(document|header\d*|footer\d*)\.xml$", n)]
        slides = [n for n in names if re.match(r"ppt/slides/slide\d+\.xml$", n)]
        parts += sorted(slides, key=lambda s: int(re.search(r"(\d+)", s).group(1)))
        if "xl/sharedStrings.xml" in names:
            parts.append("xl/sharedStrings.xml")
        for n in parts:
            raw = z.read(n).decode("utf-8", "ignore")
            raw = re.sub(r"</w:p>|</a:p>|</a:t>|</t>|<w:br/>|<a:br/>", "\n", raw)  # paragraph/cell breaks
            raw = re.sub(r"<[^>]+>", "", raw)
            out.append(_html.unescape(raw))
    txt = "\n".join(out)
    return re.sub(r"\n{3,}", "\n\n", txt).strip()


def _pdf_text(data):
    """Extract via poppler's pdftotext if installed (cross-platform, no python deps)."""
    exe = shutil.which("pdftotext")
    if not exe:
        return ""
    try:
        p = subprocess.run([exe, "-q", "-layout", "-", "-"], input=data,
                           stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, timeout=60)
        return p.stdout.decode("utf-8", "ignore").strip()
    except Exception:
        return ""


def _rtf_text(data):
    s = data.decode("latin-1", "ignore")
    s = re.sub(r"\\'[0-9a-fA-F]{2}", "", s)
    s = re.sub(r"\\[a-zA-Z]+-?\d* ?", "", s)
    s = re.sub(r"[{}]", "", s)
    return re.sub(r"\n{3,}", "\n\n", s).strip()


def extract_text(name, data):
    """Best-effort text extraction for project knowledge. Returns (text, note)."""
    ext = os.path.splitext(name or "")[1].lower()
    if ext in _TEXT_EXT or not ext:
        try:
            return data.decode("utf-8"), ""
        except UnicodeDecodeError:
            return data.decode("utf-8", "ignore"), "decoded with some replacements"
    if ext in (".docx", ".pptx", ".xlsx"):
        try:
            t = _ooxml_text(data)
            return t, ("" if t else "no readable text found")
        except Exception as e:
            return "", f"could not parse {ext}: {e}"
    if ext == ".pdf":
        t = _pdf_text(data)
        return (t, "") if t else ("", "PDF needs `pdftotext` (poppler-utils) installed on this machine")
    if ext == ".rtf":
        return _rtf_text(data), ""
    # images, archives, legacy .doc, unknown binaries: keep a reference but no text
    return "", f"{ext or 'binary'} file stored — no text could be extracted"


# ---- import existing chats from a local agent (Hermes workspace, etc.) ----
def _session_dirs():
    """Where a co-located agent (Hermes / its web UI) keeps chat sessions.
    AgentBay's HOME is usually a sub-dir of the agent's HERMES_HOME, so we look
    up a level too."""
    home = Path.home()
    cands = [
        home / "webui" / "sessions",
        home.parent / "webui" / "sessions",            # HERMES_HOME/webui/sessions
        home / ".hermes" / "sessions",
        home / ".hermes" / "webui" / "sessions",
    ]
    he = os.environ.get("HERMES_HOME")
    if he:
        cands += [Path(he) / "webui" / "sessions", Path(he) / "sessions"]
    seen, out = set(), []
    for d in cands:
        rd = str(d)
        if rd not in seen and d.is_dir():
            seen.add(rd); out.append(d)
    return out


def _flatten_content(c):
    if isinstance(c, str):
        return c
    if isinstance(c, list):   # content-parts format
        return "".join(p.get("text", "") for p in c if isinstance(p, dict))
    return "" if c is None else str(c)


def read_agent_sessions(limit=400):
    """Read chat sessions a local agent left on disk → AgentBay session shape."""
    out, seen = [], set()
    for d in _session_dirs():
        for f in sorted(d.glob("*.json")):
            try:
                s = json.loads(f.read_text())
            except Exception:
                continue
            if not isinstance(s, dict):
                continue
            msgs = s.get("messages")
            if not isinstance(msgs, list) or not msgs:
                continue
            sid = "hermes-" + str(s.get("session_id") or f.stem)
            if sid in seen:
                continue
            cleaned = []
            for m in msgs:
                if not isinstance(m, dict):
                    continue
                role = m.get("role")
                if role not in ("user", "assistant", "system"):
                    continue
                text = _flatten_content(m.get("content"))
                if text.strip():
                    cleaned.append({"role": role, "content": text})
            if not cleaned:
                continue
            seen.add(sid)
            ts = s.get("updated_at") or s.get("created_at") or 0
            out.append({
                "id": sid,
                "title": (s.get("title") or "Imported chat").strip() or "Imported chat",
                "model": s.get("model") or "",
                "updated": int(float(ts) * 1000) if ts else None,
                "tags": ["imported"],
                "imported": True,
                "messages": cleaned,
            })
    out.sort(key=lambda x: x.get("updated") or 0, reverse=True)
    return out[:limit]


# AgentBay provider id -> (gateway provider name, api_type) for writing into the agent config
_AGENT_PROV_OUT = {
    "deepseek": ("deepseek", "openai_compatible"),
    "openai": ("openai", "openai_compatible"),
    "anthropic": ("anthropic", "anthropic"),
    "gemini": ("gemini", "openai_compatible"),
    "groq": ("groq", "openai_compatible"),
    "openrouter": ("openrouter", "openai_compatible"),
    "mistral": ("mistral", "openai_compatible"),
    "nous": ("nous", "openai_compatible"),
}


def _gateway_profile():
    """The hermes gateway systemd-instance / profile name for this AgentBay."""
    p = os.environ.get("AGENTBAY_PROFILE") or os.environ.get("HERMES_PROFILE")
    if p:
        return p
    home = Path.home()
    if home.name == "agentbay-home":
        return home.parent.name              # /srv/hermes-multi/<profile>/agentbay-home
    he = os.environ.get("HERMES_HOME")
    if he:
        return Path(he).name
    return None


def _gateway_config_path():
    he = os.environ.get("HERMES_CONFIG_PATH")
    if he and Path(he).is_file():
        return Path(he)
    for c in [Path.home().parent / "config.yaml", Path.home() / ".hermes" / "config.yaml"]:
        if c.is_file():
            return c
    return None


def sync_provider_to_gateway(pid, key, base_url=""):
    """Write an AgentBay-added provider's creds into the agent gateway's config so
    the agent can use that provider's models. Returns True when the config changed."""
    if not key:
        return False
    nt = _AGENT_PROV_OUT.get(pid)
    if not nt:
        return False
    try:
        import yaml
    except Exception:
        return False
    cf = _gateway_config_path()
    if not cf:
        return False
    try:
        d = yaml.safe_load(cf.read_text()) or {}
    except Exception:
        return False
    if not isinstance(d, dict):
        return False
    name, _api_type = nt
    base_url = base_url or PROVIDERS.get(pid, {}).get("base_url", "")
    provs = d.setdefault("providers", {})
    cur = provs.get(name) if isinstance(provs.get(name), dict) else {}
    if cur.get("api_key") == key and (not base_url or cur.get("base_url") == base_url):
        return False                          # unchanged → no restart needed
    entry = dict(cur)
    entry["api_key"] = key
    if base_url:
        entry["base_url"] = base_url          # Hermes infers provider type from its name
    provs[name] = entry
    try:
        cf.write_text(yaml.safe_dump(d, sort_keys=False))
        return True
    except Exception:
        return False


def restart_gateway():
    """Restart the agent gateway so it loads newly-written channel creds / providers.
    EC2 multi-user uses a passwordless sudoers rule for systemd; standalone
    (launchd / Windows / OpenClaw) drives the agent CLI directly (no sudo)."""
    prof = _gateway_profile()
    if prof:
        try:
            subprocess.Popen(["sudo", "-n", "systemctl", "restart", f"hermes-gateway@{prof}.service"],
                             stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            return True
        except Exception:
            return False
    for bn in ("hermes", "openclaw"):     # standalone: `hermes gateway restart` / `openclaw gateway restart`
        b = which(bn)
        if b:
            try:
                subprocess.Popen([b, "gateway", "restart"], env=_agent_env(),
                                 stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                return True
            except Exception:
                pass
    return False


# ==================== Messaging integrations (channels) ====================
# AgentBay can connect the agent gateway to messaging platforms (Telegram,
# Discord, Slack, WhatsApp, Google Chat, …). Same mechanism the Hermes gateway
# uses itself: credentials live in the gateway's .env, behaviour knobs in
# config.yaml, and the gateway connects to any platform whose token is present.
# We write the .env, then restart the gateway (passwordless sudoers rule).
#
# Each integration is data-driven so the UI renders generically:
#   primary  — env var that decides "connected" (non-empty = on)
#   fields   — what the UI collects → env vars (secret fields never echoed back)
#   const    — env vars forced on connect (e.g. WHATSAPP_ENABLED=true)
#   file     — field env vars whose value is written to a file, env points at it
INTEGRATIONS = [
    {
        "id": "telegram", "label": "Telegram", "icon": "Telegram", "kind": "token",
        "blurb": "Message your agent from any Telegram chat or group.",
        "primary": "TELEGRAM_BOT_TOKEN",
        "docs": "https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram",
        "fields": [
            {"env": "TELEGRAM_BOT_TOKEN", "label": "Bot token", "type": "password", "required": True,
             "placeholder": "123456789:ABCdef-ghIJKlmno...",
             "help": "From @BotFather → /newbot → copy the HTTP API token."},
            {"env": "TELEGRAM_ALLOWED_USERS", "label": "Allowed user IDs", "type": "text", "required": False,
             "placeholder": "123456789, 987654321",
             "help": "Optional. Comma-separated numeric IDs. Leave blank to use DM pairing."},
        ],
        "guide": [
            "In Telegram, open @BotFather and send /newbot.",
            "Pick a name and a username; BotFather replies with a token.",
            "Paste the token here and press Connect.",
            "DM your new bot — the first message triggers a pairing code you approve.",
        ],
    },
    {
        "id": "discord", "label": "Discord", "icon": "Discord", "kind": "token",
        "blurb": "Add the agent as a Discord bot in your server or DMs.",
        "primary": "DISCORD_BOT_TOKEN",
        "docs": "https://hermes-agent.nousresearch.com/docs/user-guide/messaging/discord",
        "fields": [
            {"env": "DISCORD_BOT_TOKEN", "label": "Bot token", "type": "password", "required": True,
             "placeholder": "MTk4N...", "help": "Discord Developer Portal → your app → Bot → Reset Token."},
            {"env": "DISCORD_ALLOWED_CHANNELS", "label": "Allowed channel IDs", "type": "text", "required": False,
             "placeholder": "112233445566", "help": "Optional. Restrict to specific channels."},
        ],
        "guide": [
            "Go to discord.com/developers → New Application.",
            "Open the Bot tab, Reset Token, copy it.",
            "Enable the Message Content intent under Privileged Gateway Intents.",
            "OAuth2 → URL Generator → scopes bot + applications.commands → invite it to your server.",
            "Paste the token here and Connect.",
        ],
    },
    {
        "id": "slack", "label": "Slack", "icon": "Slack", "kind": "token",
        "blurb": "Talk to the agent from Slack channels and DMs (Socket Mode).",
        "primary": "SLACK_BOT_TOKEN",
        "docs": "https://hermes-agent.nousresearch.com/docs/user-guide/messaging/slack",
        "fields": [
            {"env": "SLACK_BOT_TOKEN", "label": "Bot token (xoxb-…)", "type": "password", "required": True,
             "placeholder": "xoxb-...", "help": "OAuth & Permissions → Bot User OAuth Token."},
            {"env": "SLACK_APP_TOKEN", "label": "App token (xapp-…)", "type": "password", "required": True,
             "placeholder": "xapp-...", "help": "Basic Information → App-Level Tokens (connections:write)."},
            {"env": "SLACK_SIGNING_SECRET", "label": "Signing secret", "type": "password", "required": False,
             "placeholder": "optional in Socket Mode", "help": "Basic Information → Signing Secret. Optional for Socket Mode."},
        ],
        "guide": [
            "Create an app at api.slack.com/apps (From scratch).",
            "Enable Socket Mode; generate an App-Level Token with connections:write (xapp-).",
            "OAuth & Permissions: add scopes app_mentions:read, chat:write, im:history, channels:history; install to workspace; copy the xoxb- token.",
            "Paste both tokens here and Connect, then /invite the bot to a channel.",
        ],
    },
    {
        "id": "whatsapp", "label": "WhatsApp", "icon": "WhatsApp", "kind": "qr",
        "blurb": "Link a WhatsApp number by scanning a QR code.",
        "primary": "WHATSAPP_ENABLED",
        "docs": "https://hermes-agent.nousresearch.com/docs/user-guide/messaging/whatsapp",
        "const": {"WHATSAPP_ENABLED": "true"},
        "pair_cmd": "hermes whatsapp",
        "fields": [],
        "guide": [
            "Press Connect — this enables WhatsApp on your agent gateway.",
            "If a QR appears below, scan it: WhatsApp → Settings → Linked Devices → Link a Device.",
            "No QR in ~15s? WhatsApp pairing needs an interactive terminal — open one and run `hermes whatsapp`, scan the QR there.",
            "This card shows 'Linked' automatically once pairing completes; then message that number to reach the agent.",
        ],
    },
    {
        "id": "googlechat", "label": "Google Chat", "icon": "GoogleChat", "kind": "webhook",
        "blurb": "Run the agent as a Google Chat app for your Workspace.",
        "primary": "GOOGLE_CHAT_PROJECT_ID",
        "docs": "https://hermes-agent.nousresearch.com/docs/user-guide/messaging/google-chat",
        "fields": [
            {"env": "GOOGLE_CHAT_PROJECT_ID", "label": "GCP project ID", "type": "text", "required": True,
             "placeholder": "my-project-123", "help": "The Google Cloud project that owns the Chat app."},
            {"env": "GOOGLE_CHAT_SUBSCRIPTION", "label": "Pub/Sub subscription", "type": "text", "required": True,
             "placeholder": "projects/my-project-123/subscriptions/hermes-chat",
             "help": "Pull subscription the Chat API publishes events to."},
            {"env": "GOOGLE_CHAT_SERVICE_ACCOUNT_JSON", "label": "Service account JSON", "type": "textarea", "required": True,
             "file": "googlechat-service-account.json",
             "placeholder": '{\n  "type": "service_account", ...\n}',
             "help": "Paste the downloaded service-account key JSON. Stored as a file on the gateway, chmod 600."},
        ],
        "guide": [
            "In Google Cloud Console enable the Google Chat API and Pub/Sub API.",
            "Create a service account, add a JSON key, and download it.",
            "Create a Pub/Sub topic + pull subscription; grant the Chat API service agent Publisher on the topic.",
            "In Chat API → Configuration: app name, set 'App receives events via Cloud Pub/Sub', point it at your topic.",
            "Paste the project ID, subscription path, and the JSON key here, then Connect.",
        ],
    },
    {
        "id": "signal", "label": "Signal", "icon": "Signal", "kind": "token",
        "blurb": "Bridge Signal via a signal-cli REST endpoint.",
        "primary": "SIGNAL_HTTP_URL",
        "docs": "https://hermes-agent.nousresearch.com/docs/user-guide/messaging/signal",
        "fields": [
            {"env": "SIGNAL_HTTP_URL", "label": "signal-cli REST URL", "type": "text", "required": True,
             "placeholder": "http://localhost:8080", "help": "URL of a running signal-cli-rest-api instance."},
            {"env": "SIGNAL_ACCOUNT", "label": "Signal number", "type": "text", "required": True,
             "placeholder": "+15551234567", "help": "The registered phone number, E.164 format."},
        ],
        "guide": [
            "Run signal-cli-rest-api (Docker: bbernhard/signal-cli-rest-api).",
            "Register/link your number with it.",
            "Enter the REST URL and your number here, then Connect.",
        ],
    },
    {
        "id": "matrix", "label": "Matrix", "icon": "Matrix", "kind": "login",
        "blurb": "Connect to any Matrix homeserver (Element, etc.).",
        "primary": "MATRIX_HOMESERVER",
        "docs": "https://hermes-agent.nousresearch.com/docs/user-guide/messaging/matrix",
        "fields": [
            {"env": "MATRIX_HOMESERVER", "label": "Homeserver URL", "type": "text", "required": True,
             "placeholder": "https://matrix.org", "help": "Your Matrix homeserver base URL."},
            {"env": "MATRIX_USER", "label": "User ID", "type": "text", "required": True,
             "placeholder": "@bot:matrix.org", "help": "The bot account's full Matrix ID."},
            {"env": "MATRIX_PASSWORD", "label": "Password", "type": "password", "required": False,
             "placeholder": "account password", "help": "Use this OR an access token below."},
            {"env": "MATRIX_ACCESS_TOKEN", "label": "Access token", "type": "password", "required": False,
             "placeholder": "syt_...", "help": "Alternative to password — a long-lived access token."},
        ],
        "guide": [
            "Create a Matrix account for the bot on your homeserver.",
            "Enter the homeserver URL, the bot's user ID, and a password (or access token).",
            "Connect, then invite the bot to a room.",
        ],
    },
    {
        "id": "mattermost", "label": "Mattermost", "icon": "Mattermost", "kind": "token",
        "blurb": "Add the agent as a Mattermost bot account.",
        "primary": "MATTERMOST_URL",
        "docs": "https://hermes-agent.nousresearch.com/docs/user-guide/messaging/mattermost",
        "fields": [
            {"env": "MATTERMOST_URL", "label": "Server URL", "type": "text", "required": True,
             "placeholder": "https://chat.example.com", "help": "Your Mattermost base URL."},
            {"env": "MATTERMOST_TOKEN", "label": "Bot token", "type": "password", "required": True,
             "placeholder": "token", "help": "System Console → Integrations → Bot Accounts → create → copy token."},
        ],
        "guide": [
            "In the System Console enable Bot Accounts.",
            "Integrations → Bot Accounts → Add → copy the access token.",
            "Enter the server URL and token here, then Connect.",
        ],
    },
    {
        "id": "email", "label": "Email", "icon": "Mail", "kind": "login",
        "blurb": "Let the agent read and reply over an IMAP/SMTP mailbox.",
        "primary": "EMAIL_ADDRESS",
        "docs": "https://hermes-agent.nousresearch.com/docs/user-guide/messaging/email",
        "fields": [
            {"env": "EMAIL_ADDRESS", "label": "Email address", "type": "text", "required": True,
             "placeholder": "agent@example.com"},
            {"env": "EMAIL_PASSWORD", "label": "Password / app password", "type": "password", "required": True,
             "placeholder": "app password", "help": "For Gmail/Outlook use an app password, not your login password."},
            {"env": "EMAIL_IMAP_HOST", "label": "IMAP host", "type": "text", "required": True,
             "placeholder": "imap.gmail.com"},
            {"env": "EMAIL_SMTP_HOST", "label": "SMTP host", "type": "text", "required": True,
             "placeholder": "smtp.gmail.com"},
            {"env": "EMAIL_ALLOWED_USERS", "label": "Allowed senders", "type": "text", "required": False,
             "placeholder": "you@example.com", "help": "Optional. Only these addresses are answered."},
        ],
        "guide": [
            "Create or pick a mailbox for the agent.",
            "Generate an app password if your provider requires one (Gmail, Outlook).",
            "Fill in the address, password and IMAP/SMTP hosts, then Connect.",
        ],
    },
]
_INTEGRATIONS_BY_ID = {c["id"]: c for c in INTEGRATIONS}


def _gateway_env_path():
    """The agent gateway's .env file (where channel credentials live)."""
    he = os.environ.get("HERMES_HOME")
    if he:
        return Path(he) / ".env"
    cf = _gateway_config_path()
    if cf:
        return cf.parent / ".env"
    return Path.home() / ".hermes" / ".env"


def _parse_env(text):
    """Parse a .env into an ordered list of (kind, key, value/raw) entries so we
    can rewrite it preserving comments and order."""
    out = []
    for line in text.splitlines():
        s = line.strip()
        if not s or s.startswith("#") or "=" not in s:
            out.append(("raw", None, line))
            continue
        k, v = line.split("=", 1)
        out.append(("kv", k.strip(), v))
    return out


def read_gateway_env():
    p = _gateway_env_path()
    if not p.is_file():
        return {}
    env = {}
    try:
        for kind, k, v in _parse_env(p.read_text()):
            if kind == "kv":
                env[k] = v.strip().strip('"').strip("'")
    except Exception:
        return {}
    return env


def write_gateway_env(updates):
    """Merge {KEY: value} into the gateway .env, preserving order/comments.
    A value of "" / None removes that key. Returns True on write."""
    p = _gateway_env_path()
    try:
        p.parent.mkdir(parents=True, exist_ok=True)
        existing = _parse_env(p.read_text()) if p.is_file() else []
    except Exception:
        return False
    remove = {k for k, v in updates.items() if v in ("", None)}
    setk = {k: v for k, v in updates.items() if v not in ("", None)}
    seen, lines = set(), []
    for kind, k, raw in existing:
        if kind == "kv" and k in setk:
            lines.append(f"{k}={setk[k]}"); seen.add(k)
        elif kind == "kv" and k in remove:
            seen.add(k)                       # drop the line
        elif kind == "kv":
            lines.append(f"{k}={raw.strip()}")   # untouched key — keep its KEY= prefix
        else:
            lines.append(raw)                    # comment / blank line, verbatim
    for k, v in setk.items():
        if k not in seen:
            lines.append(f"{k}={v}")
    try:
        p.write_text("\n".join(lines).rstrip("\n") + "\n")
        try:
            os.chmod(p, 0o600)
        except Exception:
            pass
        return True
    except Exception:
        return False


def _integration_public(c, env):
    """One channel's spec + connection status for the UI. Never echoes secrets."""
    set_fields = []
    for f in c["fields"]:
        val = env.get(f["env"], "")
        set_fields.append({
            "env": f["env"], "label": f["label"], "type": f.get("type", "text"),
            "required": bool(f.get("required")), "placeholder": f.get("placeholder", ""),
            "help": f.get("help", ""), "file": bool(f.get("file")),
            "is_set": bool(val),
        })
    # "connected" must reflect REALITY, not just "a token is present in .env":
    #  - QR channels (WhatsApp) → actually paired (creds.json exists)
    #  - token channels → the token is set (the most we can know without a live probe)
    if c["kind"] == "qr":
        connected = (whatsapp_qr_status().get("state") == "paired")
    else:
        connected = bool(env.get(c["primary"], ""))
    return {
        "id": c["id"], "label": c["label"], "icon": c["icon"], "kind": c["kind"],
        "blurb": c["blurb"], "docs": c.get("docs", ""), "guide": c.get("guide", []),
        "pair_cmd": c.get("pair_cmd", ""), "fields": set_fields,
        "connected": connected,
    }


def integrations_status(cfg):
    env = read_gateway_env()
    gw = bool(_agent_gateway(cfg) or _gateway_config_path())
    prof = _gateway_profile()
    return {
        "gateway_ready": gw,
        "gateway_profile": prof,
        "channels": [_integration_public(c, env) for c in INTEGRATIONS],
    }


def _channel_file_dir():
    p = _gateway_env_path().parent
    return p


def save_integration(cid, values):
    """Write a channel's credentials into the gateway .env (file-type fields go to
    a chmod-600 file), apply forced consts, and restart the gateway. Returns dict."""
    c = _INTEGRATIONS_BY_ID.get(cid)
    if not c:
        return {"ok": False, "error": "unknown channel"}
    if not isinstance(values, dict):
        values = {}
    updates = dict(c.get("const", {}))
    for f in c["fields"]:
        if f["env"] not in values:
            continue
        v = values[f["env"]]
        if v is None:
            continue
        v = str(v)
        if not v.strip():
            continue                          # blank → leave existing untouched
        if f.get("file"):
            fp = _channel_file_dir() / f["file"]
            try:
                fp.write_text(v)
                os.chmod(fp, 0o600)
            except Exception as e:
                return {"ok": False, "error": f"could not write key file: {e}"}
            updates[f["env"]] = str(fp)
        else:
            updates[f["env"]] = v.replace("\n", " ").strip()
    if not write_gateway_env(updates):
        return {"ok": False, "error": "could not write gateway .env"}
    restarted = restart_gateway()
    return {"ok": True, "restarted": restarted, "channel": cid}


_ANSI_RE = re.compile(r"\x1b\[[0-9;?]*[A-Za-z]")
_QR_BLOCK = set("▀▄██░▒▓ \xa0")   # ▀ ▄ █ shades + space


def _whatsapp_dir():
    """The gateway's WhatsApp state dir (new layout, with legacy fallback)."""
    he = os.environ.get("HERMES_HOME")
    base = Path(he) if he else (_gateway_config_path().parent if _gateway_config_path() else Path.home() / ".hermes")
    new = base / "platforms" / "whatsapp"
    legacy = base / "whatsapp"
    return legacy if (legacy / "bridge.log").exists() or (legacy / "session").exists() else new


def _extract_qr_ascii(text):
    """Pull the most recent ASCII QR (qrcode-terminal output) out of bridge.log."""
    idx = text.rfind("Scan this QR")
    if idx == -1:
        return ""
    lines = text[idx:].splitlines()[1:]     # drop the marker line itself
    out = []
    for ln in lines:
        s = _ANSI_RE.sub("", ln).rstrip("\n")
        body = s.strip()
        if not body:
            if out:
                break                        # blank line after the QR → done
            continue
        if all((ch in _QR_BLOCK) for ch in s):
            out.append(s.rstrip())
        elif out:
            break                            # a normal log line → QR finished
    return "\n".join(out)


def whatsapp_qr_status():
    """State of the WhatsApp pairing bridge for the UI:
    paired (creds present) / qr (scan it) / waiting (bridge starting) / off."""
    wd = _whatsapp_dir()
    creds = wd / "session" / "creds.json"
    if creds.exists():
        return {"state": "paired"}
    env = read_gateway_env()
    enabled = (env.get("WHATSAPP_ENABLED", "").lower() in ("true", "1", "yes"))
    log = wd / "bridge.log"
    if log.exists():
        try:
            text = log.read_text(errors="ignore")[-20000:]
        except Exception:
            text = ""
        qr = _extract_qr_ascii(text)
        if qr:
            return {"state": "qr", "qr": qr}
    return {"state": "waiting" if enabled else "off"}


def disconnect_integration(cid):
    c = _INTEGRATIONS_BY_ID.get(cid)
    if not c:
        return {"ok": False, "error": "unknown channel"}
    rm = {c["primary"]: ""}
    for f in c["fields"]:
        rm[f["env"]] = ""
    for k in c.get("const", {}):
        rm[k] = ""
    if not write_gateway_env(rm):
        return {"ok": False, "error": "could not write gateway .env"}
    restarted = restart_gateway()
    return {"ok": True, "restarted": restarted, "channel": cid}


# map a co-located agent's provider names → AgentBay provider ids
_AGENT_PROV_MAP = {"deepseek": "deepseek", "openai": "openai", "anthropic": "anthropic",
                   "claude": "anthropic", "gemini": "gemini", "google": "gemini",
                   "groq": "groq", "openrouter": "openrouter", "mistral": "mistral",
                   "nous": "nous", "nousresearch": "nous"}


def _agent_config_files():
    home = Path.home()
    cands = [home.parent / "config.yaml", home / ".hermes" / "config.yaml", home / "config.yaml"]
    he = os.environ.get("HERMES_CONFIG_PATH")
    if he:
        cands.insert(0, Path(he))
    seen, out = set(), []
    for c in cands:
        if str(c) not in seen and c.is_file():
            seen.add(str(c)); out.append(c)
    return out


def read_agent_providers():
    """Read provider API keys a co-located agent already has configured, so we can
    import them. Keys only — we don't auto-enable raw models (the agent stays the
    default experience). Needs PyYAML; returns {} gracefully if unavailable."""
    try:
        import yaml
    except Exception:
        return {}
    found = {}

    def consider(name, pc):
        if not isinstance(pc, dict):
            return
        pid = _AGENT_PROV_MAP.get(str(name).lower())
        key = pc.get("api_key")
        if pid and key and str(key).lower() not in ("ollama", "none", "", "null"):
            found.setdefault(pid, {"key": key, "base_url": pc.get("base_url", "")})

    for cf in _agent_config_files():
        try:
            cfg = yaml.safe_load(cf.read_text()) or {}
        except Exception:
            continue
        if not isinstance(cfg, dict):
            continue
        m = cfg.get("model")
        if isinstance(m, dict) and m.get("provider"):
            consider(m["provider"], m)
        provs = cfg.get("providers")
        if isinstance(provs, dict):
            for hname, pc in provs.items():
                consider(hname, pc)
    return found


# ---- OS / agent detection -------------------------------------------------
def detect_os():
    sysname = platform.system().lower()  # darwin / linux / windows
    return {
        "os": sysname,
        "os_pretty": {"darwin": "macOS", "linux": "Linux", "windows": "Windows"}.get(sysname, sysname),
        "arch": platform.machine(),
        "python": platform.python_version(),
    }


def _extra_bin_dirs():
    """Install locations that aren't always on a systemd/service PATH."""
    home = Path.home()
    dirs = ["/usr/local/bin", "/usr/bin", "/bin", "/opt/homebrew/bin", "/snap/bin",
            str(home / ".local/bin"), str(home / ".hermes/bin"), str(home / "bin"),
            str(home / ".npm-global/bin"), str(home / ".cargo/bin"),
            str(home / ".bun/bin"), str(home / "go/bin"),
            # Hermes installer puts its CLI in a venv here (per-user + shared multi-user)
            str(home / ".hermes/hermes-agent/venv/bin")]
    # multi-user / shared installs: any /home/*/.hermes venv (e.g. EC2 ubuntu shared)
    for base in [Path("/home"), Path("/srv/hermes-multi")]:
        try:
            dirs += [str(p) for p in base.glob("*/.hermes/hermes-agent/venv/bin")]
            dirs += [str(p) for p in base.glob("*/*/.hermes/hermes-agent/venv/bin")]
        except Exception:
            pass
    # node version managers (nvm / fnm) install global CLIs under per-version bins.
    # fnm's data dir varies: ~/.fnm, ~/.local/share/fnm (Linux XDG), and on macOS
    # ~/Library/Application Support/fnm — cover all so npm globals (OpenClaw) resolve.
    for base in [home / ".nvm/versions/node", home / ".local/share/fnm/node-versions",
                 home / ".fnm/node-versions",
                 home / "Library/Application Support/fnm/node-versions"]:
        try:
            dirs += [str(d) for d in base.glob("*/bin")]
            dirs += [str(d) for d in base.glob("*/installation/bin")]
        except Exception:
            pass
    # Windows install locations (Hermes → %LOCALAPPDATA%\hermes\hermes-agent\venv\Scripts;
    # npm globals like OpenClaw → %APPDATA%\npm)
    if os.name == "nt":
        la = os.environ.get("LOCALAPPDATA", str(home / "AppData" / "Local"))
        ad = os.environ.get("APPDATA", str(home / "AppData" / "Roaming"))
        dirs += [
            str(Path(la) / "hermes" / "hermes-agent" / "venv" / "Scripts"),
            str(Path(la) / "Programs" / "hermes"),
            str(Path(la) / "Programs" / "openclaw"),
            str(Path(ad) / "npm"),
        ]
        try:                       # nvm-windows per-version dirs
            dirs += [str(p) for p in (Path(ad) / "nvm").glob("v*")]
        except Exception:
            pass
    try:
        dirs.append(str(BIN_DIR))   # AgentBay's own tool dir
    except Exception:
        pass
    return dirs


def _agent_env(base=None):
    """An env whose PATH includes all the agent/tool install dirs — so a node-based
    CLI like `openclaw` (shebang `#!/usr/bin/env node`) finds `node`, etc."""
    env = dict(base if base is not None else os.environ)
    extra = os.pathsep.join(d for d in _extra_bin_dirs() if d)
    env["PATH"] = extra + os.pathsep + env.get("PATH", "")
    return env


def which(binname):
    p = shutil.which(binname)
    if p:
        return p
    exts = ["", ".cmd", ".exe", ".bat"] if os.name == "nt" else [""]
    for d in _extra_bin_dirs():
        for ext in exts:
            cand = Path(d) / (binname + ext)
            try:
                if cand.is_file() and os.access(str(cand), os.X_OK):
                    return str(cand)
            except Exception:
                pass
    return None


def agent_status(agent_id):
    spec = AGENTS[agent_id]
    path = which(spec["bin"])
    installed = bool(path)
    version = None
    if installed:
        try:
            cmd = [path] + list(spec["version_cmd"][1:])   # use the resolved path, not bare name
            out = subprocess.run(cmd, capture_output=True, text=True, timeout=20)
            version = (out.stdout or out.stderr).strip().splitlines()[0] if (out.stdout or out.stderr) else None
        except Exception:
            version = "unknown"
    return {"agent": agent_id, "label": spec["label"], "installed": installed,
            "path": path, "version": version, "repo": spec["repo"], "docs": spec["docs"]}


def github_latest_release(repo):
    url = f"https://api.github.com/repos/{repo}/releases/latest"
    try:
        req = urllib.request.Request(url, headers={"Accept": "application/vnd.github+json",
                                                   "User-Agent": "AgentBay"})
        with _urlopen(req, 15) as r:
            d = json.loads(r.read())
            return {"tag": d.get("tag_name"), "name": d.get("name"), "url": d.get("html_url")}
    except Exception as e:
        return {"error": str(e)}


def _date_ver(s):
    m = re.search(r"(20\d\d)\.(\d{1,2})\.(\d{1,2})", s or "")
    return (int(m.group(1)), int(m.group(2)), int(m.group(3))) if m else None


def _semver_tokens(s):
    return re.findall(r"\d+(?:\.\d+){1,3}", s or "")


def _update_available(latest, cur):
    """Conservative: only True when we're confident `latest` is strictly newer.

    Agents like Hermes use date versioning (CLI says '… (2026.5.29)') while the
    GitHub tag may be 'v2026.5.29.2' — same-day build, NOT an update. Compare by
    date first (ignoring trailing patch), then fall back to same-family semver."""
    if not latest:
        return False
    dl, dc = _date_ver(latest), _date_ver(cur)
    if dl and dc:
        return dl > dc
    lat = latest.lstrip("vV").strip()
    cur_tokens = _semver_tokens(cur)
    if lat in cur_tokens:
        return False

    def tup(x):
        try:
            return tuple(int(n) for n in x.split("."))
        except Exception:
            return ()
    lt = tup(lat)
    for c in cur_tokens:
        ct = tup(c)
        if ct and lt and ct[0] == lt[0]:   # same major family → comparable
            return lt > ct
    return False                            # incomparable → don't nag


def update_status(agent_id):
    """Compare installed version with the latest GitHub release tag."""
    st = agent_status(agent_id)
    if not st["installed"]:
        return {"installed": False, "update_available": False}
    rel = github_latest_release(AGENTS[agent_id]["repo"])
    latest = rel.get("tag")
    cur = st.get("version") or ""
    return {"installed": True, "current": cur, "latest": latest,
            "update_available": _update_available(latest, cur)}


# ---- install / update (background job) ------------------------------------
def run_install(job_id, agent_id, which="install"):
    spec = AGENTS[agent_id]
    sysname = platform.system().lower()
    cmd = spec.get(which, {}).get(sysname)

    def log(line):
        with _job_lock:
            _install_jobs[job_id]["log"].append(line)

    if not cmd:
        with _job_lock:
            _install_jobs[job_id]["status"] = "error"
        log(f"No {which} command defined for OS '{sysname}'.")
        return

    log(f"$ {cmd}")
    try:
        if sysname == "windows":
            proc = subprocess.Popen(["powershell", "-NoProfile", "-Command", cmd],
                                    stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
        else:
            proc = subprocess.Popen(["/bin/bash", "-lc", cmd],
                                    stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
        for line in iter(proc.stdout.readline, ""):
            if line:
                log(line.rstrip())
        proc.wait()
        ok = proc.returncode == 0 and bool(which(spec["bin"]))
        with _job_lock:
            _install_jobs[job_id]["status"] = "done" if ok else "error"
        log(f"[exit {proc.returncode}] installed={bool(which(spec['bin']))}")
    except Exception as e:
        with _job_lock:
            _install_jobs[job_id]["status"] = "error"
        log(f"ERROR: {e}")


# ---- remote share link (public tunnel + secret-token gate) ----------------
# A user clicks "Create public link" -> we open a tunnel (Cloudflare quick
# tunnel by default; Tailscale Funnel if chosen) and hand back a link that
# embeds a random access token. Every request through the tunnel must carry
# that token (?k=... on first hit -> HttpOnly cookie), or it gets 401. This
# protects the user's API key from anyone who doesn't have the exact link.
SHARE = {"active": False, "token": None, "url": None, "provider": None}
SERVER = {"host": "127.0.0.1", "port": 8700}
_share_proc = None
_share_lock = threading.RLock()

BIN_DIR = CONFIG_DIR / "bin"   # AgentBay's own tool dir — self-contained, no brew/winget needed

# ---- browser-use skill: let the agent drive a real browser, on any OS --------
_BU_VENV = CONFIG_DIR / "browser-use-venv"


def _bu_paths():
    win = (os.name == "nt")
    bindir = _BU_VENV / ("Scripts" if win else "bin")
    return {
        "venv": _BU_VENV,
        "python": bindir / ("python.exe" if win else "python"),
        "pip": bindir / ("pip.exe" if win else "pip"),
        "cli": bindir / ("browser-use.exe" if win else "browser-use"),
        "playwright": bindir / ("playwright.exe" if win else "playwright"),
        "wrapper": (BIN_DIR / ("browser-use.cmd" if win else "browser-use")),
    }


def _agent_skills_dirs():
    """Where to drop the skill so a co-located agent picks it up. Hermes reads
    HERMES_HOME/skills (per-user) and ~/.hermes/skills (standalone)."""
    out, seen = [], set()
    cands = []
    he = os.environ.get("HERMES_HOME")
    if he:
        cands.append(Path(he) / "skills")
    cands += [Path.home() / ".hermes" / "skills"]
    if os.name == "nt":
        la = os.environ.get("LOCALAPPDATA", str(Path.home() / "AppData" / "Local"))
        cands.append(Path(la) / "hermes" / "skills")
    for c in cands:
        if str(c) not in seen:
            seen.add(str(c)); out.append(c)
    return out


def _bu_skill_md(cli_cmd):
    return """---
name: browser-use
description: Drive a real web browser — open pages, click, type, read, fill forms, screenshot, extract data from JavaScript-heavy or logged-in sites. Use when a task needs interacting with a live page, not just a web search.
allowed-tools: Bash(browser-use:*)
---

# browser-use — control a real browser

Use this when the task needs a **live, rendered web page** (logged-in dashboards,
multi-step forms, JS-heavy sites, "show me this page"), not a plain search.
For simple lookups use `web_search` instead — it's faster.

The `browser-use` CLI keeps one browser open across calls via a background daemon.

```
browser-use open <url>       # launch + navigate
browser-use state            # list clickable elements (with indices) + page text
browser-use click <index>    # click an element by its index
browser-use input <i> "txt"  # type into field <i>
browser-use scroll <down|up>
browser-use screenshot       # capture the page (returns an image path)
browser-use close            # end the session
```

Connect to the user's own Chrome (keeps their logins/cookies) when a task is
behind a login: `browser-use connect` (needs Chrome started with
`--remote-debugging-port=9222`). Otherwise it uses a managed headless browser.
""".replace("browser-use ", cli_cmd + " ") if cli_cmd and cli_cmd != "browser-use" else """---
name: browser-use
description: Drive a real web browser — open pages, click, type, read, fill forms, screenshot, extract data from JavaScript-heavy or logged-in sites. Use when a task needs interacting with a live page, not just a web search.
allowed-tools: Bash(browser-use:*)
---

# browser-use — control a real browser

Use this when the task needs a **live, rendered web page** (logged-in dashboards,
multi-step forms, JS-heavy sites, "show me this page"), not a plain search.
For simple lookups use `web_search` instead — it's faster.

```
browser-use open <url>       # launch + navigate
browser-use state            # list clickable elements (indices) + page text
browser-use click <index>    # click an element by index
browser-use input <i> "txt"  # type into field <i>
browser-use screenshot       # capture the page
browser-use close            # end the session
```

`browser-use connect` attaches to the user's own Chrome (keeps logins) when
started with `--remote-debugging-port=9222`; otherwise a managed browser is used.
"""


def _pypi_latest(pkg):
    try:
        d = json.loads(_urlopen(urllib.request.Request(
            "https://pypi.org/pypi/%s/json" % pkg,
            headers={"User-Agent": "AgentBay"}), 12).read())
        return d.get("info", {}).get("version", "")
    except Exception:
        return ""


def browser_use_status():
    p = _bu_paths()
    installed = p["cli"].exists()
    cur = ""
    if installed:
        try:
            r = subprocess.run([str(p["python"]), "-c",
                                "import importlib.metadata as m; print(m.version('browser-use'))"],
                               capture_output=True, text=True, timeout=15)
            cur = (r.stdout or "").strip()
        except Exception:
            cur = ""
    latest = _pypi_latest("browser-use")
    return {"installed": installed, "current": cur, "latest": latest,
            "update_available": bool(installed and latest and cur and cur != latest),
            "skill_dirs": [str(d) for d in _agent_skills_dirs()]}


def install_browser_use(job_id, update=False):
    """Set up (or update) browser-use in an isolated venv, install its browser,
    write its config, and drop the skill into the agent's skills dir. Cross-OS.
    The Windows Playwright download is run with PYTHONUTF8 to avoid the cp1252
    'charmap' crash."""
    def log(line):
        with _job_lock:
            _install_jobs[job_id]["log"].append(line)

    def done(ok):
        with _job_lock:
            _install_jobs[job_id]["status"] = "done" if ok else "error"

    env = dict(os.environ)
    env["PYTHONUTF8"] = "1"
    env["PYTHONIOENCODING"] = "utf-8"
    p = _bu_paths()
    try:
        if not p["python"].exists():
            log("Creating isolated environment…")
            r = subprocess.run([sys.executable, "-m", "venv", str(_BU_VENV)],
                               capture_output=True, text=True, timeout=180, env=env)
            if r.returncode != 0:
                log((r.stderr or "venv failed")[:600]); return done(False)
        log(("Updating" if update else "Installing") + " browser-use…")
        r = subprocess.run([str(p["pip"]), "install", "-U", "browser-use"],
                           capture_output=True, text=True, timeout=900, env=env,
                           errors="replace")
        log(((r.stdout or "") + (r.stderr or "")).strip()[-1200:])
        if r.returncode != 0:
            return done(False)
        # Install the Chromium engine via browser-use's own installer (UTF-8 forced
        # → no Windows cp1252 'charmap' crash). Don't hard-fail: connect-to-own-Chrome
        # still works even if the managed browser download has trouble.
        log("Installing the browser engine (Chromium) — this can take a few minutes…")
        try:
            r = subprocess.run([str(p["cli"]), "install"],
                               capture_output=True, text=True, timeout=1800, env=env,
                               errors="replace")
            log(((r.stdout or "") + (r.stderr or "")).strip()[-800:])
        except Exception as e:
            log("browser engine note: " + str(e))
        # browser-use config
        try:
            cfgdir = Path.home() / ".browser-use"
            cfgdir.mkdir(parents=True, exist_ok=True)
            conf = {"browser": {"headless": True, "chromium_sandbox": False}}
            (cfgdir / "config.json").write_text(json.dumps(conf, indent=2))
        except Exception as e:
            log("config note: " + str(e))
        # a `browser-use` wrapper on PATH so the skill's allowed-tools match
        try:
            BIN_DIR.mkdir(parents=True, exist_ok=True)
            if os.name == "nt":
                p["wrapper"].write_text('@echo off\r\n"%s" %%*\r\n' % str(p["cli"]))
            else:
                p["wrapper"].write_text('#!/bin/sh\nexec "%s" "$@"\n' % str(p["cli"]))
                os.chmod(p["wrapper"], 0o755)
                # also link into ~/.local/bin (usually on PATH)
                lb = Path.home() / ".local" / "bin"
                lb.mkdir(parents=True, exist_ok=True)
                wl = lb / "browser-use"
                try:
                    if wl.exists() or wl.is_symlink():
                        wl.unlink()
                    wl.symlink_to(p["wrapper"])
                except Exception:
                    shutil.copy2(p["wrapper"], wl); os.chmod(wl, 0o755)
        except Exception as e:
            log("wrapper note: " + str(e))
        # install the skill into the agent's skills dir(s)
        skill_cmd = "browser-use"
        wrote = []
        for sd in _agent_skills_dirs():
            try:
                tgt = sd / "automation" / "browser-use"
                tgt.mkdir(parents=True, exist_ok=True)
                (tgt / "SKILL.md").write_text(_bu_skill_md(skill_cmd))
                wrote.append(str(tgt))
            except Exception:
                pass
        if wrote:
            log("Skill installed for the agent: " + ", ".join(wrote))
        else:
            log("Note: no agent skills dir found yet — install Hermes, then re-run.")
        log("Done. The agent can now browse the web with browser-use.")
        return done(True)
    except Exception as e:
        log("ERROR: " + str(e))
        return done(False)


def _cloudflared_target():
    return str(BIN_DIR / ("cloudflared.exe" if platform.system() == "Windows" else "cloudflared"))


def _cloudflared_bin():
    # PATH first, then common package locations, then our self-installed copy
    return shutil.which("cloudflared") or next(
        (p for p in ["/opt/homebrew/bin/cloudflared", "/usr/local/bin/cloudflared",
                     os.path.expanduser("~/.local/bin/cloudflared"), _cloudflared_target()]
         if os.path.exists(p)), None)


def _cloudflared_asset_url():
    sysn = platform.system().lower()
    m = platform.machine().lower()
    arch = ("arm64" if m in ("arm64", "aarch64")
            else "386" if m in ("i386", "i686", "x86") else "amd64")
    base = "https://github.com/cloudflare/cloudflared/releases/latest/download/"
    if sysn == "darwin":
        return base + f"cloudflared-darwin-{arch}.tgz", True
    if sysn == "windows":
        return base + f"cloudflared-windows-{arch}.exe", False
    return base + f"cloudflared-linux-{arch}", False   # linux raw binary


def install_cloudflared(log):
    """Download the official cloudflared binary for this OS/arch into ~/.agentbay/bin.
    No package manager required — works the same on macOS, Windows, Linux."""
    if _cloudflared_bin():
        log("cloudflared already present.")
        return True
    BIN_DIR.mkdir(parents=True, exist_ok=True)
    url, is_tgz = _cloudflared_asset_url()
    target = _cloudflared_target()
    log(f"Downloading {url}")
    try:
        data = _urlopen(urllib.request.Request(url, headers={"User-Agent": "AgentBay"}), timeout=120).read()
    except Exception as e:
        log(f"ERROR downloading: {e}")
        return False
    try:
        if is_tgz:
            with tarfile.open(fileobj=io.BytesIO(data)) as tf:
                mem = next((x for x in tf.getmembers() if x.name.rstrip("/").endswith("cloudflared")), None)
                if not mem:
                    log("ERROR: cloudflared not found inside archive.")
                    return False
                with open(target, "wb") as f:
                    f.write(tf.extractfile(mem).read())
        else:
            with open(target, "wb") as f:
                f.write(data)
        if platform.system() != "Windows":
            os.chmod(target, 0o755)
    except Exception as e:
        log(f"ERROR writing binary: {e}")
        return False
    ok = os.path.exists(target)
    log(f"Installed → {target}" if ok else "ERROR: install failed.")
    return ok


def _tailscale_bin():
    return shutil.which("tailscale") or next(
        (p for p in ["/usr/local/bin/tailscale", "/opt/homebrew/bin/tailscale",
                     "/Applications/Tailscale.app/Contents/MacOS/Tailscale"] if os.path.exists(p)), None)


def share_status():
    with _share_lock:
        link = (SHARE["url"] + "/?k=" + SHARE["token"]) if (SHARE["active"] and SHARE["url"]) else None
        return {"active": SHARE["active"], "url": SHARE["url"], "link": link,
                "provider": SHARE["provider"], "cloudflared": bool(_cloudflared_bin()),
                "tailscale": bool(_tailscale_bin())}


def start_share(host, port, provider="cloudflared"):
    global _share_proc
    with _share_lock:
        if SHARE["active"]:
            return share_status()
        token = secrets.token_urlsafe(24)
        h = host if host not in ("0.0.0.0", "") else "127.0.0.1"
        origin = f"http://{h}:{port}"

        if provider == "tailscale":
            tb = _tailscale_bin()
            if not tb:
                return {"error": "Tailscale not found on this machine."}
            try:
                r = subprocess.run([tb, "funnel", "--bg", "--https=443", f"{h}:{port}"],
                                   capture_output=True, text=True, timeout=25)
                if r.returncode != 0:
                    return {"error": "Tailscale Funnel could not start. Enable Funnel for this node in the "
                                     "Tailscale admin (HTTPS + the 'funnel' node attribute), then retry. "
                                     + (r.stderr or r.stdout or "").strip()[:200]}
                st = subprocess.run([tb, "funnel", "status", "--json"], capture_output=True, text=True, timeout=10).stdout
                m = re.search(r"https://[a-z0-9.-]+\.ts\.net", st) or re.search(r"[a-z0-9-]+\.[a-z0-9-]+\.ts\.net", st)
                url = m.group(0) if m else None
                if url and not url.startswith("http"):
                    url = "https://" + url
                if not url:
                    return {"error": "Funnel started but no URL reported; check `tailscale funnel status`."}
                SHARE.update(active=True, token=token, url=url, provider="tailscale")
                return share_status()
            except Exception as e:
                return {"error": f"Tailscale Funnel failed: {e}"}

        # default: Cloudflare quick tunnel (no account, ephemeral https URL)
        cf = _cloudflared_bin()
        if not cf:
            return {"error": "cloudflared is not installed.", "needs_install": True}
        try:
            proc = subprocess.Popen([cf, "tunnel", "--no-autoupdate", "--url", origin],
                                    stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, bufsize=1)
        except Exception as e:
            return {"error": f"Failed to launch cloudflared: {e}"}
        url = None
        t0 = time.time()
        while time.time() - t0 < 30:
            line = proc.stdout.readline()
            if not line:
                if proc.poll() is not None:
                    break
                continue
            m = re.search(r"https://[a-z0-9-]+\.trycloudflare\.com", line)
            if m:
                url = m.group(0)
                break
        if not url:
            try:
                proc.terminate()
            except Exception:
                pass
            return {"error": "Tunnel did not return a URL (cloudflared may be blocked on this network)."}
        # keep draining stdout so the pipe never fills and stalls cloudflared
        threading.Thread(target=lambda: [None for _ in iter(proc.stdout.readline, "")], daemon=True).start()
        _share_proc = proc
        SHARE.update(active=True, token=token, url=url, provider="cloudflared")
        return share_status()


def stop_share():
    global _share_proc
    with _share_lock:
        prov = SHARE["provider"]
        if prov == "cloudflared" and _share_proc:
            try:
                _share_proc.terminate()
                try:
                    _share_proc.wait(timeout=3)
                except Exception:
                    _share_proc.kill()
            except Exception:
                pass
            _share_proc = None
        elif prov == "tailscale":
            tb = _tailscale_bin()
            if tb:
                try:
                    subprocess.run([tb, "funnel", "--https=443", "off"], capture_output=True, timeout=15)
                except Exception:
                    pass
        SHARE.update(active=False, token=None, url=None, provider=None)
        return {"active": False}


def run_share_install(job_id):
    def log(line):
        with _job_lock:
            _install_jobs[job_id]["log"].append(line)
    try:
        ok = install_cloudflared(log)
        with _job_lock:
            _install_jobs[job_id]["status"] = "done" if ok else "error"
    except Exception as e:
        with _job_lock:
            _install_jobs[job_id]["status"] = "error"
        log(f"ERROR: {e}")


# ---- app self-update (pull from the public repo) --------------------------
APP_REPO = os.environ.get("AGENTBAY_REPO", "NullNaveen/agentbay")


def _git(*args, timeout=60):
    return subprocess.run(["git", "-C", str(ROOT), *args], capture_output=True, text=True, timeout=timeout)


# Records the installed commit for installs that aren't git checkouts (zip/tarball,
# the default on Windows). The installer writes it; we also self-heal on startup.
_BUILD_FILE = ROOT / ".agentbay-build"


def _app_local_sha():
    if (ROOT / ".git").exists():
        try:
            r = _git("rev-parse", "HEAD")
            if r.stdout.strip():
                return r.stdout.strip()
        except Exception:
            pass
    try:
        if _BUILD_FILE.is_file():
            return (_BUILD_FILE.read_text().strip() or None)
    except Exception:
        pass
    return None


def _write_build_sha(sha):
    try:
        if sha:
            _BUILD_FILE.write_text(sha.strip() + "\n")
            return True
    except Exception:
        pass
    return False


def _github_latest_sha(timeout=15):
    req = urllib.request.Request("https://api.github.com/repos/%s/commits/main" % APP_REPO,
                                 headers={"User-Agent": "AgentBay", "Accept": "application/vnd.github.sha"})
    return _urlopen(req, timeout).read().decode().strip()


def baseline_build_marker():
    """For non-git installs with no build marker (legacy zip installs, hand copies),
    record the current upstream sha once so update tracking works going forward."""
    if (ROOT / ".git").exists() or _BUILD_FILE.is_file():
        return
    try:
        _write_build_sha(_github_latest_sha())
    except Exception:
        pass


def app_version():
    sha = _app_local_sha()
    if sha:
        n = ""
        if (ROOT / ".git").exists():
            try:
                n = _git("rev-list", "--count", "HEAD").stdout.strip()
            except Exception:
                n = ""
        return (("r" + n + " · ") if n else "") + sha[:7]
    return "source"


def app_update_status():
    local = _app_local_sha()
    out = {"current": app_version(), "is_git": (ROOT / ".git").exists(),
           "tracked": bool(local), "update_available": False}
    try:
        latest = _github_latest_sha()
        out["latest"] = latest[:7]
        if local and latest:
            out["update_available"] = (local != latest)
    except Exception as e:
        out["error"] = str(e)
    return out


def _zip_update(log):
    """Update a non-git install by re-downloading the repo zip over ROOT.
    Returns the new sha on success, raises on failure."""
    import zipfile
    url = "https://github.com/%s/archive/refs/heads/main.zip" % APP_REPO
    log("$ download " + url)
    data = _urlopen(urllib.request.Request(url, headers={"User-Agent": "AgentBay"}), 180).read()
    tmp = Path(tempfile.mkdtemp(prefix="agentbay-upd-"))
    try:
        with zipfile.ZipFile(io.BytesIO(data)) as z:
            z.extractall(tmp)
        inner = next((p for p in tmp.iterdir() if p.is_dir()), None)
        if not inner:
            raise RuntimeError("unexpected zip layout")
        log("$ apply files")
        for item in inner.iterdir():
            if item.name in (".git", ".agentbay-build"):
                continue
            dst = ROOT / item.name
            if item.is_dir():
                shutil.copytree(item, dst, dirs_exist_ok=True)
            else:
                shutil.copy2(item, dst)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)
    try:
        sha = _github_latest_sha()
        _write_build_sha(sha)
        return sha
    except Exception:
        return None


def _is_ec2_shared():
    """The EC2 multi-user layout: a shared root-owned /opt/agentbay checkout run by
    per-user systemd services. We can't pull/restart it as our own user, so we go
    through the sudoers-backed self-update script. Trigger when that script exists
    and either the profile env is set or ROOT isn't writable by us."""
    if not (ROOT / "tools" / "ec2-self-update.sh").exists():
        return False
    if os.environ.get("AGENTBAY_PROFILE"):
        return True
    try:
        return not os.access(str(ROOT), os.W_OK)
    except Exception:
        return False


def run_app_update(job_id):
    def log(line):
        with _job_lock:
            _install_jobs[job_id]["log"].append(line)
    try:
        if _is_ec2_shared():
            # Shared checkout we can't write to as our user — pull + restart all the
            # agentbay@ services through a passwordless sudoers rule. This restarts
            # our own service too, so we don't os.execv afterwards.
            log("Updating all AgentBay instances on this server…")
            script = str(ROOT / "tools" / "ec2-self-update.sh")
            r = subprocess.run(["sudo", "-n", script],
                               capture_output=True, text=True, timeout=180)
            log(((r.stdout or "") + (r.stderr or "")).strip()[:2000])
            with _job_lock:
                _install_jobs[job_id]["status"] = "done" if r.returncode == 0 else "error"
            if r.returncode == 0:
                log("Updated. Your service is restarting…")
            return
        if (ROOT / ".git").exists():
            log("$ git pull --ff-only")
            r = _git("pull", "--ff-only")
            log(((r.stdout or "") + (r.stderr or "")).strip()[:2000])
            ok = r.returncode == 0
        else:
            log("Updating (zip install)…")
            _zip_update(log)
            ok = True
        with _job_lock:
            _install_jobs[job_id]["status"] = "done" if ok else "error"
        if ok:
            log("Updated. Restarting…")
            # re-exec with the new code; PID is preserved so systemd/supervisors are happy
            threading.Timer(1.2, lambda: os.execv(sys.executable, [sys.executable] + sys.argv)).start()
    except Exception as e:
        with _job_lock:
            _install_jobs[job_id]["status"] = "error"
        log("ERROR: " + str(e))


# ---- chat proxy -----------------------------------------------------------
SYSTEM_PROMPT = ("You are a helpful AI assistant. Your default response language is English. "
                 "Respond in English for all English input — including short greetings like "
                 "'Hello', 'Hi', or 'Yo'. Only switch languages if the user's message is itself "
                 "written in a non-English language, in which case mirror that language. "
                 "Never reply in Chinese to an English message. Be concise and friendly.")


def _cjk_ratio(text):
    if not text:
        return 0.0
    cjk = sum(1 for ch in text if "一" <= ch <= "鿿")
    letters = sum(1 for ch in text if ch.isalpha())
    return cjk / max(1, letters)


def _is_latin(text):
    return sum(1 for ch in text if "a" <= ch.lower() <= "z") > sum(1 for ch in text if "一" <= ch <= "鿿")


def _provider_call(spec, base, key, mdl, messages, max_tokens=1024, timeout=120):
    if spec["api"] == "anthropic":
        sys_txt = "\n".join(m["content"] for m in messages if m.get("role") == "system")
        conv = [{"role": m["role"], "content": m["content"]}
                for m in messages if m.get("role") in ("user", "assistant")]
        payload = {"model": mdl, "max_tokens": max_tokens, "messages": conv}
        if sys_txt:
            payload["system"] = sys_txt
        req = urllib.request.Request(base + "/messages", data=json.dumps(payload).encode(),
            headers={"Content-Type": "application/json", "x-api-key": key,
                     "anthropic-version": "2023-06-01"})
        with _urlopen(req, timeout) as r:
            d = json.loads(r.read())
        return ("".join(b.get("text", "") for b in d.get("content", []) if b.get("type") == "text"),
                d.get("usage", {}))
    headers = {"Content-Type": "application/json"}
    if key:
        headers["Authorization"] = f"Bearer {key}"
    req = urllib.request.Request(base + "/chat/completions",
        data=json.dumps({"model": mdl, "messages": messages, "stream": False,
                         "max_tokens": max_tokens}).encode(), headers=headers)
    with _urlopen(req, timeout) as r:
        d = json.loads(r.read())
    return (d.get("choices", [{}])[0].get("message", {}).get("content", ""), d.get("usage", {}))


# Provider names the Hermes gateway understands as-is (for {model, provider} routing)
_GATEWAY_PROVIDER_NAMES = {"deepseek", "openai", "anthropic", "gemini", "groq",
                           "openrouter", "mistral", "nous"}


# A locally-installed Hermes serves an OpenAI-compatible agent API (model id
# "hermes-agent") on 127.0.0.1:8642 by default. We probe it (cached) so a
# standalone install "just works" as an agent without the user wiring anything.
_LOCAL_GW = {"url": None, "key": "", "ts": 0.0}


def _local_gateway_base():
    """Env-overridable base of the local Hermes gateway's OpenAI API (…/v1)."""
    b = (os.environ.get("HERMES_GATEWAY_BASE_URL") or "http://127.0.0.1:8642").rstrip("/")
    return b if b.endswith("/v1") else b + "/v1"


def _gateway_up(port, timeout=1.0):
    """Is a Hermes agent API serving on this localhost port?"""
    try:
        req = urllib.request.Request("http://127.0.0.1:%s/v1/models" % port)
        d = json.loads(_urlopen(req, timeout).read())
        ids = [m.get("id", "") for m in d.get("data", []) if isinstance(m, dict)]
        return any(("hermes" in i.lower() or "agent" in i.lower()) for i in ids)
    except Exception:
        return False


def _read_profile_cfg(cf):
    try:
        text = cf.read_text()
    except Exception:
        return {"model": "", "provider": "", "port": 8642}
    # Prefer PyYAML; fall back to a small regex reader (the server's Python may not
    # have PyYAML, and the keys we need are simple top-level scalars).
    try:
        import yaml
        d = yaml.safe_load(text) or {}
        m = d.get("model") if isinstance(d.get("model"), dict) else {}
        api = d.get("api_server")
        if not isinstance(api, dict):
            api = (d.get("platforms") or {}).get("api_server") if isinstance(d.get("platforms"), dict) else {}
        port = (api or {}).get("port") if isinstance(api, dict) else None
        return {"model": m.get("default") or "", "provider": m.get("provider") or "", "port": port or 8642}
    except Exception:
        pass
    def _grab(block, key, indented=False):
        anchor = r"^[ \t]+%s:" if indented else r"^%s:"
        m = re.search(r"(?m)" + (anchor % re.escape(block)) + r"\s*\n((?:[ \t]+.*\n?)+)", text)
        if not m:
            return ""
        mm = re.search(r"(?m)^[ \t]+%s:\s*(.+)$" % re.escape(key), m.group(1))
        return (mm.group(1).strip().strip('"').strip("'") if mm else "")
    port = _grab("api_server", "port") or _grab("api_server", "port", indented=True)
    try:
        port = int(port)
    except Exception:
        port = 8642
    return {"model": _grab("model", "default"), "provider": _grab("model", "provider"), "port": port}


def list_hermes_profiles():
    """Enumerate Hermes profiles (each is a separate agent with its own config +
    gateway): the default at ~/.hermes/config.yaml and named ones under
    ~/.hermes/profiles/<name>/. Reports each one's model + gateway port + whether
    it's running, so AgentBay can let the user pick which agent to chat with."""
    base = Path(os.environ.get("HERMES_HOME") or (Path.home() / ".hermes"))
    out, seen = [], set()

    def add(name, cf):
        if name in seen or not cf.is_file():
            return
        seen.add(name)
        info = _read_profile_cfg(cf)
        out.append({
            "name": name, "model": info["model"], "provider": info["provider"],
            "port": info["port"], "base_url": "http://127.0.0.1:%s/v1" % info["port"],
            "running": _gateway_up(info["port"]),
        })

    add("default", base / "config.yaml")
    pdir = base / "profiles"
    if pdir.is_dir():
        try:
            for d in sorted(pdir.iterdir()):
                if d.is_dir():
                    add(d.name, d / "config.yaml")
        except Exception:
            pass
    return out


def detect_local_gateway(timeout=1.2, ttl=20):
    """Probe the local Hermes gateway; cache the result briefly. Returns
    {base_url, key} if a Hermes agent API is reachable, else None."""
    now = time.time()
    if now - _LOCAL_GW["ts"] < ttl:
        return ({"base_url": _LOCAL_GW["url"], "key": _LOCAL_GW["key"]} if _LOCAL_GW["url"] else None)
    base = _local_gateway_base()
    key = os.environ.get("API_SERVER_KEY", "") or os.environ.get("HERMES_WEBUI_GATEWAY_API_KEY", "")
    found = None
    try:
        headers = {"Authorization": f"Bearer {key}"} if key else {}
        req = urllib.request.Request(base + "/models", headers=headers)
        d = json.loads(_urlopen(req, timeout).read())
        ids = [m.get("id", "") for m in d.get("data", []) if isinstance(m, dict)]
        if any(("hermes" in i.lower() or "agent" in i.lower()) for i in ids):
            found = base
    except Exception:
        found = None
    _LOCAL_GW.update({"url": found, "key": key if found else "", "ts": now})
    return ({"base_url": found, "key": key} if found else None)


def _agent_gateway(cfg):
    """The agent gateway to route chat through, if present. Two ways it's found:
      1. A `local` provider configured with a base_url (+ optional key) — the
         multi-user EC2 setup points this at the per-user gateway.
      2. Auto-detected: a Hermes gateway running locally on 127.0.0.1:8642.
    Routing through it makes EVERY model run inside the agent (tools/terminal/skills)
    instead of as a raw LLM. Set agent_mode:false in config to force direct calls."""
    if cfg.get("agent_mode") is False:
        return None
    # An explicitly chosen Hermes profile (multi-agent) wins — route to its port.
    prof = cfg.get("agent_profile")
    if prof:
        for p in list_hermes_profiles():
            if p["name"] == prof:
                return {"base_url": p["base_url"], "key": ""}
    loc = cfg.get("providers", {}).get("local", {})
    base = (loc.get("base_url") or "").rstrip("/")
    key = loc.get("key") or ""
    if base and (key or cfg.get("agent_mode") is True):
        return {"base_url": base, "key": key}
    # Fallback: a locally-installed Hermes serving its agent API. This is what
    # makes a fresh standalone install behave as the agent, not a plain chatbot.
    return detect_local_gateway()


_GW_START = {"tried": False}


def _hermes_env_file(hb):
    """Locate the Hermes .env (where the gateway reads API_SERVER_ENABLED etc.).
    Ask the binary; fall back to the standard locations."""
    try:
        r = subprocess.run([hb, "config", "env-path"], capture_output=True, text=True, timeout=15)
        p = (r.stdout or "").strip().splitlines()[-1].strip() if r.stdout else ""
        if p:
            return Path(p)
    except Exception:
        pass
    he = os.environ.get("HERMES_HOME")
    return (Path(he) / ".env") if he else (Path.home() / ".hermes" / ".env")


def _enable_hermes_api_server(hb):
    """Turn ON the gateway's OpenAI endpoint (it's opt-in). Without this a fresh
    Hermes serves no /v1, so AgentBay can't route chat through the agent."""
    try:
        envf = _hermes_env_file(hb)
        envf.parent.mkdir(parents=True, exist_ok=True)
        text = envf.read_text() if envf.is_file() else ""
        if "API_SERVER_ENABLED" not in text:
            with open(envf, "a", encoding="utf-8") as f:
                if text and not text.endswith("\n"):
                    f.write("\n")
                f.write("API_SERVER_ENABLED=true\nAPI_SERVER_PORT=8642\n")
    except Exception:
        pass


def ensure_local_gateway():
    """Make a locally-installed Hermes serve its agent API so AgentBay behaves as
    the agent (tools/terminal), not a cloud chatbot. Enables the opt-in OpenAI
    endpoint, then starts the gateway. `gateway start` needs systemd/launchd (so it
    fails on Windows) — there we run it directly in a hidden background process."""
    if _GW_START["tried"] or os.environ.get("AGENTBAY_PROFILE"):
        return                                      # EC2: gateway is systemd-managed, leave it
    _GW_START["tried"] = True
    try:
        if detect_local_gateway(ttl=0):
            return                                  # already reachable
        hb = which("hermes")
        if not hb:
            return
        _enable_hermes_api_server(hb)
        if os.name == "nt":
            # Windows has no service manager — run the gateway in the background
            # (console hidden by the global Popen patch). --replace avoids dup.
            subprocess.Popen([hb, "gateway", "run", "--replace"],
                             stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        else:
            r = subprocess.run([hb, "gateway", "start"], capture_output=True, text=True, timeout=30)
            if r.returncode != 0:
                subprocess.Popen([hb, "gateway", "run", "--replace"],
                                 stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    except Exception:
        pass


# ==================== local agent via ACP (the robust, cross-platform path) ====
# A locally-installed Hermes speaks ACP (Agent Client Protocol) over stdio: spawn
# `hermes acp`, JSON-RPC, stream reply + reasoning + tool calls. No gateway, no
# port, no service — works the same on Windows/macOS/Linux. This is how AgentBay
# runs the real on-device agent (vs the fragile gateway-API approach).
_ACP_SESS_FILE = CONFIG_DIR / "acp_sessions.json"
_acp_lock = threading.Lock()


def _acp_load_map():
    try:
        return json.loads(_ACP_SESS_FILE.read_text())
    except Exception:
        return {}


def _acp_save_map(m):
    try:
        CONFIG_DIR.mkdir(parents=True, exist_ok=True)
        _ACP_SESS_FILE.write_text(json.dumps(m))
    except Exception:
        pass


def _is_multiuser_ec2():
    """The shared EC2 deployment — precise signals only, so we don't mistake a
    standalone desktop (which may set HERMES_HOME) for the server."""
    if os.environ.get("AGENTBAY_PROFILE"):
        return True
    try:
        if Path.home().name == "agentbay-home":     # /srv/hermes-multi/<user>/agentbay-home
            return True
        if str(ROOT) == "/opt/agentbay":
            return True
    except Exception:
        pass
    return False


def _acp_available():
    """Use ACP for a locally-installed Hermes (standalone desktop). The multi-user
    EC2 layout keeps the gateway. NOTE: HERMES_HOME alone does NOT mean EC2 —
    standalone Windows/macOS installs set it too."""
    if _is_multiuser_ec2():
        return False
    return bool(which("hermes"))


def _agent_kind(cfg=None):
    """Which local agent backs chat: 'hermes' (driven via ACP) or 'openclaw' (driven
    via the openclaw CLI). None on multi-user EC2 (gateway) or when neither is
    installed. Honors cfg['agent'] if the user picked one; else auto (Hermes first)."""
    if _is_multiuser_ec2():
        return None
    pref = ((cfg or {}).get("agent") or "").lower() if cfg is not None else ""
    has_h, has_o = bool(which("hermes")), bool(which("openclaw"))
    if pref == "openclaw" and has_o:
        return "openclaw"
    if pref == "hermes" and has_h:
        return "hermes"
    if has_h:
        return "hermes"
    if has_o:
        return "openclaw"
    return None


def _openclaw_provider_models():
    """The user's OpenClaw providers+models via `openclaw models list --json`.
    Keys are `provider/model` (model may contain more slashes)."""
    oc = which("openclaw")
    if not oc:
        return []
    try:
        r = subprocess.run([oc, "models", "list", "--json"], capture_output=True,
                           text=True, timeout=30, errors="replace", env=_agent_env())
        d = json.loads(r.stdout or "{}")
    except Exception:
        return []
    groups, order = {}, []
    for m in (d.get("models") or []):
        key = (m.get("key") or "")
        if "/" not in key:
            continue
        prov, model = key.split("/", 1)
        if prov not in groups:
            groups[prov] = []; order.append(prov)
        if model not in groups[prov]:
            groups[prov].append(model)
    return [{"id": p, "label": p[:1].upper() + p[1:], "models": groups[p]} for p in order]


def _hermes_python():
    """The Python inside Hermes's venv (so we can import hermes_cli). The `hermes`
    binary lives in venv/bin (Unix) or venv/Scripts (Windows); python is a sibling."""
    hb = which("hermes")
    if not hb:
        return None
    try:
        real = os.path.realpath(hb)
    except Exception:
        real = hb
    bindir = os.path.dirname(real)
    for name in ("python", "python3", "python.exe", "pythonw.exe"):
        cand = os.path.join(bindir, name)
        if os.path.exists(cand):
            return cand
    return None


# Cache the user's real Hermes providers+models (Nous Portal, Bedrock, Copilot,
# Ollama/custom, …). provider_model_ids() can hit the network (live /v1/models),
# so we cache aggressively and refresh in the background — never block a request.
_PROV_CACHE = {"t": 0.0, "data": []}
_PROV_LOCK = threading.Lock()
_PROV_REFRESHING = [False]
_PROV_SCRIPT = (
    "import json\n"
    "from hermes_cli.models import list_available_providers, provider_model_ids\n"
    "out=[]; seen=set()\n"
    "for p in list_available_providers():\n"
    "    pid=p.get('id')\n"
    "    if not p.get('authenticated') or pid in seen: continue\n"
    "    seen.add(pid)\n"
    "    try: ms=provider_model_ids(pid) or []\n"
    "    except Exception: ms=[]\n"
    "    out.append({'id':pid,'label':p.get('label') or pid,'models':ms})\n"
    "print(json.dumps(out))\n"
)


def _agent_model_id(pid, model):
    """Canonical ACP modelId `provider:model`. Strip the implicit `:latest` tag on
    Ollama/custom models — Hermes mis-parses `custom:foo:latest` as model 'latest'."""
    m = model
    if pid in ("custom", "ollama", "lmstudio") and m.endswith(":latest"):
        m = m[: -len(":latest")]
    return pid + ":" + m


def _refresh_provider_models():
    py = _hermes_python()
    if not py:
        return
    try:
        env = dict(os.environ); env["PYTHONUTF8"] = "1"; env["PYTHONIOENCODING"] = "utf-8"
        r = subprocess.run([py, "-c", _PROV_SCRIPT], capture_output=True, text=True,
                           timeout=30, env=env, errors="replace")
        data = json.loads((r.stdout or "").strip() or "[]")
        if isinstance(data, list):
            with _PROV_LOCK:
                _PROV_CACHE["data"] = data
                _PROV_CACHE["t"] = time.time()
    except Exception:
        pass
    finally:
        _PROV_REFRESHING[0] = False


def _hermes_provider_models(ttl=300):
    """Cached list of {id,label,models[]} for the user's authenticated Hermes
    providers. Returns stale/empty immediately and refreshes in the background."""
    if not _acp_available():
        return []
    now = time.time()
    with _PROV_LOCK:
        fresh = (now - _PROV_CACHE["t"]) < ttl and _PROV_CACHE["data"]
        data = list(_PROV_CACHE["data"])
    if not fresh and not _PROV_REFRESHING[0]:
        _PROV_REFRESHING[0] = True
        threading.Thread(target=_refresh_provider_models, daemon=True).start()
    return data


def _import_agent_providers():
    """Mirror the user's agent providers — Hermes (Nous Portal OAuth, custom
    endpoints, DeepSeek, …) or OpenClaw (ollama, openrouter, …) — into AgentBay so
    they NEVER reconfigure what the agent already has. Agent-owned providers are
    marked `from_agent` and route through the agent with no key (the agent holds the
    creds). Preserves any key the user set here natively. Returns (updates, ids)."""
    kind = _agent_kind(load_config())
    if kind == "openclaw":
        provs = _openclaw_provider_models()
    elif kind == "hermes":
        with _PROV_LOCK:
            have = bool(_PROV_CACHE["data"])
        if not have:
            _refresh_provider_models()        # one-time: fetch synchronously so we have data
        provs = _hermes_provider_models()
    else:
        return ({}, [])
    cur = (load_config().get("providers") or {})
    updates, ids = {}, []
    for prov in provs:
        pid = prov.get("id")
        models = [m for m in (prov.get("models") or []) if m]
        if not pid or not models:
            continue
        ex = cur.get(pid, {}) if isinstance(cur.get(pid), dict) else {}
        if ex.get("key"):                      # user keyed this natively — keep theirs
            if not (ex.get("models") or []):   # but seed models if they enabled none
                updates[pid] = {"models": models}; ids.append(pid)
            continue
        label = (PROVIDERS.get(pid, {}) or {}).get("label") or prov.get("label") or pid
        if ex.get("from_agent") and (ex.get("models") or []) == models and ex.get("label") == label:
            continue                            # already imported & unchanged
        updates[pid] = {"from_agent": True, "label": label, "models": models}
        ids.append(pid)
    return (({"providers": updates} if updates else {}), ids)


def _latest_user(messages):
    for m in reversed(messages or []):
        if m.get("role") == "user" and m.get("content"):
            return m["content"]
    return ""


def _acp_tool_text(u):
    """The tool's OUTPUT (result content) from an ACP tool_call update."""
    parts = []
    for c in (u.get("content") or []):
        if isinstance(c, dict):
            if c.get("type") == "content" and isinstance(c.get("content"), dict):
                t = c["content"].get("text")
                if t:
                    parts.append(t)
            elif c.get("type") == "diff" and isinstance(c.get("path"), str):
                parts.append("± " + c["path"])   # an edit/diff — show the file
            elif c.get("text"):
                parts.append(c["text"])
    return _ANSI_RE.sub("", " ".join(parts))[:1200]


def _acp_tool_input(u):
    """Compact one-line summary of a tool's INPUT (rawInput) — the command/path/query."""
    ri = u.get("rawInput")
    if not isinstance(ri, dict):
        ri = u.get("input") if isinstance(u.get("input"), dict) else None
    if not isinstance(ri, dict):
        return ""
    for k in ("command", "cmd", "path", "file_path", "filePath", "query", "url", "pattern", "prompt"):
        v = ri.get(k)
        if isinstance(v, str) and v.strip():
            return _ANSI_RE.sub("", v.strip())[:300]
    try:
        return json.dumps(ri, ensure_ascii=False)[:300]
    except Exception:
        return str(ri)[:300]


def acp_stream_turn(messages, session_id=None, cwd=None, timeout=900, model_id=None, images=None, env=None):
    """Run ONE agent turn via `hermes acp` over stdio. Yields (type, data):
    token / reasoning / tool / error / done. Sessions persist (agentbay id ↔ ACP id).
    model_id (canonical `provider:model`, e.g. `deepseek:deepseek-v4-flash`) is applied
    per-session via session/set_model; `env` (e.g. the provider's saved API key) is
    handed to the agent process so it can actually call that provider."""
    hb = which("hermes")
    cwd = cwd or str(Path.home())
    if model_id in ("default", "hermes-agent", ""):
        model_id = None
    proc_env = dict(os.environ)
    if env:
        proc_env.update({k: v for k, v in env.items() if v})
    user_text = _latest_user(messages)
    if not hb or not user_text:
        yield ("error", "no local agent or empty message")
        yield ("done", {})
        return
    try:
        proc = subprocess.Popen([hb, "acp"], stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                                stderr=subprocess.PIPE, text=True, bufsize=1, env=proc_env)
    except Exception as e:
        yield ("__fail__", "could not start `hermes acp`: %s" % e)
        return
    errbuf = []
    threading.Thread(target=lambda: errbuf.append((proc.stderr.read() or "")[:500]) if proc.stderr else None, daemon=True).start()
    q = queue.Queue()

    def _reader():
        try:
            for line in proc.stdout:
                q.put(line)
        except Exception:
            pass
        q.put(None)
    threading.Thread(target=_reader, daemon=True).start()

    nid = [0]

    def send(method, params):
        nid[0] += 1
        proc.stdin.write(json.dumps({"jsonrpc": "2.0", "id": nid[0], "method": method, "params": params}) + "\n")
        proc.stdin.flush()
        return nid[0]

    def reply(i, res):
        proc.stdin.write(json.dumps({"jsonrpc": "2.0", "id": i, "result": res}) + "\n")
        proc.stdin.flush()

    prompt_blocks = [{"type": "text", "text": user_text}]
    for im in (images or []):
        try:
            data = (im.get("b64") or "")
            if data[:5] == "data:" and "," in data:
                data = data.split(",", 1)[1]   # strip the data:URL prefix → raw base64
            if data:
                prompt_blocks.append({"type": "image", "mimeType": im.get("mime") or "image/png", "data": data})
        except Exception:
            pass

    # On session/load (resume) the adapter REPLAYS the conversation's prior
    # assistant turns as agent_message_chunk updates. We must ignore those and only
    # capture the NEW turn's output — i.e. chunks that arrive after we send the
    # prompt — otherwise every reply prepends all earlier replies.
    capturing = [False]
    tool_idx = {}; tool_n = [0]   # toolCallId -> slot, so multiple tools don't collapse into one
    tool_state = {}               # toolCallId -> merged card state (updates carry only deltas)

    def _send_prompt(sid):
        capturing[0] = True
        return send("session/prompt", {"sessionId": sid, "prompt": prompt_blocks})

    def _proceed(sid):
        # Apply the picked model for this session, then prompt. set_model failures
        # are non-fatal — we still prompt (the agent uses its default brain).
        if model_id:
            st["setmodel"] = send("session/set_model", {"sessionId": sid, "modelId": model_id})
        else:
            st["prompt"] = _send_prompt(sid)

    amap = _acp_load_map()
    acp_sid = amap.get(session_id) if session_id else None
    st = {}
    st["init"] = send("initialize", {"protocolVersion": 1, "clientCapabilities": {},
                                      "clientInfo": {"name": "agentbay", "version": "1"}})
    deadline = time.time() + timeout
    try:
        while time.time() < deadline:
            try:
                line = q.get(timeout=1)
            except Exception:
                continue
            if line is None:
                break
            line = line.strip()
            if not line:
                continue
            try:
                m = json.loads(line)
            except Exception:
                continue
            mid, meth = m.get("id"), m.get("method")
            # server → client requests
            if meth == "session/request_permission":
                reply(mid, {"outcome": {"outcome": "selected", "optionId": "allow_always"}})
                continue
            if meth in ("fs/read_text_file", "fs/write_text_file") or (meth or "").startswith("terminal/"):
                reply(mid, {})            # we advertised no caps; just ack anything stray
                continue
            if meth == "session/update":
                if not capturing[0]:
                    continue            # ignore resume-replay of prior turns (pre-prompt)
                u = m.get("params", {}).get("update", {}) or {}
                t = u.get("sessionUpdate")
                if t == "agent_message_chunk":
                    tx = _ANSI_RE.sub("", (u.get("content") or {}).get("text", ""))
                    if tx:
                        yield ("token", tx)
                elif t == "agent_thought_chunk":
                    tx = _ANSI_RE.sub("", (u.get("content") or {}).get("text", ""))
                    if tx:
                        yield ("reasoning", tx)
                elif t in ("tool_call", "tool_call_update"):
                    # tool_call starts a card; tool_call_update sends deltas (status,
                    # output) for the SAME toolCallId. Merge server-side and emit the
                    # full current state each time so the UI shows one live card.
                    tid = u.get("toolCallId") or u.get("id") or ("t%d" % tool_n[0])
                    if tid not in tool_idx:
                        tool_idx[tid] = tool_n[0]; tool_n[0] += 1
                        tool_state[tid] = {"name": "tool", "kind": "", "status": "pending",
                                           "input": "", "output": "", "index": tool_idx[tid]}
                    stt = tool_state[tid]
                    if u.get("title"):
                        stt["name"] = _ANSI_RE.sub("", str(u["title"]))[:160]
                    if u.get("kind"):
                        stt["kind"] = u["kind"]
                        if stt["name"] == "tool":
                            stt["name"] = u["kind"]
                    if u.get("status"):
                        stt["status"] = u["status"]
                    inp = _acp_tool_input(u)
                    if inp:
                        stt["input"] = inp
                    out = _acp_tool_text(u)
                    if out:
                        stt["output"] = out
                    # keep "args" for back-compat with older clients (input ?: output)
                    stt["args"] = stt["input"] or stt["output"]
                    yield ("tool", dict(stt))
                elif t == "plan":
                    # the agent's live task plan (todo list) — full state each time
                    yield ("plan", [{"content": _ANSI_RE.sub("", str(e.get("content") or "")), "status": e.get("status") or "pending"}
                                    for e in (u.get("entries") or []) if isinstance(e, dict)])
                continue
            if "result" in m or "error" in m:
                if mid == st.get("init"):
                    if "error" in m:
                        yield ("__fail__", "initialize failed: " + str(m.get("error"))[:200]); return
                    if acp_sid:
                        st["load"] = send("session/load", {"cwd": cwd, "sessionId": acp_sid, "mcpServers": []})
                    else:
                        st["new"] = send("session/new", {"cwd": cwd, "mcpServers": []})
                elif mid == st.get("load"):
                    if "error" in m:
                        st["new"] = send("session/new", {"cwd": cwd, "mcpServers": []})
                    else:
                        _proceed(acp_sid)
                elif mid == st.get("new"):
                    if "error" in m:
                        yield ("__fail__", "session/new error: " + str(m.get("error"))[:200]); return
                    acp_sid = (m.get("result") or {}).get("sessionId")
                    if acp_sid:
                        if session_id:
                            with _acp_lock:
                                a = _acp_load_map(); a[session_id] = acp_sid; _acp_save_map(a)
                        _proceed(acp_sid)
                    else:
                        yield ("__fail__", "session/new returned no sessionId" + ((" — " + (errbuf[0] if errbuf else "")) if errbuf else "")); return
                elif mid == st.get("setmodel"):
                    # set_model done (errors ignored) → now send the actual prompt
                    st["prompt"] = _send_prompt(acp_sid)
                elif mid == st.get("prompt"):
                    if "error" in m:
                        yield ("error", str(m.get("error"))[:300])
                    break
        yield ("done", {})
    finally:
        try:
            proc.stdin.close()
        except Exception:
            pass
        try:
            proc.terminate()
        except Exception:
            pass


_CHAT_SESS_FILE = CONFIG_DIR / "chat_sessions.json"
_ATTACH_DIR = CONFIG_DIR / "attachments"


def _attachment_paths(images):
    """Persist pasted/attached image data ({mime,b64}) to temp files; return paths.
    Used by the `hermes chat --image` fallback (the ACP path sends data inline)."""
    paths = []
    for im in (images or []):
        b64 = (im or {}).get("b64") or ""
        if not b64:
            continue
        try:
            raw = base64.b64decode(b64.split(",", 1)[-1])
            ext = {"image/png": ".png", "image/jpeg": ".jpg", "image/jpg": ".jpg",
                   "image/gif": ".gif", "image/webp": ".webp"}.get((im.get("mime") or "").lower(), ".png")
            _ATTACH_DIR.mkdir(parents=True, exist_ok=True)
            fp = _ATTACH_DIR / ("img-" + hashlib.sha1(raw).hexdigest()[:16] + ext)
            if not fp.exists():
                fp.write_bytes(raw)
            paths.append(str(fp))
        except Exception:
            pass
    return paths


def _hermes_chat_fallback(messages, session_id=None, model_id=None, images=None, extra_env=None):
    """Reliable agent path when ACP isn't available (e.g. the acp extra isn't
    installed): `hermes chat -q` runs the full tool-enabled agent and prints the
    final reply. No streaming/thinking, but it works. Carries history via --resume.
    Honors the picked model via --provider/--model, images via --image, and the
    provider's saved API key via extra_env."""
    hb = which("hermes")
    user_text = _latest_user(messages)
    if not hb or not user_text:
        yield ("token", "⚠ the on-device agent isn't available.")
        yield ("done", {})
        return
    cmap = {}
    try:
        cmap = json.loads(_CHAT_SESS_FILE.read_text())
    except Exception:
        cmap = {}
    prev = cmap.get(session_id) if session_id else None
    cmd = [hb, "chat", "-q", user_text, "-Q", "--source", "tool", "--accept-hooks"]
    if model_id and model_id not in ("default", "hermes-agent") and ":" in model_id:
        prov, mdl = model_id.split(":", 1)
        cmd += ["--provider", prov, "--model", mdl]
    for pth in (_attachment_paths(images) or []):
        cmd += ["--image", pth]
    if prev:
        cmd += ["--resume", prev]
    env = dict(os.environ)
    env["PYTHONUTF8"] = "1"
    env["PYTHONIOENCODING"] = "utf-8"
    if extra_env:
        env.update({k: v for k, v in extra_env.items() if v})   # provider's saved key, etc.
    try:
        r = subprocess.run(cmd, capture_output=True, text=True, timeout=900, env=env,
                           errors="replace", cwd=str(Path.home()))
    except Exception as e:
        yield ("token", "⚠ agent error: %s" % e)
        yield ("done", {})
        return
    sid, reply_lines = None, []
    for line in (r.stdout or "").splitlines():
        s = line.strip()
        if not sid and s.lower().startswith("session_id:"):
            sid = s.split(":", 1)[1].strip()
            continue
        if s.startswith("↻") or s.startswith("✓ Resumed") or s.startswith("Resumed session"):
            continue
        reply_lines.append(line)
    reply = _ANSI_RE.sub("", "\n".join(reply_lines)).strip()
    if sid and session_id:
        cmap[session_id] = sid
        try:
            CONFIG_DIR.mkdir(parents=True, exist_ok=True)
            _CHAT_SESS_FILE.write_text(json.dumps(cmap))
        except Exception:
            pass
    if not reply:
        reply = "⚠ the agent returned nothing." + ((" " + (r.stderr or "")[:200]) if r.stderr else "")
    yield ("token", reply)
    yield ("done", {})


def _openclaw_chat(messages, session_id=None, model=None, images=None):
    """Run ONE OpenClaw agent turn via `openclaw agent --json` (tool-enabled, the
    OpenClaw analog of Hermes ACP). Non-streaming — returns the final reply. Sessions
    persist via --session-key. model is OpenClaw's `provider/model` key."""
    oc = which("openclaw")
    user_text = _latest_user(messages)
    if not oc or not user_text:
        yield ("token", "⚠ the on-device agent isn't available.")
        yield ("done", {})
        return
    cmd = [oc, "agent", "--agent", "main", "-m", user_text, "--json", "--timeout", "600"]
    if model:
        cmd += ["--model", model]
    if session_id:
        cmd += ["--session-key", "agentbay:" + str(session_id)]
    for pth in (_attachment_paths(images) or []):
        cmd += ["--file", pth]
    env = _agent_env(); env["PYTHONUTF8"] = "1"; env["PYTHONIOENCODING"] = "utf-8"
    try:
        r = subprocess.run(cmd, capture_output=True, text=True, timeout=620, env=env,
                           errors="replace", cwd=str(Path.home()))
    except Exception as e:
        yield ("token", "⚠ agent error: %s" % e)
        yield ("done", {})
        return
    reply = ""
    try:
        d = json.loads(r.stdout or "{}")
        payloads = ((d.get("result") or {}).get("payloads")) or []
        reply = " ".join(p.get("text", "") for p in payloads if isinstance(p, dict)).strip()
    except Exception:
        reply = (r.stdout or "").strip()
    reply = _ANSI_RE.sub("", reply).strip()
    if not reply:
        reply = "⚠ the agent returned nothing." + ((" " + (r.stderr or "")[:200]) if r.stderr else "")
    yield ("token", reply)
    yield ("done", {})


def local_agent_stream(messages, session_id=None, model_id=None, images=None, env=None, kind="hermes"):
    """Run the on-device agent. OpenClaw → `openclaw agent --json`. Hermes → ACP
    (streams reply+thinking+tools); if ACP can't start (no output / handshake fail —
    common on Windows when the acp extra isn't installed), fall back to the reliable
    `hermes chat -q` path. The picked model is the agent's brain (set_model /
    --provider+--model / openclaw --model); `env` carries the provider's saved key."""
    if kind == "openclaw":
        for ev, payload in _openclaw_chat(messages, session_id, model_id, images):
            yield ev, payload
        return
    emitted = 0
    failed = None
    for ev, payload in acp_stream_turn(messages, session_id, model_id=model_id, images=images, env=env):
        if ev == "__fail__":
            failed = payload
            break
        if ev == "done":
            if emitted == 0:
                failed = "no output from ACP"
                break
            yield ev, payload
            return
        if ev in ("token", "reasoning", "tool"):
            emitted += 1
        yield ev, payload
    if emitted == 0:
        for ev, payload in _hermes_chat_fallback(messages, session_id, model_id=model_id, images=images, extra_env=env):
            yield ev, payload
    else:
        yield ("done", {})


# AgentBay provider id -> Hermes inference-provider name (the agent's brain). Most
# match 1:1 (deepseek, openai, anthropic, gemini, groq, openrouter, mistral, nous);
# local Ollama is Hermes's "ollama" provider.
_HERMES_PROVIDER = {"local": "ollama"}


def _agent_route(cfg, data):
    """Decide whether a chat request runs through the on-device agent, and with what.
    Every model the user picked runs through the agent (tools), using that provider+
    model as its brain; the saved key is handed to the agent via env. Returns
    (is_agent, model_id, images, env, kind) — kind is 'hermes' or 'openclaw'."""
    kind = _agent_kind(cfg)
    if not kind or cfg.get("agent_mode") is False:
        return (False, None, None, None, None)
    pid = (data.get("provider") or "").lower()
    mdl = data.get("model") or ""
    if not pid or not mdl:
        return (False, None, None, None, None)
    images = data.get("images") or []
    if kind == "openclaw":
        # OpenClaw keys are `provider/model` (model may contain extra slashes).
        return (True, pid + "/" + mdl, images, {}, "openclaw")
    # ---- Hermes ----
    # Legacy: a session saved as provider "agent"/"local"+"hermes-agent" → use the
    # agent's own configured default (model already in `provider:model` form, or none).
    if pid == "agent" or mdl == "hermes-agent":
        model_id = None if mdl in ("default", "hermes-agent", "") else mdl
        return (True, model_id, images, {}, "hermes")
    hp = _HERMES_PROVIDER.get(pid, pid)
    model_id = _agent_model_id(hp, mdl)   # strips the implicit `:latest` for ollama/custom
    env = {}
    spec = PROVIDERS.get(pid, {})
    p = cfg.get("providers", {}).get(pid, {})
    if spec.get("key_env") and p.get("key"):
        env[spec["key_env"]] = p["key"]          # hand the saved key to the agent
    if pid == "local" and p.get("base_url"):     # custom Ollama host
        host = re.sub(r"/v1/?$", "", p["base_url"].rstrip("/"))
        if host:
            env["OLLAMA_HOST"] = host
    return (True, model_id, images, env, "hermes")


def _acp_probe(hb, timeout=15):
    """Spawn `hermes acp` and do a single initialize handshake. Returns (ok, detail)
    so we can tell WHY the local agent isn't working on a given machine."""
    try:
        proc = subprocess.Popen([hb, "acp"], stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                                stderr=subprocess.PIPE, text=True, bufsize=1)
    except Exception as e:
        return False, "could not spawn: %s" % e
    out_q = queue.Queue()
    threading.Thread(target=lambda: ([out_q.put(l) for l in proc.stdout], out_q.put(None)), daemon=True).start()
    try:
        proc.stdin.write(json.dumps({"jsonrpc": "2.0", "id": 1, "method": "initialize",
                                     "params": {"protocolVersion": 1, "clientCapabilities": {},
                                                "clientInfo": {"name": "agentbay", "version": "1"}}}) + "\n")
        proc.stdin.flush()
    except Exception as e:
        proc.terminate()
        return False, "write failed: %s" % e
    deadline = time.time() + timeout
    while time.time() < deadline:
        try:
            line = out_q.get(timeout=1)
        except Exception:
            continue
        if line is None:
            break
        try:
            m = json.loads(line)
        except Exception:
            continue
        if m.get("id") == 1 and "result" in m:
            proc.terminate()
            return True, "ok"
        if m.get("id") == 1 and "error" in m:
            proc.terminate()
            return False, str(m.get("error"))[:200]
    err = ""
    try:
        proc.terminate()
        err = (proc.stderr.read() or "")[:300] if proc.stderr else ""
    except Exception:
        pass
    return False, "no handshake in %ss%s" % (timeout, (" — " + err) if err else "")


def agent_debug():
    """Why is (or isn't) the local agent active? Surfaced in Settings → Agent and
    /api/agent-debug so we can diagnose Windows without a VM."""
    hb = which("hermes")
    info = {
        "os": platform.system(), "home": str(Path.home()),
        "hermes_bin": hb or "(not found)",
        "openclaw_bin": which("openclaw") or "(not found)",
        "HERMES_HOME": os.environ.get("HERMES_HOME") or "(unset)",
        "AGENTBAY_PROFILE": os.environ.get("AGENTBAY_PROFILE") or "(unset)",
        "is_multiuser_ec2": _is_multiuser_ec2(),
        "acp_available": _acp_available(),
        "agent_mode": load_config().get("agent_mode"),
    }
    if hb and info["acp_available"]:
        ok, detail = _acp_probe(hb)
        info["acp_handshake_ok"] = ok
        info["acp_detail"] = detail
        # Usable as long as Hermes is here — ACP streams it, else `hermes chat` runs it.
        info["agent_ready"] = True
        info["mode"] = "acp (streaming)" if ok else "hermes chat (fallback — ACP not available)"
    else:
        info["agent_ready"] = False
        info["mode"] = "none"
        info["acp_detail"] = ("multi-user EC2 — uses the gateway" if info["is_multiuser_ec2"]
                              else "Hermes not found — install it below")
    return info


def _agent_chat(gw, provider, model, messages, session_id=None, timeout=600):
    """Run a chat turn through the agent gateway: POST /chat/completions with
    {model, provider} + a session header — the agent picks that provider+model as
    its brain and runs the full tool loop. (Method confirmed from hermes-webui.)"""
    conv = [{"role": m["role"], "content": m["content"]} for m in messages
            if m.get("role") in ("user", "assistant", "system") and m.get("content")]
    body = {"model": model or "default", "messages": conv, "stream": False}
    if provider in _GATEWAY_PROVIDER_NAMES:
        body["provider"] = provider           # gateway routes the agent to this provider
    headers = {"Content-Type": "application/json"}
    if gw.get("key"):
        headers["Authorization"] = f"Bearer {gw['key']}"
    # Session continuation headers require API-key auth on the gateway. Only send
    # them when we have a key (the EC2 multi-user setup); an unauthenticated
    # localhost gateway 403s on them. Without them each turn is stateless, which is
    # fine — AgentBay sends the full message history every turn anyway.
    if session_id and gw.get("key"):
        headers["X-Hermes-Session-Id"] = str(session_id)
        headers["X-Hermes-Session-Key"] = f"agentbay:{session_id}"
    req = urllib.request.Request(gw["base_url"] + "/chat/completions",
                                 data=json.dumps(body).encode(), headers=headers)
    with _urlopen(req, timeout) as r:
        d = json.loads(r.read())
    msg = d.get("choices", [{}])[0].get("message", {}) or {}
    reply = msg.get("content", "") or ""
    # Surface the agent's thinking + which tools it called, when the gateway returns
    # them (reasoning models fill reasoning_content; the agent fills tool_calls).
    reasoning = msg.get("reasoning_content") or msg.get("reasoning") or ""
    tools = []
    for tc in (msg.get("tool_calls") or []):
        fn = tc.get("function") or {}
        if fn.get("name"):
            tools.append({"name": fn.get("name", ""), "args": (fn.get("arguments") or "")[:600]})
    extra = {"reasoning": reasoning, "tools": tools}
    return reply, d.get("usage", {}), extra


def _agent_chat_stream(gw, provider, model, messages, session_id=None, timeout=600):
    """Stream a chat turn through the agent gateway. Yields (type, data) events:
    ('token', str) reply text, ('reasoning', str) the agent's thinking,
    ('tool', {name,args,index}) a tool call as it forms, ('done', {}). Falls back
    to one ('token', full)+('done') if the gateway doesn't actually stream."""
    conv = [{"role": m["role"], "content": m["content"]} for m in messages
            if m.get("role") in ("user", "assistant", "system") and m.get("content")]
    body = {"model": model or "default", "messages": conv, "stream": True}
    if provider in _GATEWAY_PROVIDER_NAMES:
        body["provider"] = provider
    headers = {"Content-Type": "application/json", "Accept": "text/event-stream"}
    if gw.get("key"):
        headers["Authorization"] = f"Bearer {gw['key']}"
    if session_id and gw.get("key"):
        headers["X-Hermes-Session-Id"] = str(session_id)
        headers["X-Hermes-Session-Key"] = f"agentbay:{session_id}"
    req = urllib.request.Request(gw["base_url"] + "/chat/completions",
                                 data=json.dumps(body).encode(), headers=headers)
    tools_acc, got = {}, False
    with _urlopen(req, timeout) as r:
        for raw in r:
            line = raw.decode("utf-8", "ignore").strip()
            if not line or not line.startswith("data:"):
                continue
            payload = line[5:].strip()
            if payload == "[DONE]":
                break
            try:
                d = json.loads(payload)
            except Exception:
                continue
            delta = (d.get("choices") or [{}])[0].get("delta") or {}
            if delta.get("content"):
                got = True
                yield ("token", delta["content"])
            rc = delta.get("reasoning_content") or delta.get("reasoning")
            if rc:
                got = True
                yield ("reasoning", rc)
            for tc in (delta.get("tool_calls") or []):
                idx = tc.get("index", 0)
                fn = tc.get("function") or {}
                acc = tools_acc.setdefault(idx, {"name": "", "args": ""})
                if fn.get("name"):
                    acc["name"] = fn["name"]
                if fn.get("arguments"):
                    acc["args"] += fn["arguments"]
                got = True
                yield ("tool", {"name": acc["name"], "args": acc["args"][:600], "index": idx})
    if not got:
        # gateway ignored stream:true and returned a normal body — recover gracefully
        reply, _u, extra = _agent_chat(gw, provider, model, messages, session_id, timeout)
        if extra.get("reasoning"):
            yield ("reasoning", extra["reasoning"])
        for t in extra.get("tools", []):
            yield ("tool", t)
        yield ("token", reply or "")
    yield ("done", {})


def chat_complete(cfg, messages, provider=None, model=None, session_id=None):
    pid, spec, p = resolve_provider(cfg, provider)
    base, key = p["base_url"], p["key"]
    mdl = model or p["model"]
    # ---- Agent routing: every model chats THROUGH the agent (tools), not raw ----
    gw = _agent_gateway(cfg)
    if gw and not (pid == "local" and base.rstrip("/") == gw["base_url"] and not gw.get("key")):
        t0 = time.time()
        try:
            reply, usage, extra = _agent_chat(gw, pid, mdl, messages, session_id)
            return {"reply": reply, "model": mdl, "provider": pid, "agent": True,
                    "usage": usage, "latency_ms": int((time.time() - t0) * 1000),
                    "reasoning": extra.get("reasoning", ""), "tools": extra.get("tools", [])}
        except urllib.error.HTTPError as e:
            return {"error": f"Agent HTTP {e.code}: {e.read().decode('utf-8', 'ignore')[:300]}"}
        except Exception as e:
            return {"error": f"Agent error: {e}"}
    # ---- direct provider call (only when no agent gateway is configured) ----
    if spec["needs_key"] and not key:
        return {"error": f"{spec['label']} API key not set. Add it in Settings → Providers."}
    # Always anchor with the base system prompt; fold any client-supplied
    # system content (Personalization, Agent persona, Project knowledge) in
    # after it — the client labels its own sections — so the English-default
    # guard and formatting rules are never lost.
    extra_sys = "\n\n".join(m["content"] for m in messages if m.get("role") == "system" and m.get("content"))
    base_sys = SYSTEM_PROMPT + (("\n\n" + extra_sys) if extra_sys else "")
    messages = [{"role": "system", "content": base_sys}] + \
               [m for m in messages if m.get("role") != "system"]
    last_user = next((m["content"] for m in reversed(messages) if m.get("role") == "user"), "")
    t0 = time.time()
    try:
        reply, usage = _provider_call(spec, base, key, mdl, messages)
        # language guard: user wrote Latin but model replied mostly Chinese → retry once, force English
        if _is_latin(last_user) and _cjk_ratio(reply) > 0.2:
            forced = [{"role": "system", "content": "Respond ONLY in English. Do not use Chinese."}] + \
                     [m for m in messages if m.get("role") != "system"]
            try:
                reply2, usage2 = _provider_call(spec, base, key, mdl, forced)
                if _cjk_ratio(reply2) < _cjk_ratio(reply):
                    reply, usage = reply2, usage2
            except Exception:
                pass
        return {"reply": reply, "model": mdl, "provider": pid,
                "usage": usage, "latency_ms": int((time.time() - t0) * 1000)}
    except urllib.error.HTTPError as e:
        return {"error": f"HTTP {e.code}: {e.read().decode('utf-8','ignore')[:300]}"}
    except Exception as e:
        return {"error": str(e)}


def _parse_followups(reply):
    reply = (reply or "").strip()
    reply = re.sub(r"```[a-zA-Z]*", "", reply).replace("```", "").strip()
    arr = []
    mt = re.search(r"\[.*\]", reply, re.S)
    if mt:
        try:
            arr = json.loads(mt.group(0))
        except Exception:
            arr = []
    if not arr:                       # fallbacks: quoted questions, then question-like lines
        arr = re.findall(r'"([^"]+\?)"', reply) or \
              [re.sub(r'^[\s\-\*\d\.\)]+', '', ln).strip().strip('"')
               for ln in reply.splitlines() if ln.strip().endswith("?")]
    return {"followups": [str(x).strip() for x in arr if str(x).strip()][:3]}


def gen_followups(cfg, messages, provider=None, model=None):
    """Ask the model for 3 short, relevant follow-up questions grounded in the
    actual conversation (replaces the old canned client-side suggestions)."""
    convo = [{"role": m["role"], "content": m["content"]}
             for m in messages if m.get("role") in ("user", "assistant") and m.get("content")][-6:]
    if not convo:
        return {"followups": []}
    sysmsg = ("You generate follow-up questions. Based ONLY on the conversation so far, write 3 short, "
              "specific questions the USER would naturally ask next (first person, addressed to the assistant). "
              "Do NOT use any tools — just output. Return ONLY a JSON array of 3 strings, no prose, no numbering.")
    # Agent-held providers (Nous OAuth, custom, …) have no local key here — ask the
    # on-device agent for the follow-ups instead of calling the provider directly.
    is_agent, model_id, _imgs, env, kind = _agent_route(cfg, {"provider": provider, "model": model})
    if is_agent:
        text = sysmsg + "\n\nConversation so far:\n" + \
               "\n".join("%s: %s" % (m["role"], m["content"]) for m in convo) + \
               "\n\nReturn the 3 questions now as a JSON array."
        reply = ""
        try:
            for ev, payload in local_agent_stream([{"role": "user", "content": text}], None, model_id, None, env, kind):
                if ev == "token":
                    reply += payload
        except Exception:
            return {"followups": []}
        return _parse_followups(reply)
    # Direct provider call (this provider has a local API key).
    pid, spec, p = resolve_provider(cfg, provider)
    base, key = p["base_url"], p["key"]
    mdl = model or p["model"]
    if spec["needs_key"] and not key:
        return {"followups": []}
    msgs = [{"role": "system", "content": sysmsg}] + convo + \
           [{"role": "user", "content": "Return the 3 follow-up questions now as a JSON array."}]
    try:
        reply, _ = _provider_call(spec, base, key, mdl, msgs, max_tokens=1024, timeout=45)
        return _parse_followups(reply)
    except Exception:
        return {"followups": []}


# ---- optional Langfuse tracing (env-gated; ships no keys) ------------------
LANGFUSE = {
    "host": os.environ.get("LANGFUSE_HOST", "").rstrip("/"),
    "pk": os.environ.get("LANGFUSE_PUBLIC_KEY", ""),
    "sk": os.environ.get("LANGFUSE_SECRET_KEY", ""),
    "user": os.environ.get("LANGFUSE_USER", os.environ.get("AGENTBAY_USER", "agentbay")),
}


def langfuse_log(messages, res, provider, model, latency_ms):
    """Fire-and-forget: send one trace + generation to Langfuse for this chat."""
    lf = LANGFUSE
    if not (lf["host"] and lf["pk"] and lf["sk"]):
        return
    try:
        now = datetime.datetime.now(datetime.timezone.utc)
        start = now - datetime.timedelta(milliseconds=latency_ms or 0)
        iso = lambda t: t.isoformat().replace("+00:00", "Z")
        last_user = next((m.get("content", "") for m in reversed(messages) if m.get("role") == "user"), "")
        reply = res.get("reply", "") if isinstance(res, dict) else ""
        usage = (res or {}).get("usage") or {}
        tid, gid = uuid.uuid4().hex, uuid.uuid4().hex
        batch = [
            {"id": uuid.uuid4().hex, "type": "trace-create", "timestamp": iso(now),
             "body": {"id": tid, "name": "agentbay-chat", "userId": lf["user"],
                      "input": last_user, "output": reply,
                      "metadata": {"provider": provider, "model": model, "latency_ms": latency_ms}}},
            {"id": uuid.uuid4().hex, "type": "generation-create", "timestamp": iso(now),
             "body": {"id": gid, "traceId": tid, "name": "chat", "model": model or "",
                      "input": messages, "output": reply,
                      "startTime": iso(start), "endTime": iso(now),
                      "usage": {"input": usage.get("prompt_tokens"), "output": usage.get("completion_tokens"),
                                "total": usage.get("total_tokens")}}},
        ]
        data = json.dumps({"batch": batch}).encode()
        auth = base64.b64encode(f"{lf['pk']}:{lf['sk']}".encode()).decode()
        req = urllib.request.Request(lf["host"] + "/api/public/ingestion", data=data,
                                     headers={"Content-Type": "application/json", "Authorization": "Basic " + auth})
        _urlopen(req, 10).read()
    except Exception:
        pass


# non-chat models to hide from the picker (embeddings/audio/image/etc.)
_NON_CHAT_RE = re.compile(
    r"(embed|whisper|tts|text-to-speech|speech|dall-?e|audio|realtime|moderation|"
    r"rerank|guard|safety|image|sora|veo|imagen|babbage|davinci|curie|ada|"
    r"text-(ada|babbage|curie|davinci)|-tts|-vision$|aqa)", re.I)


def list_models(spec, base, key):
    """Fetch the provider's LIVE model list, filtered to usable chat models.
    Anthropic uses its native /models (x-api-key + version); everything else is
    OpenAI-wire GET /models with a Bearer key."""
    base = base.rstrip("/")
    if spec.get("api") == "anthropic":
        req = urllib.request.Request(base + "/models?limit=200",
                                     headers={"x-api-key": key or "", "anthropic-version": "2023-06-01"})
        with _urlopen(req, 20) as r:
            d = json.loads(r.read())
        return [m.get("id") for m in d.get("data", []) if m.get("id")]   # already chat-only
    headers = {"Authorization": f"Bearer {key}"} if key else {}
    # Be forgiving about the base URL: many people paste an Ollama/LM-Studio host
    # without the /v1 suffix. Try /models as given, then /v1/models, then Ollama's
    # native /api/tags — so "http://host:11434" just works.
    cands = [base + "/models"]
    if not base.endswith("/v1"):
        cands.append(base + "/v1/models")
    last = None
    for url in cands:
        try:
            with _urlopen(urllib.request.Request(url, headers=headers), 20) as r:
                d = json.loads(r.read())
            items = d.get("data") if isinstance(d, dict) else (d if isinstance(d, list) else [])
            ids = [m.get("id") for m in (items or []) if isinstance(m, dict) and m.get("id")]
            if ids:
                return [m for m in ids if not _NON_CHAT_RE.search(m)]
        except Exception as e:
            last = e
    # Ollama native API
    try:
        tb = base[:-3].rstrip("/") if base.endswith("/v1") else base
        with _urlopen(urllib.request.Request(tb + "/api/tags", headers=headers), 20) as r:
            d = json.loads(r.read())
        ids = [(m.get("name") or m.get("model")) for m in d.get("models", []) if isinstance(m, dict)]
        ids = [i for i in ids if i]
        if ids:
            return [m for m in ids if not _NON_CHAT_RE.search(m)]
    except Exception as e:
        last = e
    if last:
        raise last
    return []


def test_provider(cfg, provider, key_override=None, base_override=None):
    pid, spec, p = resolve_provider(cfg, provider)
    base = (base_override or p["base_url"]).rstrip("/")
    key = key_override or p["key"]
    if spec.get("needs_key") and not key:
        return {"ok": False, "error": "no key provided"}
    try:
        models = list_models(spec, base, key)
        if not models:
            dm = spec.get("default_model")
            return {"ok": True, "models": [dm] if dm else []}
        return {"ok": True, "models": models[:100]}
    except urllib.error.HTTPError as e:
        return {"ok": False, "error": f"HTTP {e.code}: {e.read().decode('utf-8', 'ignore')[:160]}"}
    except Exception as e:
        return {"ok": False, "error": str(e)}


# ---- HTTP handler ---------------------------------------------------------
class Handler(BaseHTTPRequestHandler):
    server_version = "AgentBay/1.0"

    def _send(self, code, body, ctype="application/json", cookie=None):
        if isinstance(body, (dict, list)):
            body = json.dumps(body).encode()
        elif isinstance(body, str):
            body = body.encode()
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        sc = cookie or self._share_set_cookie()
        if sc:
            self.send_header("Set-Cookie", sc)
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    # -- share access gate --------------------------------------------------
    def _share_token_in_query(self):
        q = self.path.split("?", 1)
        if len(q) == 2:
            for kv in q[1].split("&"):
                if kv.startswith("k="):
                    return urllib.parse.unquote(kv[2:])
        return None

    def _share_set_cookie(self):
        """If this request presented a valid ?k= token, persist it as a cookie."""
        tok = SHARE.get("token")
        if not tok:
            return None
        k = self._share_token_in_query()
        if k and secrets.compare_digest(k, tok):
            return f"ab_share={tok}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400"
        return None

    def _share_ok(self):
        """True when sharing is off, or the request carries the valid token."""
        tok = SHARE.get("token")
        if not tok:
            return True
        # Only the public share tunnel is gated. Local / reverse-proxy (nginx)
        # access is already protected and must never be locked out by a share —
        # otherwise starting a share blocks the normal users on the nginx URL.
        share_host = urllib.parse.urlparse(SHARE.get("url") or "").netloc.lower()
        req_host = (self.headers.get("Host") or "").split(",")[0].strip().lower()
        if share_host and req_host and req_host != share_host:
            return True
        k = self._share_token_in_query()
        if k and secrets.compare_digest(k, tok):
            return True
        for part in self.headers.get("Cookie", "").split(";"):
            part = part.strip()
            if part.startswith("ab_share=") and secrets.compare_digest(part[len("ab_share="):], tok):
                return True
        return False

    def _gate(self):
        """Return True to proceed; otherwise emit 401 and return False."""
        if self._share_ok():
            return True
        if self.path.split("?", 1)[0].startswith("/api/"):
            self._send(401, {"error": "access key required"})
        else:
            self._send(401, "<!doctype html><meta charset=utf-8><title>Access required</title>"
                            "<body style='font:16px system-ui;max-width:30rem;margin:18vh auto;padding:0 1rem;text-align:center'>"
                            "<h2>Access key required</h2><p>Open the full share link — it includes the access key after <code>?k=</code>.</p></body>",
                       "text/html; charset=utf-8")
        return False

    def _read_json(self):
        n = int(self.headers.get("Content-Length", 0))
        if not n:
            return {}
        try:
            return json.loads(self.rfile.read(n))
        except Exception:
            return {}

    def log_message(self, *a):
        pass  # quiet

    # -- routing --
    def do_GET(self):
        if not self._gate():
            return
        path = self.path.split("?", 1)[0]
        if path == "/" or path == "/index.html":
            return self._serve_file("index.html", "text/html; charset=utf-8")
        if path == "/api/share/status":
            return self._send(200, share_status())
        if path == "/api/app/version":
            return self._send(200, app_update_status())
        if path.startswith("/static/"):
            return self._serve_file(path[len("/static/"):], None)
        if path == "/api/detect":
            return self._send(200, detect_os())
        if path == "/api/agents":
            return self._send(200, {"agents": [agent_status(a) for a in AGENTS]})
        if path == "/api/config":
            return self._send(200, public_config(load_config()))
        if path == "/api/health":
            return self._send(200, {"ok": True, "version": "1.0"})
        if path == "/api/providers":
            cfg = load_config()
            return self._send(200, public_config(cfg)["providers"])
        if path.startswith("/api/release/"):
            agent = path.rsplit("/", 1)[-1]
            if agent in AGENTS:
                return self._send(200, github_latest_release(AGENTS[agent]["repo"]))
            return self._send(404, {"error": "unknown agent"})
        if path.startswith("/api/update/check/"):
            agent = path.rsplit("/", 1)[-1]
            if agent in AGENTS:
                return self._send(200, update_status(agent))
            return self._send(404, {"error": "unknown agent"})
        if path == "/api/enabled-models":
            return self._send(200, {"models": enabled_models(load_config())})
        if path == "/api/integrations":
            return self._send(200, integrations_status(load_config()))
        if path == "/api/integrations/whatsapp/qr":
            return self._send(200, whatsapp_qr_status())
        if path == "/api/sessions":
            return self._send(200, list_sessions())
        if path == "/api/skill/browser-use":
            return self._send(200, browser_use_status())
        if path == "/api/agent-profiles":
            cfg = load_config()
            return self._send(200, {"profiles": list_hermes_profiles(), "active": cfg.get("agent_profile") or ""})
        if path == "/api/agent-debug":
            return self._send(200, agent_debug())
        if path == "/api/import/sessions":
            try:
                return self._send(200, {"sessions": read_agent_sessions()})
            except Exception as e:
                return self._send(200, {"sessions": [], "error": str(e)})
        if path == "/api/skills":
            # ask the active backend for its skills (Hermes gateway exposes /skills).
            # graceful empty for plain LLM providers.
            try:
                cfg = load_config()
                pid, spec, p = resolve_provider(cfg, None)
                base, key = p["base_url"].rstrip("/"), p.get("key")
                headers = {"Authorization": f"Bearer {key}"} if key else {}
                req = urllib.request.Request(base + "/skills", headers=headers)
                d = json.loads(_urlopen(req, 10).read())
                items = d.get("data") or d.get("skills") or (d if isinstance(d, list) else [])
                items = [{"name": s.get("name", ""), "description": s.get("description", ""),
                          "category": s.get("category")} for s in items if isinstance(s, dict)]
                return self._send(200, {"skills": items})
            except Exception:
                return self._send(200, {"skills": []})
        if path.startswith("/api/install/status/"):
            job = path.rsplit("/", 1)[-1]
            with _job_lock:
                j = _install_jobs.get(job)
                return self._send(200, dict(j) if j else {"status": "unknown"})
        return self._send(404, {"error": "not found"})

    def do_POST(self):
        if not self._gate():
            return
        path = self.path.split("?", 1)[0]
        data = self._read_json()
        if path == "/api/share/start":
            res = start_share(SERVER["host"], SERVER["port"], provider=(data.get("provider") or "cloudflared"))
            # On success, set the cookie for the local browser that started it,
            # so the local session stays authorized once the gate turns on.
            if res.get("active") and SHARE.get("token"):
                return self._send(200, res, cookie=f"ab_share={SHARE['token']}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400")
            return self._send(200, res)
        if path == "/api/share/stop":
            return self._send(200, stop_share())
        if path == "/api/app/update":
            job = f"app-update-{int(time.time())}"
            with _job_lock:
                _install_jobs[job] = {"status": "running", "log": [], "agent": "agentbay"}
            threading.Thread(target=run_app_update, args=(job,), daemon=True).start()
            return self._send(200, {"job": job})
        if path == "/api/share/install":
            job = f"cloudflared-install-{int(time.time())}"
            with _job_lock:
                _install_jobs[job] = {"status": "running", "log": [], "agent": "cloudflared"}
            threading.Thread(target=run_share_install, args=(job,), daemon=True).start()
            return self._send(200, {"job": job})
        if path == "/api/config":
            updates = {}
            if "agent" in data:
                updates["agent"] = data["agent"]
            if "agent_profile" in data:
                updates["agent_profile"] = data["agent_profile"] or ""   # which Hermes profile/agent to chat with
            if "provider" in data and data["provider"] in PROVIDERS:
                updates["provider"] = data["provider"]
            if "active_model" in data:
                updates["active_model"] = data["active_model"]
            # per-provider updates: {providers: {deepseek: {key, base_url, models:[...]}}}
            if isinstance(data.get("providers"), dict):
                pu = {}
                for pid, vals in data["providers"].items():
                    if pid not in PROVIDERS or not isinstance(vals, dict):
                        continue
                    entry = {}
                    if isinstance(vals.get("models"), list):
                        entry["models"] = [m for m in vals["models"] if isinstance(m, str)]
                    if vals.get("base_url"):
                        entry["base_url"] = vals["base_url"]
                    if vals.get("key"):            # only overwrite when non-empty
                        entry["key"] = vals["key"]
                    if entry:
                        pu[pid] = entry
                if pu:
                    updates["providers"] = pu
            cfg = save_config(updates)
            # If a provider KEY was added/changed, push it into the agent gateway so
            # the agent can use that provider's models, then restart the gateway once.
            changed = False
            for _pid, _vals in (updates.get("providers") or {}).items():
                if _vals.get("key") and _agent_gateway(cfg):
                    if sync_provider_to_gateway(_pid, _vals["key"], _vals.get("base_url", "")):
                        changed = True
            restarted = restart_gateway() if changed else False
            res = public_config(cfg)
            res["gateway_restarting"] = restarted
            return self._send(200, res)
        if path in ("/api/install", "/api/update"):
            agent = data.get("agent")
            if agent not in AGENTS:
                return self._send(400, {"error": "unknown agent"})
            which = "update" if path == "/api/update" else "install"
            job = f"{agent}-{which}-{int(time.time())}"
            with _job_lock:
                _install_jobs[job] = {"status": "running", "log": [], "agent": agent}
            threading.Thread(target=run_install, args=(job, agent, which), daemon=True).start()
            return self._send(200, {"job": job})
        if path == "/api/test-key":
            cfg = load_config()
            provider = data.get("provider") or cfg.get("provider", "deepseek")
            res = test_provider(cfg, provider,
                                key_override=data.get("key") or data.get("deepseek_key"),
                                base_override=data.get("base_url"))
            return self._send(200, res)
        if path == "/api/shortcut":
            return self._send(200, create_desktop_launcher(force=True))
        if path in ("/api/skill/browser-use/install", "/api/skill/browser-use/update"):
            upd = path.endswith("/update")
            job = f"browser-use-{'update' if upd else 'install'}-{int(time.time())}"
            with _job_lock:
                _install_jobs[job] = {"status": "running", "log": [], "agent": "browser-use"}
            threading.Thread(target=install_browser_use, args=(job,), kwargs={"update": upd}, daemon=True).start()
            return self._send(200, {"job": job})
        if path == "/api/sessions":
            return self._send(200, merge_sessions(data.get("sessions") or []))
        if path == "/api/sessions/delete":
            return self._send(200, delete_session(data.get("id"), data.get("ts") or 0))
        if path == "/api/integrations/save":
            cid = data.get("channel") or data.get("id")
            return self._send(200, save_integration(cid, data.get("values") or {}))
        if path == "/api/integrations/disconnect":
            cid = data.get("channel") or data.get("id")
            return self._send(200, disconnect_integration(cid))
        if path == "/api/import/providers":
            found = read_agent_providers()
            cfg = load_config()
            updates, imported = {"providers": {}}, []
            for pid, info in found.items():
                if pid not in PROVIDERS:
                    continue
                if cfg.get("providers", {}).get(pid, {}).get("key"):
                    continue   # don't clobber a key the user already set here
                entry = {"key": info["key"]}
                if info.get("base_url"):
                    entry["base_url"] = info["base_url"]
                updates["providers"][pid] = entry   # key only — not enabled in the picker
                imported.append(pid)
            if imported:
                save_config(updates)
            return self._send(200, {"imported": imported})
        if path == "/api/providers/sync-agent":
            # Pull EVERY provider the agent (Hermes) has — incl. Nous Portal OAuth &
            # custom endpoints AgentBay doesn't natively list — so the user never
            # reconfigures. They appear in the picker and route through the agent.
            upd, ids = _import_agent_providers()
            if upd:
                save_config(upd)
            return self._send(200, {"imported": ids, "count": len(ids)})
        if path == "/api/extract":
            name = data.get("name") or "file"
            b64 = data.get("b64") or ""
            try:
                raw = base64.b64decode(b64.split(",", 1)[-1])   # tolerate data:URL prefix
            except Exception:
                return self._send(400, {"error": "bad base64"})
            if len(raw) > 25 * 1024 * 1024:
                return self._send(200, {"text": "", "note": "file too large (>25 MB)", "chars": 0})
            try:
                text, note = extract_text(name, raw)
            except Exception as e:
                text, note = "", f"extraction error: {e}"
            return self._send(200, {"text": text[:300000], "note": note, "chars": len(text)})
        if path == "/api/chat":
            cfg = load_config()
            msgs = data.get("messages") or []
            is_agent, model_id, images, env, kind = _agent_route(cfg, data)
            if is_agent:
                reply, reasoning, tools, plan = "", "", [], []
                t0 = time.time()
                for ev, payload in local_agent_stream(msgs, data.get("session_id"), model_id, images, env, kind):
                    if ev == "token":
                        reply += payload
                    elif ev == "reasoning":
                        reasoning += payload
                    elif ev == "tool":
                        # updates carry the same index (status/output deltas) — merge by slot
                        idx = payload.get("index", len(tools))
                        while len(tools) <= idx:
                            tools.append({})
                        tools[idx] = payload
                    elif ev == "plan":
                        plan = payload  # full state each emission — keep the latest
                    elif ev == "error":
                        reply = reply or ("⚠ " + str(payload))
                return self._send(200, {"reply": reply, "agent": True, "model": data.get("model") or "hermes-agent",
                                        "reasoning": reasoning, "tools": tools, "plan": plan,
                                        "latency_ms": int((time.time() - t0) * 1000)})
            res = chat_complete(cfg, msgs, provider=data.get("provider"), model=data.get("model"), session_id=data.get("session_id"))
            threading.Thread(target=langfuse_log,
                             args=(msgs, res, res.get("provider"), res.get("model"), res.get("latency_ms")),
                             daemon=True).start()
            return self._send(200, res)
        if path == "/api/chat/stream":
            cfg = load_config()
            msgs = data.get("messages") or []
            pid, spec, p = resolve_provider(cfg, data.get("provider"))
            mdl = data.get("model") or p["model"]
            gw = _agent_gateway(cfg)
            self.send_response(200)
            self.send_header("Content-Type", "text/event-stream")
            self.send_header("Cache-Control", "no-cache")
            self.send_header("X-Accel-Buffering", "no")
            self.end_headers()

            def emit(ev, payload):
                self.wfile.write(("data: " + json.dumps({"type": ev, "data": payload}) + "\n\n").encode())
                self.wfile.flush()

            try:
                use_gw = gw and not (pid == "local" and p["base_url"].rstrip("/") == gw["base_url"] and not gw.get("key"))
                is_agent, model_id, images, env, kind = _agent_route(cfg, data)
                if is_agent:
                    # the real on-device agent (tools, terminal) — no gateway needed,
                    # using the picked provider+model (with its saved key) as its brain
                    for ev, payload in local_agent_stream(msgs, data.get("session_id"), model_id, images, env, kind):
                        emit(ev, payload)
                elif use_gw:
                    for ev, payload in _agent_chat_stream(gw, pid, mdl, msgs, data.get("session_id")):
                        emit(ev, payload)
                else:
                    res = chat_complete(cfg, msgs, provider=pid, model=mdl, session_id=data.get("session_id"))
                    if res.get("reasoning"):
                        emit("reasoning", res["reasoning"])
                    for t in (res.get("tools") or []):
                        emit("tool", t)
                    emit("token", res.get("reply") or ("⚠ " + (res.get("error") or "no response")))
                    emit("done", {})
            except Exception as e:
                try:
                    emit("error", str(e))
                except Exception:
                    pass
            return
        if path == "/api/followups":
            cfg = load_config()
            res = gen_followups(cfg, data.get("messages") or [], provider=data.get("provider"), model=data.get("model"))
            return self._send(200, res)
        return self._send(404, {"error": "not found"})

    def _serve_file(self, rel, ctype):
        p = (WEB / rel).resolve()
        if not str(p).startswith(str(WEB.resolve())) or not p.is_file():
            return self._send(404, {"error": "not found"})
        if ctype is None:
            ext = p.suffix.lower()
            ctype = {".js": "application/javascript", ".jsx": "text/babel", ".css": "text/css",
                     ".svg": "image/svg+xml", ".png": "image/png",
                     ".html": "text/html; charset=utf-8"}.get(ext, "application/octet-stream")
        self._send(200, p.read_bytes(), ctype)


# ---- one-click desktop launcher (no terminal needed) ----------------------
_SHORTCUT_FLAG = CONFIG_DIR / ".shortcut_done"


def _launcher_python():
    """Prefer a GUI python (pythonw on Windows) so no console window flashes."""
    exe = sys.executable or "python3"
    if os.name == "nt":
        cand = Path(exe).with_name("pythonw.exe")
        if cand.exists():
            return str(cand)
    return exe


def create_desktop_launcher(force=False):
    """Create a clickable launcher (Desktop + app menu) so non-technical users can
    open AgentBay without a terminal. Idempotent; safe to call on every start.
    Returns {ok, where:[...], error?}."""
    try:
        sysname = platform.system().lower()
        launch_py = str(ROOT / "launch.py")
        py = _launcher_python()
        home = Path.home()
        where = []

        if sysname == "darwin":
            app = home / "Applications" / "AgentBay.app"
            (app / "Contents" / "MacOS").mkdir(parents=True, exist_ok=True)
            (app / "Contents" / "Resources").mkdir(parents=True, exist_ok=True)
            icns = WEB / "icon.icns"
            if icns.exists():
                shutil.copy2(icns, app / "Contents" / "Resources" / "icon.icns")
            (app / "Contents" / "Info.plist").write_text(
                '<?xml version="1.0" encoding="UTF-8"?>\n'
                '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" '
                '"http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n'
                '<plist version="1.0"><dict>'
                '<key>CFBundleName</key><string>AgentBay</string>'
                '<key>CFBundleDisplayName</key><string>AgentBay</string>'
                '<key>CFBundleIdentifier</key><string>com.agentbay.launcher</string>'
                '<key>CFBundleVersion</key><string>1.0</string>'
                '<key>CFBundlePackageType</key><string>APPL</string>'
                '<key>CFBundleExecutable</key><string>AgentBay</string>'
                '<key>CFBundleIconFile</key><string>icon.icns</string>'
                '<key>LSUIElement</key><true/>'
                '</dict></plist>\n')
            sh = (app / "Contents" / "MacOS" / "AgentBay")
            sh.write_text('#!/bin/bash\nexec %s "%s"\n' % (_shq(py), launch_py))
            os.chmod(sh, 0o755)
            where.append(str(app))

        elif sysname == "windows":
            # Build Desktop + Start Menu .lnk via PowerShell's WScript.Shell.
            ico = WEB / "icon.ico"
            desktop = home / "Desktop"
            startmenu = Path(os.environ.get("APPDATA", str(home / "AppData" / "Roaming"))) \
                / "Microsoft" / "Windows" / "Start Menu" / "Programs"
            targets = [p for p in (desktop, startmenu) if p.exists() or p == startmenu]
            ps_lines = ["$W = New-Object -ComObject WScript.Shell"]
            for d in targets:
                d.mkdir(parents=True, exist_ok=True)
                lnk = str(d / "AgentBay.lnk").replace("'", "''")
                ps_lines += [
                    "$s = $W.CreateShortcut('%s')" % lnk,
                    "$s.TargetPath = '%s'" % py.replace("'", "''"),
                    "$s.Arguments = '\"%s\"'" % launch_py.replace("'", "''"),
                    "$s.WorkingDirectory = '%s'" % str(ROOT).replace("'", "''"),
                    "$s.IconLocation = '%s'" % str(ico).replace("'", "''"),
                    "$s.Description = 'Open AgentBay'",
                    "$s.Save()",
                ]
            subprocess.run(["powershell", "-NoProfile", "-NonInteractive", "-Command", "\n".join(ps_lines)],
                           capture_output=True, timeout=30)
            where += [str(p / "AgentBay.lnk") for p in targets]

        else:  # linux / *nix
            png = WEB / "icon-512.png"
            entry = ("[Desktop Entry]\nType=Application\nName=AgentBay\n"
                     "Comment=Open AgentBay\n"
                     "Exec=%s \"%s\"\nIcon=%s\nTerminal=false\nCategories=Utility;\n"
                     % (_shq(py), launch_py, str(png)))
            appsdir = home / ".local" / "share" / "applications"
            appsdir.mkdir(parents=True, exist_ok=True)
            (appsdir / "agentbay.desktop").write_text(entry)
            os.chmod(appsdir / "agentbay.desktop", 0o755)
            where.append(str(appsdir / "agentbay.desktop"))
            desk = home / "Desktop"
            if desk.is_dir():
                (desk / "agentbay.desktop").write_text(entry)
                try:
                    os.chmod(desk / "agentbay.desktop", 0o755)
                except Exception:
                    pass
                where.append(str(desk / "agentbay.desktop"))

        try:
            CONFIG_DIR.mkdir(parents=True, exist_ok=True)
            _SHORTCUT_FLAG.write_text("1")
        except Exception:
            pass
        return {"ok": True, "where": where}
    except Exception as e:
        return {"ok": False, "error": str(e)}


def _shq(s):
    return str(s).replace('"', '\\"')


def _is_wsl():
    try:
        return "microsoft" in platform.uname().release.lower() or os.path.exists("/proc/sys/fs/binfmt_misc/WSLInterop")
    except Exception:
        return False


def _open_browser(url):
    """Open the UI without crashing on headless/WSL setups. On WSL we hand the URL
    to the Windows browser; on a Linux box with no display we skip quietly (the URL
    is printed for the user)."""
    try:
        if _is_wsl():
            for cmd in (["wslview", url],
                        ["powershell.exe", "-NoProfile", "-Command", "Start-Process", url],
                        ["cmd.exe", "/c", "start", "", url]):
                try:
                    if cmd[0].endswith(".exe") or shutil.which(cmd[0]):
                        subprocess.Popen(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                        return
                except Exception:
                    continue
            return
        if platform.system() == "Linux" and not (os.environ.get("DISPLAY") or os.environ.get("WAYLAND_DISPLAY")):
            return                                  # headless server — nothing to open
        webbrowser.open(url)
    except Exception:
        pass


def free_port(host, port):
    # SO_REUSEADDR so a recently-closed server in TIME_WAIT doesn't push us to a
    # random port on restart (matches HTTPServer.allow_reuse_address).
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    try:
        s.bind((host, port)); s.close(); return port
    except OSError:
        s.close()
        s2 = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s2.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        s2.bind((host, 0)); p = s2.getsockname()[1]; s2.close(); return p


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--host", default="127.0.0.1")
    ap.add_argument("--port", type=int, default=8700)
    ap.add_argument("--no-browser", action="store_true")
    ap.add_argument("--no-cloudflared", action="store_true",
                    help="skip the one-time background download of the share-link tool")
    args = ap.parse_args()

    port = free_port(args.host, args.port)
    SERVER["host"], SERVER["port"] = args.host, port

    # Non-git installs (zip/tarball) carry no HEAD to compare against — record the
    # current upstream commit once so the in-app "update available" check works.
    threading.Thread(target=baseline_build_marker, daemon=True).start()
    # A local Hermes is driven directly over ACP (stdio) per turn — no background
    # gateway needed. (ensure_local_gateway is kept only for non-ACP fallbacks.)
    # First run on a real desktop: drop a clickable launcher (Desktop / Start Menu /
    # Applications) so the user never needs a terminal again. Skip on the headless
    # EC2 multi-user services (AGENTBAY_PROFILE) and Linux boxes with no desktop.
    # First run with an agent present: set up browser-use in the background so it
    # ships with AgentBay (no manual click). Skipped on EC2 (shared setup exists).
    def _maybe_browser_use():
        flag = CONFIG_DIR / ".browser_use_auto"
        if flag.exists() or os.environ.get("AGENTBAY_PROFILE"):
            return
        if not (which("hermes") or which("openclaw")):
            return                                  # no agent yet — nothing to attach to
        if browser_use_status().get("installed"):
            try: flag.write_text("1")
            except Exception: pass
            return
        try:
            CONFIG_DIR.mkdir(parents=True, exist_ok=True); flag.write_text("1")
        except Exception:
            pass
        job = "browser-use-auto"
        with _job_lock:
            _install_jobs[job] = {"status": "running", "log": [], "agent": "browser-use"}
        install_browser_use(job)
    threading.Thread(target=_maybe_browser_use, daemon=True).start()

    def _maybe_shortcut():
        if _SHORTCUT_FLAG.exists() or os.environ.get("AGENTBAY_PROFILE"):
            return
        if platform.system().lower() == "linux" and not (
                os.environ.get("DISPLAY") or os.environ.get("WAYLAND_DISPLAY")
                or (Path.home() / "Desktop").is_dir()):
            return
        create_desktop_launcher()
    threading.Thread(target=_maybe_shortcut, daemon=True).start()

    # NOTE: we no longer auto-import the agent's whole provider catalog — the user
    # wants the dropdown to show ONLY the providers they add in Settings → Providers.
    # (The /api/providers/sync-agent endpoint still exists if it's ever needed.)

    # Onboarding: make the share-link tool available on every machine (any OS).
    # One-time, in the background, only if missing — so "Remote access" just works.
    if not args.no_cloudflared and not _cloudflared_bin():
        def _bootstrap():
            try:
                install_cloudflared(lambda m: print(f"  [cloudflared] {m}"))
            except Exception as e:
                print(f"  [cloudflared] skipped: {e}")
        threading.Thread(target=_bootstrap, daemon=True).start()

    httpd = ThreadingHTTPServer((args.host, port), Handler)
    url = f"http://{args.host}:{port}/"
    print(f"\n  ✅ AgentBay is running.\n  →  Open this in your browser:  {url}\n  (Ctrl-C to stop)\n")
    if not args.no_browser:
        threading.Timer(0.8, lambda: _open_browser(url)).start()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n  bye")
    finally:
        if SHARE.get("active"):
            stop_share()


if __name__ == "__main__":
    main()
