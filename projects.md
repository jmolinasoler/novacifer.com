---
layout: default
title: Projects
description: Active experiments and ventures from the Novacifer workshop.
---

# The Workshop

*An inventory of active contraptions, ongoing experiments, and completed apparatus.*

<div class="section-divider">⚙ Active Experiments ⚙</div>

### ⚙ Autonomous Trading Engines
Grid-based trading machinery and perpetual futures operating across four networks. Three grid bots (Arbitrum, Base, Linea) execute ETH/USDC strategies every five minutes. A fourth engine runs a leveraged ETH short on Hyperliquid, harvesting funding rates and hedging directional exposure.

- **Arbitrum** — Grid, $14/trade, 8 levels, 2.5% spacing
- **Base** — Grid, $5/trade, 8 levels, 2.5% spacing
- **Linea** — Grid, $8/trade, 8 levels, 2.5% spacing
- **Hyperliquid** — ETH Perp Short, 2× leverage, funding-rate capture

Powered by Python. No human hand at the throttle.

**Status:** <span class="status-dot green" style="display:inline-block"></span> Running in production

---

### ⚙ Persistent AI Agent (Phase 1 — Closed)
An artificial intelligence anchored to the M900 vessel — a Lenovo ThinkCentre Tiny running Ubuntu 24.04. Maintains memory across sessions, monitors systems, dispatches alerts via Electric Telegraph (Telegram), and manages infrastructure autonomously.

Phase 1 (AI-Assisted Local Infrastructure + Algorithmic Grid Trading) closed March 2026. Lessons documented. The agent continues operating.

**Status:** <span class="status-dot green" style="display:inline-block"></span> Online

---

### ⚙ Sovereign Node Infrastructure
- **Bitcoin Core 27.2** — pruned node, mainnet, self-hosted
- **Helios (a16z)** — Ethereum light client, trustless RPC verification, zero disk footprint

**Status:** <span class="status-dot green" style="display:inline-block"></span> Synchronised

---

### ⚙ MiCA Compliance — Certificate Completed
Markets in Crypto-Assets Regulation (MiCA) certificate obtained March 2026. Mapping the technical and regulatory intersection: what MiCA demands from infrastructure engineers, not just lawyers.

Follow-on work: AI Compliance Stack — tooling to monitor regulatory change across EU digital asset frameworks.

**Status:** <span class="status-dot green" style="display:inline-block"></span> Completed

---

### ⚙ Google Coral Edge TPU — Python 3.12
Official documentation declares this impossible. Official documentation is wrong. The Edge TPU delegate runs on Python 3.12 via `ai-edge-litert`, Google's 2024 successor to the abandoned `tflite-runtime`.

**Status:** <span class="status-dot amber" style="display:inline-block"></span> Validated — hardware slot conflict under investigation  
**Documentation:** [Full write-up →](https://github.com/jmolinasoler/build-log/blob/master/projects/coral-edge-tpu.md)

<div class="section-divider">⚙ Build Log ⚙</div>

The complete expedition log is maintained at **[github.com/jmolinasoler/build-log →](https://github.com/jmolinasoler/build-log)**

Published dispatches: **[dev.to/jmolinasoler →](https://dev.to/jmolinasoler)**

Raw entries. Real outcomes. No polish.
