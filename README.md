# plugin-metta-design

Claude Code plugin with the Metta Design System: brand foundations plus ready-to-use kits for slides, paid-social ads, landing pages and editorial pages.

## Skills

| Skill | Use for |
|---|---|
| `/metta-design:brand` | Brand foundations — voice, colors, type, logo, assets. Base for everything else; also internal UI, one-off graphics, brand reviews. |
| `/metta-design:slides` | Pitch decks and presentations (1920×1080). |
| `/metta-design:ads` | Paid-social ads and carousels (feed 4:5, story 9:16). |
| `/metta-design:landing-page` | Landing and capture pages. |
| `/metta-design:editorial` | Playbooks, manifestos, long-form brand pages. |

Claude also picks the right skill automatically from the request (e.g. "monta um deck…", "cria 3 variações de anúncio…").

## Install

```
/plugin marketplace add Metta-Brasil/plugin-metta-design
/plugin install metta-design@metta-design
```

## Access & updates

- **Private repo.** Claude Code clones it with your own git credentials and does not prompt for a password. Before adding the marketplace, make sure `git clone https://github.com/Metta-Brasil/plugin-metta-design` works in your terminal — e.g. run `gh auth login && gh auth setup-git`, or have an SSH key loaded.
- **Updates.** Auto-update is off by default for third-party marketplaces. Pull the latest version with `/plugin marketplace update metta-design`, or enable auto-update for this marketplace in `/plugin`.
- The plugin has no pinned `version`, so every commit on `main` is a new version.

## Structure

```
.claude-plugin/
  plugin.json            # plugin manifest
  marketplace.json       # this repo is its own marketplace
brand/                   # shared by every skill
  GUIDELINES.md          # hard rules, voice, visual foundations, iconography
  colors_and_type.css    # design tokens + @font-face
  assets/                # logos, symbols, signatures, backgrounds
  fonts/                 # SF Pro Italic Variable
  preview/               # specimen pages
skills/
  brand/                 # SKILL.md
  slides/                # SKILL.md + template/ (deck-stage kit)
  ads/                   # SKILL.md + template/ + reference/ (layout guides)
  landing-page/          # SKILL.md + template/
  editorial/             # SKILL.md + template/
scripts/
  new-project.sh         # scaffold a project from a template with brand files
```

Templates reference `brand/` through relative paths (`../../../brand/`), so they open straight from a clone. `scripts/new-project.sh <kit> <dest>` copies a template plus the brand files into a standalone folder and rewrites those paths — the skills use it to start every project.

## Source

Content originates from [Metta-Brasil/metta-decks](https://github.com/Metta-Brasil/metta-decks).
