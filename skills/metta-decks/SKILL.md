---
name: metta-decks
description: Generate Metta-branded slides, editorial pages, ads and carousels (Inteligência Comercial): colors, type, fonts, assets and UI-kit components for production or quick prototypes.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, ads, carousels, playbook pages, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design (editorial page? ad? carousel? landing page? pitch deck? internal UI?), ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map of this skill

- `README.md` — brand context, content fundamentals, visual foundations, iconography, caveats
- `colors_and_type.css` — CSS variables (colors, type scale, radii, shadows), type utility classes, `@font-face` for SF Pro + Roboto Flex fallback
- `fonts/` — SF Pro Italic Variable TTF (upright file is missing — see README caveats)
- `assets/logos/` — Metta wordmark+symbol lockups, horizontal and vertical, 6 color variants
- `assets/symbols/` — just the circular Símbolo, 5 color variants
- `assets/signatures/` — `metta | INTELIGÊNCIA COMERCIAL` full signature, 5 variants
- `assets/backgrounds/` — approved flat plates + gradient plates (yellow, dark, ice, cinza)
- `ui_kits/editorial/` — JSX components + `index.html` demo for Metta's editorial / playbook / ads surfaces
- `ui_kits/marketing/` — landing-page kit: nav, hero, pillars, stat band, testimonial, pricing, FAQ, lead form, footer
- `slides/` — pitch-deck kit (1920×1080) running on `deck-stage`: TitleSlide, SectionSlide, BigStatSlide, QuoteSlide, ComparisonSlide, ListSlide, ClosingSlide
- `preview/` — design-system preview cards (Type, Colors, Spacing, Components, Brand)

## Hard rules

- **Colors**: only the tokens in `colors_and_type.css`. Yellow `#FFBE18` is load-bearing — use for CTAs, single-word highlights, symbol fill, accent marks.
- **Type**: only SF Pro Variable (or Roboto Flex fallback). Never Inter/Arial/Helvetica/Open Sans. Headlines → Expanded (132%). Body → Regular (100%). Use `font-weight` and `font-stretch` directly, not `font-variation-settings`.
- **Logo**: never apply glow, shadow, or outer stroke to the logo or símbolo.
- **Copy**: Brazilian Portuguese, "você", no emoji, no corporate jargon. Direct, founder-voice, confident.
- **Icons**: no emoji, no invented SVG micro-kit. Use typographic marks (characters in rounded squares), the Símbolo itself, or Lucide if UI affordance icons are strictly required (flag as substitution).

## Starting points

- For an ad or social post → copy the tokens from `colors_and_type.css`, use `ui_kits/editorial/components.jsx` `SectionOpener` / `StrategyTechRow` / `QuoteBlock` as starting blocks
- For a landing page → start from `ui_kits/marketing/components.jsx` (`Hero`, `MethodPillars`, `StatBand`, `PricingTiers`, `FAQ`, `LeadForm`, `SiteFooter`)
- For a pitch deck → start from `slides/components.jsx` and `slides/index.html`; each slide is a 1920×1080 component, render inside `<deck-stage>`
- For internal tooling UI → same tokens, switch to the light surface (`--bg-1`), tighter type scale, Regular-family throughout
