# Metta Marketing UI Kit

A landing-page surface for Metta. Builds on the editorial kit's tokens with components specific to a top-of-funnel marketing site: sticky nav, hero with stat card, social proof strip, three-pillar method, stat band, testimonial, pricing tiers, FAQ accordion, lead form with focus states, and a multi-column footer.

## Files
- `index.html` — fully-strung interactive demo (one-page site)
- `components.jsx` — all components, exposed on `window`

## Components
- `<TopNav>` — sticky, glass blur, logo + nav + primary CTA
- `<CTA variant size>` — `primary | dark | ghost | light`, `sm | md | lg`
- `<Hero>` — full-bleed dark, símbolo bleed at 7% opacity, headline with yellow accent word, lede in Light 270, stat card on the right
- `<LogoStrip>` — placeholder client wordmarks (text-only — replace with real logos when available)
- `<MethodPillars>` — three editorial cards on ice-blue, large yellow numerals
- `<StatBand>` — full-bleed yellow band, 4 stats with vertical dividers
- `<Testimonial>` — full-bleed dark, italic Light 270 quote, símbolo bleed bottom-left
- `<PricingTiers>` — three tiers with the middle one highlighted (yellow + lift + ambient glow)
- `<FAQ>` / `<FAQItem>` — accordion with yellow + chip on open
- `<LeadForm>` — dark surface, yellow focus ring, two-column grid, success state
- `<SiteFooter>` — 4-column with signature lockup
