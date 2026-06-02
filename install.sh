#!/usr/bin/env bash
# AgentBay bootstrap installer (macOS / Linux)
#   curl -fsSL https://raw.githubusercontent.com/NullNaveen/agentbay/main/install.sh | bash
set -euo pipefail

REPO="${AGENTBAY_REPO:-NullNaveen/agentbay}"
APP_DIR="${AGENTBAY_HOME:-$HOME/.agentbay/app}"
PORT="${AGENTBAY_PORT:-8700}"

say(){ printf "\033[33m[agentbay]\033[0m %s\n" "$*"; }

# 1. need python3 — auto-install it if missing
install_python() {
  say "Python 3 not found — installing it…"
  if [ "$(uname)" = "Darwin" ]; then
    if command -v brew >/dev/null 2>&1; then brew install python3 && return 0; fi
    say "Homebrew not found. Install Python 3 from https://www.python.org/downloads/macos/ and re-run."
    return 1
  fi
  # Linux: try the available package manager (use sudo only if not already root)
  SUDO=""; [ "$(id -u)" -ne 0 ] && command -v sudo >/dev/null 2>&1 && SUDO="sudo"
  if   command -v apt-get >/dev/null 2>&1; then $SUDO apt-get update -y && $SUDO apt-get install -y python3
  elif command -v dnf     >/dev/null 2>&1; then $SUDO dnf install -y python3
  elif command -v yum     >/dev/null 2>&1; then $SUDO yum install -y python3
  elif command -v pacman  >/dev/null 2>&1; then $SUDO pacman -Sy --noconfirm python
  elif command -v zypper  >/dev/null 2>&1; then $SUDO zypper install -y python3
  elif command -v apk     >/dev/null 2>&1; then $SUDO apk add python3
  else say "No supported package manager found. Install Python 3 manually and re-run."; return 1
  fi
}
if ! command -v python3 >/dev/null 2>&1; then
  install_python || exit 1
  command -v python3 >/dev/null 2>&1 || { echo "Python 3 install did not complete. Install it manually and re-run."; exit 1; }
fi

# 2. fetch / update the app
mkdir -p "$(dirname "$APP_DIR")"
if [ -d "$APP_DIR/.git" ]; then
  say "updating AgentBay…"; git -C "$APP_DIR" pull --quiet || true
else
  if command -v git >/dev/null 2>&1; then
    say "downloading AgentBay…"; git clone --depth 1 "https://github.com/$REPO.git" "$APP_DIR" --quiet
  else
    say "downloading AgentBay (tarball)…"
    mkdir -p "$APP_DIR"
    curl -fsSL "https://github.com/$REPO/archive/refs/heads/main.tar.gz" \
      | tar -xz --strip-components=1 -C "$APP_DIR"
  fi
fi

# 3. launch (server falls back to the next free port if $PORT is taken,
#    then prints the real URL + opens your browser)
say "starting AgentBay… it will open in your browser"
exec python3 "$APP_DIR/server.py" --port "$PORT"
