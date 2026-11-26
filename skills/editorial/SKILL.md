---
name: editorial
description: Build Metta editorial pages — playbooks, manifestos, long-form brand pages, materiais ricos e páginas institucionais — on the dark/yellow editorial surface with section openers, bands, quote blocks and CTA pills.
---

# Metta editorial

## Start

1. Read `${CLAUDE_SKILL_DIR}/../../brand/GUIDELINES.md`.
2. Scaffold the project:
   ```bash
   bash "${CLAUDE_SKILL_DIR}/../../scripts/new-project.sh" editorial <dest-dir>
   ```
3. Edit `<dest-dir>/index.html` — it is laid out like a real playbook excerpt; replace sections in order.

## Kit (`template/`)

`components.jsx`:

- `SectionOpener({ tone, num, kicker, title, lede })` — dark or yellow chapter opener with oversized number
- `StrategyTechRow({ kicker, title, body, spec, tone })` + `SpecRow({ label, value, mono })` — two-column strategy/technical row
- `QuoteBlock({ cite, tone })` — editorial quote with yellow left border
- `CTAPill({ variant })` — `primary | dark | ghost`
- `YellowBand({ thick })` + `TransitionBand({ tone, label, num })` — section separators
- `ColorSwatch({ hex, name, onDark })`
- `Header({ tone })`, `Footer` — brand header/footer with logo

## Rules specific to editorial

- Alternate dark / yellow / white / ice sections to pace chapters; dark is the default.
- Sentence case is allowed here (institutional mode); keep labels UPPERCASE with wide tracking.
- Use the Símbolo as background art at 7–10% opacity, bleeding off one edge — never as a UI icon.
