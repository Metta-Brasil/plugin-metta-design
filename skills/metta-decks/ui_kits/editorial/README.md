# Metta Editorial UI Kit

High-fidelity recreation of the editorial/ads/playbook surface Metta actually ships. Reference: `rpbrandstudio/metta` → `output/playbook-codigo-metta.html`, `output/ads-isca-protocolo/*`, `output/sala-secreta/*`.

## Files
- `index.html` — interactive demo stringing components into a playbook-like flow
- `components.jsx` — JSX components (ChapterOpener, ValueCard, PillarCard, QuoteBlock, CTAPill, YellowBand, GhostWatermark, SymbolBg, Header, Footer)

## Components
- `<ChapterOpener>` — dark or yellow full-bleed chapter opener with oversized number + símbolo background
- `<PillarCard>` — 3-column pillar grid card (character icon + title + body)
- `<ValueCard>` — value row: number + yellow badge + headline + O que significa / Como se vive / Quando é ferido
- `<QuoteBlock>` — border-left yellow editorial quote
- `<CTAPill>` — primary / dark / ghost variants
- `<YellowBand>` + `<TransitionBand>` — section separators
- `<Header>`, `<Footer>` — simple brand header/footer with logo

Not a storybook — `index.html` is laid out like a real playbook excerpt.
