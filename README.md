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

It starts a local server and opens `http://127.0.0.1:8700`.

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
