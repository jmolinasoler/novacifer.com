# ROADMAP — novacifer.com

> Source of truth for active projects and web content sync.
> Update this file first; then propagate changes to `index.md` and `projects.md`.
>
> **Last updated:** 2026-05-10

---

## Active Projects

### ⚙ Social Media Reviews
| Field | Value |
|---|---|
| Status | 🟢 Launching |
| Cadence | 1–2 posts/week (LinkedIn + Twitter/X `@emerjux`) |
| Focus | Cloud/Hosting (Hetzner, OVH, Scaleway), Databases (PostgreSQL, SurrealDB), Dev Tools, Privacy, AI/ML |
| Format | Deep-dive threads, polls, code snippets |
| Rules | No sponsorships · Full benchmark transparency · No hype |
| Build Log | [W17-post1](https://github.com/jmolinasoler/build-log/blob/master/2026/W17-post1-SocialMediaReviews.md) |

**Next steps:**
- [ ] Publish first full review post
- [ ] Link first published thread from `projects.md`

**Web sync:** `index.md` ✅ · `projects.md` ✅

---

### ⚙ Crypto Compliance Stack — MiCAMap
| Field | Value |
|---|---|
| Status | 🟡 In Development |
| Live artefact | [micadash.novacifer.com](https://micadash.novacifer.com) |
| Concept | MiCA + EU crypto regulation tracked as software dependencies |
| Stack | TBD |

**Next steps:**
- [ ] Define data model for MiCA article tracking
- [ ] Implement diff/alert mechanism for regulation changes
- [ ] Document architecture in build-log
- [ ] Update `projects.md` status dot when shipped (amber → green)

**Web sync:** `index.md` ✅ · `projects.md` ✅

---

### ⚙ Agentic AI & Observability Lab
| Field | Value |
|---|---|
| Status | 🟢 Active |
| Stack | Langfuse (self-hosted), OpenRouter, Node.js |
| Scope | Prompt tracing · Cost tracking · Agent loop instrumentation · Failure analysis |
| Output | Internal notes + public write-ups on findings |

**Next steps:**
- [ ] Publish first observability write-up (dev.to / build-log)
- [ ] Link write-up from `projects.md` once published

**Web sync:** `index.md` ✅ · `projects.md` ✅

> **Note (2026-05-03):** Langfuse client-side tracing integration was removed from novacifer.com itself — JS bundle, layout script tag, and `LANGFUSE_TRACING.md` deleted. Lab still runs server-side.

---

## Web Update Queue

Changes needed in the repo. Work top-down — highest impact first.

| Priority | File | Change | Effort |
|---|---|---|---|
| 🔴 High | `assets/images/` | Create `og-image.png` (1200×630 PNG) for OG/Twitter Card — currently uses `favicon.svg` | Low |
| 🔴 High | `_layouts/default.html` | Update `og:image` meta tag to point to `og-image.png` once created | Low |
| 🟡 Med | `.github-workflows-pending/` | `git rm -r .github-workflows-pending/` — stale archived workflow dir | Trivial |
| 🟡 Med | `assets/css/main.css` | Add `@media (prefers-reduced-motion: reduce)` block — disable gear spin + typewriter animations | Low |
| 🟢 Low | `_layouts/default.html` | Verify nav `active` class with trailing slash normalisation across Jekyll versions | Low |

---

## Project Archive

Closed experiments — listed here for context, not for web updates (already reflected in `projects.md`).

| Project | Outcome | Closed |
|---|---|---|
| Algorithmic Grid Trading | Arbitrum +30.9% · Base +54.3% · Linea +111.0% | Q1 2026 |
| Persistent AI Agent Phase 2 | Terminated — cost model unsustainable (€450 API spend) | April 2026 |
| Sovereign Node Infrastructure | Decommissioned (M900 + Hetzner nodes) | 2026 |
| Hyperliquid Perp Engine | Stopped out −25% — swallowed exceptions + broken alerts | March 2026 |
| Memecoin Trading Experiment | Abandoned — 14.3% win rate, −$18.2 expectancy | February 2026 |
| MiCA Compliance Certificate | ✅ Certificate obtained | March 2026 |
| Google Coral Edge TPU / Python 3.12 | ✅ Working via `ai-edge-litert` | 2025 |

---

## Repo / Infra Backlog

- [ ] `og-image.png` — blocking Twitter/LinkedIn link previews
- [ ] `git rm -r .github-workflows-pending/` — cleanup dead dir
- [ ] `prefers-reduced-motion` CSS — accessibility gap
- [ ] Nav active state edge case — trailing slash normalisation

---

## Workflow

1. Start new project → add entry under **Active Projects**
2. Status change → update status dot in this file + mirror to `projects.md` + `index.md`
3. Project ends → move to **Project Archive**, remove from `index.md` active section, update `projects.md` status dot to amber
4. Web change needed → add row to **Web Update Queue**, mark done when merged
