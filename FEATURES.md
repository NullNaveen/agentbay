# 🐚 The AgentBay Guide

Everything AgentBay can do — including the quiet stuff hidden in Settings.
Written so a non-technical reader can follow along; skip to any section.

- [The basics](#the-basics)
- [Models: bring a key, or borrow the agent's](#models-bring-a-key-or-borrow-the-agents)
- [Chatting with a real agent](#chatting-with-a-real-agent)
- [Everyday features](#everyday-features)
- [The Dashboard](#the-dashboard) *(off by default)*
- [Scheduled tasks](#scheduled-tasks) *(off by default)*
- [Password lock](#password-lock)
- [Use it from your phone](#use-it-from-your-phone)
- [Every setting, explained](#every-setting-explained)
- [Using other agents (OpenClaw…)](#using-other-agents)
- [Troubleshooting](#troubleshooting)
- [Config file reference](#config-file-reference)
- [Requesting features](#requesting-features)

---

## The basics

AgentBay is one page: chats on the left, conversation in the middle, a model
picker up top, Settings behind the gear (top-right). Start typing and press
Enter. That's genuinely all you need to know to use it.

Everything is stored **on your machine** — chats, keys, settings. Nothing is
sent anywhere except to the model/agent you picked.

## Models: bring a key, or borrow the agent's

**Settings → Providers** is where models come from. Two ways:

1. **Paste a key** — pick DeepSeek / OpenAI / Claude / Gemini / Groq /
   OpenRouter / Mistral, paste its API key, press *Fetch models*, tick the ones
   you want. Only what you tick appears in the picker — no 300-model noise.
   Local servers (Ollama, LM Studio, MLX) work the same way, no key needed.
2. **From your agent — no key needed.** If your local agent is already signed
   in somewhere (Nous Portal, GitHub Copilot, AWS Bedrock…), those providers are
   listed in a separate section. Press **Add** and their models appear in your
   picker, running through the agent's own credentials. Nothing to paste.

Either way, every model you pick runs **through your agent** when one is
installed — so it can use tools, not just talk.

## Chatting with a real agent

When a local agent (Hermes) is installed, AgentBay isn't a chatbot wrapper —
your messages go to the actual agent, which can run terminal commands, read and
edit files, and browse the web. While it works you'll see:

- **Thinking** — the model's reasoning, in a collapsible panel *(on by default)*
- **Tool cards** — each thing it does (run a command, read a file…) as a live
  card with a spinner → ✓, showing the command and its output *(on by default)*
- **Task plan** — when the agent plans multi-step work, a live checklist with
  items ticking off as it goes
- **Stop** — the ■ button genuinely stops the agent mid-task (it kills the
  running work, not just the animation)

Quick sanity check that the agent is real: ask *"run whoami"*. A username back
means you're talking to a machine, not a parrot.

## Everyday features

| Feature | How |
|---|---|
| **Images in** | Paste a screenshot, drag-drop, or the **+** button. Vision models see the actual image. |
| **Files in** | Attach a text file — its contents ride along with your message. |
| **Edit & resend** | Hover your own message → pencil. Fixing a typo re-runs the conversation from there. |
| **Regenerate** | The circular arrow under a reply re-asks the same question. |
| **Read aloud** | The speaker icon under a reply speaks it. |
| **Slash commands** | Type `/` in the composer: `/new`, `/model`, `/search`, `/settings`, `/shortcuts`. |
| **Search** | `⌘K` (or the sidebar) searches every chat and message. |
| **Notes** | A tiny notebook in the sidebar for things you want to keep. |
| **Projects** | Give a project standing instructions + reference files; every chat inside uses them. |
| **Folders, pins, tags** | Right-click / the ⋯ menu on any chat. |
| **Keyboard shortcuts** | `⌘K` search · `⌘N` new chat · `⌘B` sidebar · `⌘/` shortcuts list. |
| **Suggested follow-ups** | After each reply, three things worth asking next *(off by default — Settings → Interface)*. |
| **Export / import** | Settings → Data Controls — your chats as a JSON file, in or out. |

## The Dashboard

*Off by default — turn it on in **Settings → Interface → Dashboard**, then it
appears in the sidebar.*

One page of charts that answers "what's been happening here?" at a glance —
designed so each chart explains itself:

- **The 24-hour clock** — each hand is an hour of your day; longer = busier.
  The center names your busiest hour.
- **Activity rings** — each ring is a model; how far it reaches around the
  circle is its share of your replies.
- **The flower** — each petal is a kind of work the agent did (ran commands,
  read files, browsed…). Bigger petal = happened more.
- **Reply speed** — every dot is one reply; the dotted line is your typical wait.
- **The conversation balance** — your words vs the agent's.
- **Memory dial** — how full the AI's working memory gets in a typical reply.
- **The calendar** — your last 10 weeks; deeper squares are busier days.
- **Biggest chats** — your longest conversations, ranked.
- **Your agent, lifetime** *(only with a local Hermes)* — every session it has
  ever run across the terminal, editors, schedules and messengers: messages,
  tools run, tokens processed, estimated spend, and one bar showing where its
  work comes from.

## Scheduled tasks

*Off by default — turn it on in **Settings → Agent → Scheduled tasks**.*

Have the agent run a prompt on a timer: a morning briefing, an hourly check,
a weekly cleanup. Fill three boxes — a name, when (`every 30m`, `daily 09:00`),
and what to do — and press **Schedule task**. Pause, resume or delete any job
with one click.

Tasks live in the **agent's own scheduler**, so they keep running even when
AgentBay is closed.

## Password lock

*Off by default — **Settings → General → Password lock**.*

A real login wall (not cosmetic): set a password and every visitor must enter
it before AgentBay loads. Use it whenever you open AgentBay to your network or
share a link beyond people you trust.

- The password is stored only as a salted hash, on your machine.
- Sessions last 7 days; **Log out** is right next to the toggle.
- Forgot it? Delete the `auth` entry from `~/.agentbay/config.json` on the
  machine that runs AgentBay, and it unlocks.

## Use it from your phone

**Settings → Remote access** creates a private share link (with a QR code to
scan). The link carries a secret key — only people with the exact link get in —
and you can turn it off any time. Pairs well with the password lock.

## Every setting, explained

The quiet switches, and what they're set to out of the box:

| Setting | Where | Default | What it does |
|---|---|---|---|
| Theme & accent color | General | Light · Sandal | Hover an accent stone to preview the whole app. |
| Password lock | General | off | Real login wall — see above. |
| Desktop shortcut | General | — | Re-create the AgentBay icon on your Desktop / app menu. |
| Show thinking | Interface | **on** | The model's reasoning above each reply. |
| Show tool calls | Interface | **on** | Live cards for every tool the agent uses. |
| Context meter | Interface | off | A small `15k / 1000k` badge under replies — how much of the AI's memory window that conversation is using. For the curious. |
| Dashboard | Interface | off | The charts page in the sidebar. |
| Suggested follow-ups | Interface | off | Three tappable next questions after each reply. |
| Agents (personas) | Interface | off | Named personalities with their own system prompts. |
| Timestamps | Interface | off | A time label on every message. |
| Font size / avatars / LaTeX / code highlighting / auto-scroll / reduce motion | Interface | sensible | Cosmetic — try them. |
| Default & fallback model | Interface | first · none | What new chats use; the fallback retries a failed reply once with another model. |
| Personalization | Personalization | empty | A system prompt quietly added to every chat ("be brief", "answer in Tamil"…). |
| Reasoning effort | Agent | default | How hard Hermes thinks (minimal → xhigh). This sets the agent's **global** default — it applies everywhere Hermes runs. |
| Scheduled tasks | Agent | off | The timer jobs panel — see above. |
| Browser control | Agent | — | Installs the browser-use skill so the agent can drive a real browser (click, fill forms, screenshot). |
| Your agents | Agent | auto | If you run several Hermes profiles, pick which one chats. |
| Integrations | Integrations | — | Connect the agent to WhatsApp, Telegram, Slack, Discord, Google Chat… (these configure the agent's gateway). |
| Remote access | Remote access | off | The private share link + QR. |
| Data controls | Data Controls | — | Export, import, or delete every chat. |

## Using other agents

AgentBay speaks **ACP** (the agent protocol) to both **Hermes** (`hermes acp`)
and **OpenClaw** (`openclaw acp`). That means OpenClaw streams exactly like
Hermes — live reply, the agent's thinking, rich tool cards, real Stop, context
usage — not a one-shot reply.

When both are installed, a **Settings → Agent → Active agent** switch picks
which one powers your chats; the model picker, brand glyph (Hermes caduceus vs
the OpenClaw crab), and even the *thinking animation* change to match. The
**Scheduled tasks** panel is agent-aware too — it reads/writes whichever agent's
cron jobs.

> Hermes and OpenClaw are both tested. A *different* agent isn't — if something
> breaks, [open an issue](https://github.com/NullNaveen/agentbay/issues).

## Troubleshooting

**The agent replies like a plain chatbot (no terminal/tools).**
AgentBay isn't reaching a running agent. Check Settings → Agent says Hermes is
installed, then start its gateway:
```bash
hermes gateway start
```
Ask *"run whoami"* — a real username means you're live.

**Windows: the Hermes installer ends with `'charmap' codec can't decode byte…`**
Windows' default text encoding chokes on the last step. Force UTF-8 and re-run
just that step:
```powershell
$env:PYTHONUTF8 = "1"
hermes postinstall
setx PYTHONUTF8 1      # make it permanent (open a new terminal after)
```

**Windows: `python` opens the Microsoft Store.**
That's a placeholder, not Python. Install from
[python.org](https://www.python.org/downloads/) with **"Add python.exe to PATH"**
ticked — or let AgentBay's installer do it (it uses `winget`).

**A model errors every time.**
Open Settings → Providers → that provider, re-paste the key, *Fetch models*.
If fetching works but chat fails, the key may lack credit. The **fallback
model** setting can paper over one-off failures.

**I'm locked out (password).**
Delete the `auth` entry from `~/.agentbay/config.json`
(Windows: `%USERPROFILE%\.agentbay\config.json`) and reload.

## Config file reference

`~/.agentbay/config.json` — owned by you, chmod 600:

| key | meaning |
|---|---|
| `provider` | active provider — `deepseek` / `openai` / `anthropic` / `local` … |
| `active_model` | the model new chats use |
| `providers.<id>.key` | that provider's API key |
| `providers.<id>.models` | the models you enabled |
| `providers.<id>.user_added` | shows an agent-backed provider in the picker |
| `auth` | the password lock (hash + salt — delete the entry to reset) |
| `agent` | force `hermes` or `openclaw` (default: auto) |

## Requesting features

This project grows from real requests. If you need something — a feature, an
integration, a fix, even "this confused me":

- **[Open a GitHub issue](https://github.com/NullNaveen/agentbay/issues)** — a
  one-line description is enough.
- Or just tell me directly, if you know where to find me.

*Built as a minimal UI for Hermes — because powerful agents deserve a door
anyone can walk through.* 🐚
