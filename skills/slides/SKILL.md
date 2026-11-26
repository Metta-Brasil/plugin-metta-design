---
name: slides
description: Build Metta-branded pitch decks and presentations (1920×1080) — apresentação, deck, slides comerciais, pitch. Ships a React slide kit on deck-stage with keyboard navigation, scaling and print-to-PDF.
---

# Metta slides

## Start

1. Read `${CLAUDE_SKILL_DIR}/../../brand/GUIDELINES.md` (hard rules, voice, visual foundations).
2. Scaffold the project — copies the template plus brand tokens, fonts and assets, with paths fixed:
   ```bash
   bash "${CLAUDE_SKILL_DIR}/../../scripts/new-project.sh" slides <dest-dir>
   ```
3. Edit `<dest-dir>/index.html`: replace the sample `Deck` with the user's slides and set `total`. Open it in a browser to review; print to PDF from there.

## Kit (`template/`)

- `index.html` — full sample deck rendered inside `<deck-stage>`.
- `components.jsx` — slide components, all 1920×1080, each taking `num` and `total` for the footer:
  - `TitleSlide({ kicker, title, subtitle })`
  - `SectionSlide({ chapter, title })`
  - `BigStatSlide({ kicker, stat, label, body })`
  - `QuoteSlide({ quote, attribution, role })`
  - `ComparisonSlide({ kicker, title, columns })`
  - `ListSlide({ kicker, title, items })`
  - `ClosingSlide({ phrase, contact })`
- `deck-stage.js` — `<deck-stage>` web component: scaling, keyboard nav, print.
- `preview_*.html` — one page per slide type; open to see each component in isolation.

## Rules specific to decks

- One idea per slide. Headlines in Expanded, highlight a single keyword in yellow `#FFBE18`.
- Alternate dark and light slides by chapter, not at random.
- Numbers on `BigStatSlide` must come from the user or a cited source — never invent Metta figures.
