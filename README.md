# novacifer.com

Personal site for [www.novacifer.com](https://www.novacifer.com). Built with Jekyll, deployed to GitHub Pages via GitHub Actions.

## Stack

| Layer | Tech |
|---|---|
| Generator | Jekyll 4.3 |
| Theme | Custom steampunk — brass/parchment palette |
| Fonts | Cinzel, IM Fell English, Share Tech Mono (Google Fonts) |
| Hosting | GitHub Pages |
| CI/CD | `.github/workflows/deploy.yml` — triggers on push to `master` |
| Domain | `www.novacifer.com` via `CNAME` |

## Project structure

```
novacifer.com/
├── _config.yml              # Site config, navigation, Kramdown settings
├── _layouts/
│   └── default.html         # Single layout — all pages use this
├── assets/
│   ├── css/main.css         # All styles — steampunk theme, CSS vars, animations
│   ├── js/main.js           # Gear hover animation, typewriter effect, flicker
│   └── images/favicon.svg   # SVG gear favicon
├── index.md                 # Home page
├── projects.md              # Projects/Workshop page
├── contact.md               # Contact page
├── Gemfile                  # jekyll ~> 4.3, jekyll-feed, jekyll-sitemap, webrick
├── CNAME                    # www.novacifer.com
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Pages deploy — Ruby 3.2
```

## Local development

```bash
# Install deps (once)
bundle install

# Serve with live reload
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build
```

Site available at `http://localhost:4000`.

## Adding / editing content

### New page
Create a `.md` file at root with frontmatter:

```yaml
---
layout: default
title: My Page
description: Used for <meta name="description"> and OG tags.
---
```

Add to `navigation` in `_config.yml` if it needs a nav link.

### Updating project status
Edit `projects.md`. Status dots use inline HTML — supported via Kramdown GFM mode (`_config.yml`):

```html
**Status:** <span class="status-dot green" style="display:inline-block"></span> Running
**Status:** <span class="status-dot amber" style="display:inline-block"></span> In design
```

### Navigation
Defined in `_config.yml` under `navigation:`. Order in the array = order in the nav bar.

## CSS architecture

All styles in `assets/css/main.css`. CSS custom properties defined in `:root`:

```css
--brass / --brass-light / --brass-dark    /* primary palette */
--copper / --iron / --iron-light           /* secondary metals */
--parchment / --parchment-dark             /* text/background */
--font-serif / --font-mono / --font-display
```

Key components: `.site-header`, `.content-panel`, `.gauges`, `.status-dot`, `.section-divider`, `.gear-bg`, `.steam-container`.

## Deploy

Push to `master` → GitHub Actions builds and deploys automatically.

```bash
git add .
git commit -m "your message"
git push
```

Workflow: `.github/workflows/deploy.yml` (Ruby 3.2). The `.github-workflows-pending/` directory contains archived/inactive workflow files — GitHub ignores it.

## Meta / SEO

Handled in `_layouts/default.html`:
- `<meta name="description">` — from `page.description`, fallback to `site.description`
- Canonical URL
- Open Graph tags (title, description, url, image)
- Twitter Card (`@emerjux`)
- RSS autodiscovery (`/feed.xml` via `jekyll-feed`)

Per-page description: add `description:` to the page frontmatter.

## Known issues / backlog

- `og:image` uses `favicon.svg` — Twitter/LinkedIn prefer PNG 1200×630. Create `assets/images/og-image.png` and update `_layouts/default.html` when ready.
- `.github-workflows-pending/` can be fully removed: `git rm -r .github-workflows-pending/`
- Nav active state: verify trailing slash normalisation across Jekyll versions if `active` class misbehaves.
