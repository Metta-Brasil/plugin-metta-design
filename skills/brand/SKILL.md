---
name: brand
description: Metta brand foundations — voice, colors, typography, logo, iconography and assets. Use for any Metta visual or copy work not covered by a more specific skill (internal UI, one-off graphics, reviewing whether something is on-brand, picking a logo/background variant, writing in Metta's voice), and as the base the slides, ads, landing-page and editorial skills build on.
---

# Metta brand

Shared brand files live at the plugin root, outside this skill:

- `${CLAUDE_SKILL_DIR}/../../brand/GUIDELINES.md` — full guidelines: hard rules, voice, visual foundations, iconography, font notes. **Read it before producing anything.**
- `${CLAUDE_SKILL_DIR}/../../brand/colors_and_type.css` — the only source of colors, type scale, radii, shadows and `@font-face`.
- `${CLAUDE_SKILL_DIR}/../../brand/assets/` — `logos/` (h/v, 6 colors), `symbols/` (Símbolo, 5 colors), `signatures/`, `backgrounds/` (approved plates).
- `${CLAUDE_SKILL_DIR}/../../brand/fonts/` — SF Pro Italic Variable.
- `${CLAUDE_SKILL_DIR}/../../brand/preview/` — specimen pages for colors, type, spacing, radii, components and brand marks.

## Which skill to use

| Request | Skill |
|---|---|
| Pitch deck, apresentação, slides | `slides` |
| Paid-social ad, criativo, feed/story, carrossel | `ads` |
| Landing page, página de captura, site | `landing-page` |
| Playbook, manifesto, long-form editorial page | `editorial` |
| Anything else (internal UI, single graphic, copy, brand review) | this skill |

## Working without a template

1. Read `GUIDELINES.md`.
2. Copy `colors_and_type.css` and only the assets you need next to the output file, and link them with relative paths — never reference the plugin cache path from the deliverable.
3. For internal tooling UI: same tokens, light surface (`--bg-1`), tighter type scale, Regular width throughout.
4. When reviewing existing work, check it against the Hard rules section first and report each violation with the rule it breaks.
