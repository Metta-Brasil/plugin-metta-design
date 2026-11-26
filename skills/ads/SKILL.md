---
name: ads
description: Create Metta paid-social ads and carousels — anúncio, criativo, feed 4:5 (1080×1350), story 9:16 (1080×1920), carrossel Instagram/Facebook. Includes the approved element-placement references and a working ad template with multiple variations on a canvas.
---

# Metta ads

## Start

1. Read `${CLAUDE_SKILL_DIR}/../../brand/GUIDELINES.md`, especially Content Fundamentals (casing, rhythm, signature phrases).
2. Look at the layout references before designing (they are images — open them with Read):
   - `${CLAUDE_SKILL_DIR}/reference/padrao-elementos-feed-4x5.png` — element placement for feed 4:5
   - `${CLAUDE_SKILL_DIR}/reference/padrao-elementos-story-9x16.png` — element placement for story 9:16
   - `${CLAUDE_SKILL_DIR}/reference/exemplo-ad-60-minutos-feed.png` — a shipped feed ad
3. Scaffold the project:
   ```bash
   bash "${CLAUDE_SKILL_DIR}/../../scripts/new-project.sh" ads <dest-dir>
   ```
4. Edit `<dest-dir>/ad-60-minutos.jsx`: adapt `Ad`, write the variations (`VarA`, `VarB`, …) and list them in `App`. Open `ad-60-minutos.html` to compare them side by side; click an artboard to view it fullscreen.

## Kit (`template/`)

- `ad-60-minutos.jsx` — feed ad (1080×1350): white background, wordmark on top, Expanded Heavy all-caps headline, sub-copy with selective bold, pill CTA. Three copy variations.
- `ad-60-minutos.html` — loads tokens, React and the canvas.
- `design-canvas.jsx` — canvas that lays out artboards in sections (`DesignCanvas`, `DCSection`, `DCArtboard`, `DCPostIt`). Reordering and renaming only persist inside Claude Design; elsewhere they reset on reload.

For darker, editorial-style ads, reuse blocks from the editorial kit (`${CLAUDE_SKILL_DIR}/../editorial/template/components.jsx`): `SectionOpener`, `StrategyTechRow`, `QuoteBlock`, `CTAPill`.

## Rules specific to ads

- Copy: headline UPPERCASE, CTA UPPERCASE, no emoji, no exclamation spam. One keyword highlighted per headline.
- Respect the safe areas in the reference images, especially for story (top and bottom UI overlays).
- Deliver every requested format at its exact pixel size.
