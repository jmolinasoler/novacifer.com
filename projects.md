---
layout: default
title: Projects
description: Active experiments and ventures from the Novacifer workshop.
---

# The Workshop

*An inventory of active contraptions, ongoing experiments, and completed apparatus.*

<div class="section-divider">⚙ Active Experiments ⚙</div>

### ⚙ Autonomous Trading Engines
Grid-based trading machinery operating across three networks. Three grid bots (Arbitrum, Base, Linea) execute ETH/USDC strategies every five minutes.

- **Arbitrum** — Grid, $14/trade, 8 levels, 2.5% spacing — Q1 return: +30.9%
- **Base** — Grid, $5/trade, 8 levels, 2.5% spacing — Q1 return: +54.3%
- **Linea** — Grid, $8/trade, 8 levels, 2.5% spacing — Q1 return: +111.0%

*Hyperliquid perp engine closed Q1 2026 after stop-out.*

Powered by Python. No human hand at the throttle.

**Status:** <span class="status-dot green" style="display:inline-block"></span> Running in production

---

### ⚙ Persistent AI Agent — Phase 2
An artificial intelligence anchored to the M900 vessel — a Lenovo ThinkCentre Tiny running Ubuntu 24.04. Maintains memory across sessions, monitors systems, dispatches alerts via Electric Telegraph (Telegram), and manages infrastructure autonomously.

Phase 1 (AI-Assisted Local Infrastructure + Algorithmic Grid Trading) closed March 2026. Lessons documented. Phase 2 in progress: structured AI × blockchain interaction tests, monthly build log, and no new integrations unless they solve a real problem.

**Status:** <span class="status-dot green" style="display:inline-block"></span> Online

---

### ⚙ Sovereign Node Infrastructure
Self-hosted verification layer across two machines:

- **M900 Tiny (local)** — Bitcoin Core 27.2, pruned mainnet node + Helios Ethereum light client (trustless RPC, zero disk footprint)
- **Hetzner (remote)** — Public-facing workloads and new experiments, isolated from bot operations

Trust no external oracle when you can verify the ledger yourself.

**Status:** <span class="status-dot green" style="display:inline-block"></span> Synchronised

---

### ⚙ Aether Dynamo
Software update monitoring for Web3 protocols and related infrastructure. Designed to surface relevant changes — protocol upgrades, client releases, regulatory shifts — before they become incidents.

Architecture under design. First code artifact pending.

**Status:** <span class="status-dot amber" style="display:inline-block"></span> In design

---

<div class="section-divider">⚙ Completed ⚙</div>

### ✓ MiCA Compliance Certificate
Markets in Crypto-Assets Regulation (MiCA) certificate obtained March 2026. Mapping the technical and regulatory intersection: what MiCA demands from infrastructure engineers, not just lawyers.

Follow-on: **AI Compliance Stack** — monitor regulatory change across EU digital asset frameworks. Treat compliance requirements like software dependencies: automated diff, structured alerts, routed to the relevant operator. First prototype targeting Q2 2026: ESMA RSS feed → Telegram alert (simplest path, ~3h work, validate before architecting).

**Status:** <span class="status-dot green" style="display:inline-block"></span> Certificate completed — AI Compliance Stack: prototype in progress

---

### ✓ Google Coral Edge TPU — Python 3.12
Official documentation declares this impossible. Official documentation is wrong. The Edge TPU delegate runs on Python 3.12 via `ai-edge-litert`, Google's 2024 successor to the abandoned `tflite-runtime`.

**Status:** <span class="status-dot amber" style="display:inline-block"></span> Validated — hardware slot conflict under investigation  
**Documentation:** [Full write-up →](https://github.com/jmolinasoler/build-log/blob/master/projects/coral-edge-tpu.md)

---

### ✓ OpenClaw — M900
A live experiment in AI agency. OpenClaw was deployed aboard a Lenovo ThinkCentre Mini M900 to answer a direct question: what can an autonomous AI agent actually do, and where does it break?

Tasks were assigned. Behaviour was observed. Errors were catalogued. The agent showed genuine promise — until the economics revealed themselves. The cost model was not flat: as the agent accumulated memory, its appetite for API tokens grew in kind. More context, more model calls, more cost. Not a linear relationship — a spiral. The allocated funds did not survive it.

The M900 has been powered down. The ledger is being reviewed.

A full post-mortem is being drafted — what was built, what the instruments revealed, and what the spiral looked like from the inside.

**Status:** <span class="status-dot amber" style="display:inline-block"></span> Shut down — post-mortem pending

---

<div class="section-divider">⚙ Build Log ⚙</div>

The complete expedition log is maintained at **[github.com/jmolinasoler/build-log →](https://github.com/jmolinasoler/build-log)**

Published dispatches: **[dev.to/jmolinasoler →](https://dev.to/jmolinasoler)**

Raw entries. Real outcomes. No polish.
