#!/usr/bin/env bash
# AgentBay bootstrap installer (macOS / Linux)
#   curl -fsSL https://raw.githubusercontent.com/NullNaveen/agentbay/main/install.sh | bash
set -euo pipefail

REPO="${AGENTBAY_REPO:-NullNaveen/agentbay}"
APP_DIR="${AGENTBAY_HOME:-$HOME/.agentbay/app}"
PORT="${AGENTBAY_PORT:-8700}"

say(){ printf "\033[33m[agentbay]\033[0m %s\n" "$*"; }

# 1. need python3
if ! command -v python3 >/dev/null 2>&1; then
  echo "Python 3 is required. Install it (e.g. 'brew install python3' or 'apt install python3') and re-run."
  exit 1
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

# 3. launch
say "starting AgentBay on http://127.0.0.1:$PORT …"
exec python3 "$APP_DIR/server.py" --port "$PORT"
