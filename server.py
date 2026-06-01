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
import threading
import time
import uuid
import urllib.request
import urllib.error
import urllib.parse
import webbrowser
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
    """Flatten the user-enabled models across all providers — drives the top dropdown."""
    out = []
    for pid, spec in PROVIDERS.items():
        p = cfg.get("providers", {}).get(pid, {})
        if spec["needs_key"] and not p.get("key"):
            continue
        for m in p.get("models", []):
            out.append({"id": pid + "::" + m, "provider": pid, "model": m,
                        "label": m, "provider_label": spec["label"]})
    return out


def resolve_provider(cfg, pid=None, model=None):
    pid = pid or cfg.get("provider", "deepseek")
    spec = PROVIDERS.get(pid, PROVIDERS["deepseek"])
    p = cfg.get("providers", {}).get(pid, {})
    enabled = p.get("models", [])
    mdl = model or cfg.get("active_model") or (enabled[0] if enabled else spec["default_model"])
    return pid, spec, {
        "key": p.get("key", ""),
        "model": mdl,
        "base_url": (p.get("base_url") or spec["base_url"]).rstrip("/"),
    }


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
            str(home / ".bun/bin"), str(home / "go/bin")]
    # node version managers (nvm / fnm) install global CLIs under per-version bins
    for base in [home / ".nvm/versions/node", home / ".local/share/fnm/node-versions",
                 home / ".fnm/node-versions"]:
        try:
            dirs += [str(d) for d in base.glob("*/bin")]
            dirs += [str(d) for d in base.glob("*/installation/bin")]
        except Exception:
            pass
    try:
        dirs.append(str(BIN_DIR))   # AgentBay's own tool dir
    except Exception:
        pass
    return dirs


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


def update_status(agent_id):
    """Compare installed version with the latest GitHub release tag."""
    st = agent_status(agent_id)
    if not st["installed"]:
        return {"installed": False, "update_available": False}
    rel = github_latest_release(AGENTS[agent_id]["repo"])
    latest = rel.get("tag")
    cur = st.get("version") or ""
    # crude: extract trailing version-ish token from each and compare strings
    avail = bool(latest) and latest.lstrip("v") not in cur
    return {"installed": True, "current": cur, "latest": latest, "update_available": avail}


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


def _app_local_sha():
    if (ROOT / ".git").exists():
        try:
            r = _git("rev-parse", "HEAD")
            return r.stdout.strip() or None
        except Exception:
            return None
    return None


def app_version():
    sha = _app_local_sha()
    if sha:
        try:
            n = _git("rev-list", "--count", "HEAD").stdout.strip()
        except Exception:
            n = ""
        return (("r" + n + " · ") if n else "") + sha[:7]
    return "source"


def app_update_status():
    local = _app_local_sha()
    out = {"current": app_version(), "is_git": bool(local), "update_available": False}
    try:
        req = urllib.request.Request("https://api.github.com/repos/%s/commits/main" % APP_REPO,
                                     headers={"User-Agent": "AgentBay", "Accept": "application/vnd.github.sha"})
        latest = _urlopen(req, 15).read().decode().strip()
        out["latest"] = latest[:7]
        if local and latest:
            out["update_available"] = (local != latest)
    except Exception as e:
        out["error"] = str(e)
    return out


def run_app_update(job_id):
    def log(line):
        with _job_lock:
            _install_jobs[job_id]["log"].append(line)
    try:
        if not (ROOT / ".git").exists():
            log("This install isn't a git checkout — re-run the installer to update.")
            with _job_lock:
                _install_jobs[job_id]["status"] = "error"
            return
        log("$ git pull --ff-only")
        r = _git("pull", "--ff-only")
        log(((r.stdout or "") + (r.stderr or "")).strip()[:2000])
        ok = r.returncode == 0
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


def chat_complete(cfg, messages, provider=None, model=None):
    pid, spec, p = resolve_provider(cfg, provider)
    base, key = p["base_url"], p["key"]
    mdl = model or p["model"]
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


def gen_followups(cfg, messages, provider=None, model=None):
    """Ask the model for 3 short, relevant follow-up questions grounded in the
    actual conversation (replaces the old canned client-side suggestions)."""
    pid, spec, p = resolve_provider(cfg, provider)
    base, key = p["base_url"], p["key"]
    mdl = model or p["model"]
    if spec["needs_key"] and not key:
        return {"followups": []}
    convo = [{"role": m["role"], "content": m["content"]}
             for m in messages if m.get("role") in ("user", "assistant") and m.get("content")][-6:]
    if not convo:
        return {"followups": []}
    sysmsg = ("You generate follow-up questions. Based ONLY on the conversation so far, write 3 short, "
              "specific questions the USER would naturally ask next (first person, addressed to the assistant). "
              "Return ONLY a JSON array of 3 strings — no prose, no numbering.")
    msgs = [{"role": "system", "content": sysmsg}] + convo + \
           [{"role": "user", "content": "Return the 3 follow-up questions now as a JSON array."}]
    try:
        # Reasoning models (e.g. deepseek-v4-pro) spend tokens "thinking" before
        # emitting output — give enough headroom that the answer still fits.
        reply, _ = _provider_call(spec, base, key, mdl, msgs, max_tokens=1024, timeout=45)
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
        arr = [str(x).strip() for x in arr if str(x).strip()][:3]
        return {"followups": arr}
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
    req = urllib.request.Request(base + "/models", headers=headers)
    with _urlopen(req, 20) as r:
        d = json.loads(r.read())
    items = d.get("data") if isinstance(d, dict) else (d if isinstance(d, list) else [])
    ids = [m.get("id") for m in (items or []) if isinstance(m, dict) and m.get("id")]
    return [m for m in ids if not _NON_CHAT_RE.search(m)]


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
            return self._send(200, public_config(cfg))
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
            res = chat_complete(cfg, msgs, provider=data.get("provider"), model=data.get("model"))
            threading.Thread(target=langfuse_log,
                             args=(msgs, res, res.get("provider"), res.get("model"), res.get("latency_ms")),
                             daemon=True).start()
            return self._send(200, res)
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
    print(f"\n  AgentBay running → {url}\n  (Ctrl-C to stop)\n")
    if not args.no_browser:
        threading.Timer(0.8, lambda: webbrowser.open(url)).start()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n  bye")
    finally:
        if SHARE.get("active"):
            stop_share()


if __name__ == "__main__":
    main()
