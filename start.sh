#!/usr/bin/env bash
# AgentBay launcher for Linux / macOS terminals:  bash start.sh
# (macOS users can also just double-click AgentBay.command; Windows: AgentBay.bat)
cd "$(dirname "$0")" || exit 1
PORT="${AGENTBAY_PORT:-8700}"

if ! command -v python3 >/dev/null 2>&1; then
  echo "Python 3 is required. Install it (e.g. 'sudo apt install python3' or from python.org) and re-run."
  exit 1
fi

if [ -f "server.py" ]; then
  exec python3 server.py --port "$PORT"
fi
echo "Setting up AgentBay…"
curl -fsSL https://raw.githubusercontent.com/NullNaveen/agentbay/main/install.sh | bash
