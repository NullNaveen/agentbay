#!/usr/bin/env bash
# AgentBay — double-click this file (macOS Finder) to start. No commands to type.
# If it won't open the first time: right-click → Open → Open (Gatekeeper asks once).
cd "$(dirname "$0")" || exit 1

PORT="${AGENTBAY_PORT:-8700}"

if ! command -v python3 >/dev/null 2>&1; then
  osascript -e 'display alert "Python 3 needed" message "AgentBay needs Python 3. Install it from python.org, then double-click again."' 2>/dev/null
  echo "Python 3 is required — install from https://python.org and re-open."
  read -r -p "Press Return to close." _
  exit 1
fi

if [ -f "server.py" ]; then
  # running from inside the AgentBay folder
  exec python3 server.py --port "$PORT"
fi

# standalone launcher — fetch + start from GitHub
echo "Setting up AgentBay…"
curl -fsSL https://raw.githubusercontent.com/NullNaveen/agentbay/main/install.sh | bash
