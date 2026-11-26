---
name: landing-page
description: Build Metta landing pages and capture pages — landing page, página de captura, página de vendas, lead form, site. Ships a one-page React kit with nav, hero, method pillars, stat band, testimonial, pricing, FAQ, lead form and footer.
---

# Metta landing page

## Start

1. Read `${CLAUDE_SKILL_DIR}/../../brand/GUIDELINES.md`.
2. Scaffold the project:
   ```bash
   bash "${CLAUDE_SKILL_DIR}/../../scripts/new-project.sh" landing-page <dest-dir>
   ```
3. Edit `<dest-dir>/index.html` to compose the page and `components.jsx` to change copy and content. For production code, port the components and tokens into the target stack instead of shipping the Babel-in-browser demo.

## Kit (`template/`)

`components.jsx` (all exposed on `window`):

- `TopNav` — sticky, glass blur, logo + nav + primary CTA
- `CTA({ variant, size })` — `primary | dark | ghost | light`, `sm | md | lg`
- `Hero` — full-bleed dark, Símbolo bleed at 7% opacity, headline with yellow accent word, Light 270 lede, stat card on the right
- `LogoStrip` — placeholder client wordmarks (text only — replace with real logos)
- `MethodPillars` — three editorial cards on ice-blue, large yellow numerals
- `StatBand` — full-bleed yellow band, 4 stats with vertical dividers
- `Testimonial` — full-bleed dark, italic Light 270 quote
- `PricingTiers` — three tiers, middle one highlighted
- `FAQ` / `FAQItem` — accordion with yellow chip on open
- `LeadForm` — dark surface, yellow focus ring, two-column grid, success state
- `SiteFooter` — 4 columns with signature lockup

## Rules specific to landing pages

- Stats, testimonials, client logos and prices are placeholders in the kit. Use only real data from the user; never publish the sample figures.
- Keep long-form copy at 800–900px max width; collapse grids to one column below 900px.
