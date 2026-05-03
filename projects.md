---
layout: default
title: Projects
description: Active experiments and ventures from the Novacifer workshop.
---

# The Workshop

*An inventory of active contraptions, ongoing experiments, and completed apparatus.*

<div class="section-divider">⚙ Active Experiments ⚙</div>

### ⚙ Social Media Reviews
Technical analysis of tools and technologies through a European lens. Objective, rigorous evaluations focusing on performance, GDPR compliance, data sovereignty, and real-world usability. Insights shared publicly on LinkedIn and Twitter/X to foster discussion and knowledge-sharing among European developers.

**Focus:** Cloud/Hosting (Hetzner, OVH, Scaleway), Databases (PostgreSQL, SurrealDB), Dev Tools, Privacy, AI/ML
**Format:** Deep-dive threads, polls, code snippets — 1-2 posts/week
**Rules:** No sponsorships, full transparency on benchmarks, corrections welcomed, no hype-driven content

**Status:** <span class="status-dot green" style="display:inline-block"></span> Launching

---

### ⚙ Crypto Compliance Stack — MiCAMap
Treating EU digital asset regulation as infrastructure. Compliance requirements monitored like software dependencies: track changes, surface diffs, route alerts to the relevant operator before the requirement becomes an incident.

First live artefact: **[MiCAMap →](https://micadash.novacifer.com)** — an explorer for navigating MiCA and the evolving EU crypto regulatory landscape.

**Status:** <span class="status-dot amber" style="display:inline-block"></span> In development

---

### ⚙ Agentic AI & Observability Lab
Hands-on exploration of agentic AI patterns through a self-hosted Langfuse instance connected to OpenRouter. The goal is twofold: understand how LLM observability and tracing work in practice (traces, spans, scoring, prompt management), and study how autonomous AI agents reason, chain actions, and fail — by building small agent loops and watching them under the microscope.

**Stack:** Langfuse (self-hosted), OpenRouter, Node.js
**Scope:** Prompt tracing, cost tracking, agent loop instrumentation, failure analysis
**Output:** Internal notes and public write-ups on findings

**Status:** <span class="status-dot green" style="display:inline-block"></span> Active

---

<div class="section-divider">⚙ Completed ⚙</div>

### ✓ Algorithmic Grid Trading
Three ETH/USDC grid bots that operated across EVM L2s (Arbitrum, Base, Linea) plus a Solana bot. Phase 1 ran February-March 2026. Hyperliquid perp engine closed Q1 2026 after stop-loss failure.

- **Arbitrum** — Grid, 8 levels — Q1 return: +30.9%
- **Base** — Grid, 8 levels — Q1 return: +54.3%
- **Linea** — Grid, 8 levels — Q1 return: +111.0%

*Capital from closed positions was redeployed to Arbitrum grid (+47% injection).*

Powered by Python and system cron.

**Status:** <span class="status-dot amber" style="display:inline-block"></span> Shut down — Q1 2026

---

### ✓ Persistent AI Agent — Phase 2
An artificial intelligence anchored to the M900 vessel — a Lenovo ThinkCentre Tiny running Ubuntu 24.04. Maintained memory across sessions, monitored systems, dispatched Telegram alerts, and managed infrastructure.

Phase 1 (AI-Assisted Local Infrastructure + Algorithmic Grid Trading) closed March 2026. Phase 2 (structured AI × blockchain interaction tests) terminated April 14, 2026. Cost model unsustainable: €450 spent on AI APIs, with €150 wasted on documenting code that never shipped.

**Key outcomes:** The quiet infrastructure (grid bots, cron jobs) produced value silently. The visible parts (AI-generated documentation) cost more than they produced.

Full post-mortem: [Pulling the plug →](https://github.com/jmolinasoler/build-log/blob/master/2026/W16-post1.md) and [The m900 Psychological Evaluation →](https://github.com/jmolinasoler/build-log/blob/master/2026/W16-post2.md)

**Status:** <span class="status-dot amber" style="display:inline-block"></span> Shut down — April 2026

---

### ✓ Sovereign Node Infrastructure
Self-hosted verification layer that operated across two machines:

- **M900 Tiny (local)** — Bitcoin Core 27.2, pruned mainnet node + Helios Ethereum light client (trustless RPC, zero disk footprint)
- **Hetzner (remote)** — Public-facing workloads and new experiments, isolated from bot operations

**Status:** <span class="status-dot amber" style="display:inline-block"></span> Decommissioned

---

### ✓ Hyperliquid Perp Engine
ETH perpetual short bot on Hyperliquid. Closed Q1 2026 after a stop-loss mechanism failure allowed losses to compound to ~−25% before manual intervention. Root causes: swallowed exceptions, false state updates, and broken Telegram notifications. Capital was recovered and redeployed to the Arbitrum grid bot.

Full incident analysis: [When "closed" doesn't mean closed →](https://github.com/jmolinasoler/build-log/blob/master/2026/W12-post5.md)

**Status:** <span class="status-dot amber" style="display:inline-block"></span> Stopped out — March 2026

---

### ✓ Memecoin Trading Experiment
Early Solana-based strategy with a 14.3% win rate and −$18.2 expectancy. Shut down within days as a clear failure. Pivoted to the more successful grid trading approach.

**Status:** <span class="status-dot amber" style="display:inline-block"></span> Abandoned — February 2026

---

### ✓ MiCA Compliance Certificate
Markets in Crypto-Assets Regulation (MiCA) certificate obtained March 2026. Mapping the technical and regulatory intersection: what MiCA demands from infrastructure engineers, not just lawyers.

**Status:** <span class="status-dot green" style="display:inline-block"></span> Certificate completed

---

### ✓ Google Coral Edge TPU — Python 3.12
Official documentation declares this impossible. Official documentation is wrong. The Edge TPU delegate runs on Python 3.12 via `ai-edge-litert`, Google's 2024 successor to the abandoned `tflite-runtime`.

**Status:** <span class="status-dot green" style="display:inline-block"></span> Done
**Documentation:** [Full write-up →](https://github.com/jmolinasoler/build-log/blob/master/projects/coral-edge-tpu.md)

---

<div class="section-divider">⚙ Build Log ⚙</div>

The complete expedition log is maintained at **[github.com/jmolinasoler/build-log →](https://github.com/jmolinasoler/build-log)**

Published dispatches and technical articles: **[dev.to/jmolinasoler →](https://dev.to/jmolinasoler)**

Some m900 entries were also cross-posted to dev.to during the AI agent experiment (W09-W16 2026).

Raw entries. Real outcomes. No polish.
