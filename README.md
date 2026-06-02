# AgentBay

A tiny, no-build chat app for running local AI agents. Pick an agent, plug in a
model (your own API key or a local server), and start chatting — in a clean
interface that works on desktop and mobile.

No Electron, no `node_modules`, no build step. Just Python 3 and a single HTML page.

## Install

**macOS / Linux**
```bash
curl -fsSL https://raw.githubusercontent.com/NullNaveen/agentbay/main/install.sh | bash
```

**Windows (PowerShell)**
```powershell
irm https://raw.githubusercontent.com/NullNaveen/agentbay/main/install.ps1 | iex
```

Or run it from a clone:
```bash
git clone https://github.com/NullNaveen/agentbay.git
cd agentbay
python3 server.py
```

It starts a local server and opens `http://127.0.0.1:8700`. If that port is
busy it picks the next free one and prints the real URL. No Python? The
installer sets it up for you (winget on Windows, your package manager / Homebrew
on Linux & macOS).

## Update

In the app, an **"Update available"** banner appears whenever a new version is on
GitHub — click **Update now** and it updates itself and reloads. You can also use
**Settings → About → Check for updates**.

For the terminal:
```bash
# if you installed with the one-liner (re-runs the installer, pulls latest)
curl -fsSL https://raw.githubusercontent.com/NullNaveen/agentbay/main/install.sh | bash   # macOS/Linux
irm https://raw.githubusercontent.com/NullNaveen/agentbay/main/install.ps1 | iex          # Windows

# if you cloned it
cd agentbay && git pull && python3 server.py
```

## Uninstall

AgentBay is self-contained — delete its folder. Nothing is installed system-wide.
```bash
# macOS / Linux
rm -rf ~/.agentbay

# Windows (PowerShell)
Remove-Item -Recurse -Force "$HOME\.agentbay"
```
`~/.agentbay/app` is the code; `~/.agentbay/config.json` holds your settings/keys.
To reinstall fresh, remove the folder then run the install one-liner again.

### No terminal? Just double-click

Inside the folder there are ready-made launchers — no commands to type:

- **macOS** — double-click **`AgentBay.command`** (first time: right-click → Open → Open).
- **Windows** — double-click **`AgentBay.bat`**.
- **Linux** — run **`bash start.sh`** (or mark it executable and double-click → Run).

Each one starts AgentBay and opens it in your browser. Only Python 3 is needed.

## What it does

- **Pick a model** — OpenAI, Claude, or DeepSeek with your API key, or a local
  server (Ollama / MLX / LM Studio / vLLM). Paste the key, fetch the model list,
  choose which models to show. No typing model names.
- **Chat** — clean thread, multiple conversations, light/dark, markdown + code.
- **Projects** — give a project standing instructions and upload reference files;
  every chat in it uses them.
- **Remote access** — one click opens a private share link (with QR) so you can
  use it from your phone or send it to someone. The link carries a secret key and
  can be turned off any time.
- **Agent setup** — installs / updates the local agent runtime for your OS.

Everything is stored locally. Your API key lives in `~/.agentbay/config.json`
(chmod 600) and nothing is sent anywhere except the model provider you pick.

## Configuration

`~/.agentbay/config.json`

| key | meaning |
|---|---|
| `provider` | active provider — `openai` / `anthropic` / `deepseek` / `local` |
| `active_model` | the model new chats use |
| `providers.<id>.key` | that provider's API key |
| `providers.<id>.models` | the models you enabled |

## License

MIT — see [LICENSE](LICENSE).
