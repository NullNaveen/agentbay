# 🧪 AgentBay — Experimental Features

> These features are **experimental**, **off by default**, and only appear when the
> conditions below are met. They can be slow, cost extra, and behave unpredictably.
> We ship them so you can play with them and tell us what's worth keeping.

---

## Two agents, one place

AgentBay can drive **two** on-device agents — **Hermes** and **OpenClaw** — and these
features let them work *together* instead of one at a time. The idea comes straight
from how two developers collaborate: agree on a plan, split the work, talk to each
other, review each other's changes, and decide together when it's done.

There are two modes. **Both require both agents installed** (Hermes *and* OpenClaw),
and both are **off until you turn them on** in **Settings → Agent → Two agents
together**. Once on, type **`/together`** in the composer to open the panel.

### Mode 1 — Compare (side by side)

The simplest one. You ask a question once; **both agents answer the same prompt at the
same time**, in two columns. You read both and decide which you like. They don't talk
to each other and they don't share a plan — it's two independent runs, side by side.

Good for: "which agent is better at this?", picking a model, sanity-checking an answer.

> Heads-up: both agents have full tool access on the **same files**. Since they run at
> the same time in this mode, prefer it for *questions*, not for *file edits*.

### Mode 2 — Collaborate

The big one. The two agents work the **same task together**:

- One **shared goal** they both see.
- They **take turns** — only one agent works at a time (so they never edit the same
  file at the same instant). The other waits, like passing the keyboard.
- After each turn, the working agent **hands off to the other** with a short message
  ("here's what I did, your turn"). You see this **conversation between the agents**
  in the middle.
- They **review each other** — the partner can continue the work or critique it.
- It ends when an agent says the task is **`DONE`** and the other agent agrees, or it
  hits the **round limit**, the conversation starts repeating, or you press **Stop**.

You watch all of it live: the current agent's stream as it works, their conversation to
each other, the shared plan, and a round counter.

---

## How it works under the hood (short version)

A small **coordinator** (plain code, not a third AI) runs the loop:

1. It assigns a role for the round — the first agent **leads** (proposes a short plan and
   starts); after that each turn **reviews the partner's work and continues** it.
2. It runs **one agent's turn to completion** before starting the other's — this is the
   "one keyboard at a time" rule, and it's what keeps them from clobbering each other on
   your filesystem.
3. The working agent's message is **fed to the other agent as its next prompt**, along
   with the shared goal. That's how they "talk."
4. The loop stops on a `DONE` agreement, the **round limit** (default 8), a
   repetition guard, or your **Stop** button — Stop cancels the in-flight turn at once.

Each agent keeps its own memory across the rounds; the handoff message carries the other
agent's news.

---

## How to enable

1. Install **both** Hermes and OpenClaw (the features stay hidden with only one).
2. Open **Settings → Agent → Two agents together**.
3. Turn on **Compare side by side** (Mode 1) and/or **Collaborate on one task** (Mode 2).
4. (Optional) set the **round limit** for collaborate mode.
5. Type **`/together`** in the composer. Pick the mode, type your task, press **Start**.

Not available on the shared EC2 deployment (that uses the gateway, not local agents).

---

## Status: experimental — what to expect

- **Costs roughly 2×** (or more): every round is two full agent turns. A long task can be
  a dozen-plus turns. On **local models (Ollama)** this can be slow.
- **Not automatically smarter.** Research on multi-agent LLM systems consistently finds
  that two agents often *don't* beat the better single agent — sometimes they do worse
  ([MAST: *Why Do Multi-Agent LLM Systems Fail?*](https://arxiv.org/pdf/2503.13657);
  [*Multi-Agent Teams Hold Experts Back*](https://arxiv.org/html/2602.01011v1)). Treat
  collaborate mode as "interesting to watch / occasionally the reviewer catches a real
  bug," not as a guaranteed quality upgrade.
- **Shared filesystem.** Turn-taking stops them editing at the *same instant*, but across
  rounds they can still overwrite each other's work. Best on tasks with a natural split
  ("you do the backend, I do the UI").
- **It can loop or drift.** That's why there's a hard round limit, a repetition guard, and
  a Stop button. Use them.

### When NOT to use it
- Quick/simple tasks — just use one agent.
- Destructive or irreversible file changes.
- Slow local-only models.
- Tasks you can't cleanly split into two parts.

---

## Tell us what you think

This is a sandbox and your feedback steers it. Does collaborate mode actually help on your
work? Is the view clear or confusing? What roles or modes do you wish existed — a dedicated
reviewer? a driver/navigator pair? three agents? letting *you* be one of the collaborators?
Found a bug or have a correction?

**Open an issue — feature suggestions and corrections very welcome:**
👉 https://github.com/NullNaveen/agentbay/issues

*Built on the design notes in this repo's history — grounded in how real pairs of
developers coordinate, and in the public multi-agent research linked above.*
