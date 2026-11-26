# Metta Design System

> Inteligência Comercial — gestão comercial que cresce sem destruir pessoas.

Metta is a **consulting ecosystem** that teaches Brazilian companies how to hit sales targets consistently through method, applied behavioral science, and a contractual guarantee. The brand voice is direct, founder-driven, confident but humane; the visuals are editorial — black backgrounds, solid yellow (`#FFBE18`), the custom circular *Símbolo* mark, and a single variable typeface (SF Pro) ranging from ultralight display to heavy expanded headlines.

The design system here is distilled from the brand book, the `rpbrandstudio/metta` content repo (playbooks, ads, carousels), and the official logo / background assets provided by the team.

---

## Hard rules

- **Colors**: only the tokens in `colors_and_type.css`. Yellow `#FFBE18` is load-bearing — use for CTAs, single-word highlights, symbol fill, accent marks.
- **Type**: only SF Pro Variable (or Roboto Flex fallback). Never Inter/Arial/Helvetica/Open Sans. Headlines → Expanded (132%). Body → Regular (100%). Use `font-weight` and `font-stretch` directly, not `font-variation-settings`.
- **Logo**: never apply glow, shadow, or outer stroke to the logo or símbolo.
- **Copy**: Brazilian Portuguese, "você", no emoji, no corporate jargon. Direct, founder-voice, confident.
- **Icons**: no emoji, no invented SVG micro-kit. Use Material Symbols Rounded (see Iconography), typographic marks, or the Símbolo itself.

---

## Sources

| Source | Where |
|---|---|
| Logos, symbols, signatures, background plates | `brand/assets/` |
| SF Pro Italic Variable TTF (regular weights referenced via `local()`) | `brand/fonts/SF-Pro-Italic-Variable-Official.ttf` |
| Ad layout references (feed 4:5, story 9:16, sample ad) | `skills/ads/reference/` |
| Full brand guideline spec (logo, colors, type, CSS tokens) | Brand book provided by the team |
| Content / ad / playbook HTML references | `rpbrandstudio/metta` GitHub repo → `output/` (playbook-codigo-metta, ads-isca-protocolo, ads-sessao-estrategica, sala-secreta, etc.) |
| Cultural playbook (internal values, tone) | `rpbrandstudio/metta` → `O_Codigo_Metta_Playbook_de_Cultura_v2 (3).docx` |

GitHub repo is private — access requires rpbrandstudio install. Relevant HTML pages (e.g. `output/playbook-codigo-metta.html`, `output/isca-protocolo-metta.html`) show the brand applied in long-form editorial and ad formats.

---

## Brand files

```
brand/
├── GUIDELINES.md             ← you are here
├── colors_and_type.css       ← CSS foundations — vars, type scale, utilities, @font-face
├── fonts/                    ← SF Pro Italic Variable (primary is local())
├── assets/
│   ├── logos/                ← Logo_metta (horizontal, vertical — 6 color variants)
│   ├── symbols/              ← Just the circular Símbolo (icon) — 5 variants
│   ├── signatures/           ← "metta | INTELIGÊNCIA COMERCIAL" lockup
│   └── backgrounds/          ← Approved gradients + flat brand plates
└── preview/                  ← Specimen pages: colors, type, spacing, radii, components, brand
```

---

## Brand context

**Who**: Metta is an *ecossistema de inteligência comercial* led by founder **Tiago Alves** (~21 yrs of commercial-ops expertise, 1,000+ client companies, R$ 8.5B in generated revenue claimed). HQ voice is Brazilian Portuguese, founder-led, anti-"palestra" (anti-speech), pro-method.

**Products / surfaces**:
- **Editorial / playbook pages** — long-form brand manifestos (e.g. *O Código Metta*) alternating dark / yellow / white / ice sections
- **Paid social ads** — feed (square) + story (9:16), high-contrast dark-yellow, mixed-weight headlines
- **Carousels** — multi-card Instagram carousels, consistent grid, chapter numbering
- **Lead magnets / landing pages** — same tokens, more body copy
- **Founder personal brand (Tiago Alves)** — tighter type, steel-blue (#4A7FA5) accent instead of yellow

There is **no shipping app or SaaS product** in the source repo. This system targets *marketing, brand, and content* surfaces.

---

## Content Fundamentals — how Metta writes

**Language**: Brazilian Portuguese. Never English unless quoting a technical term. No accents dropped ("inteligência", not "inteligencia").

**Person & tone**: Second person singular ("você"). Founder-direct — feels like Tiago talking to you. Confident, never corporate. Uses short declarative sentences followed by the "pivot" sentence that inverts expectation.

**Casing**:
- **Headlines** default to UPPERCASE (conversion mode). Sentence case is reserved for editorial / institutional mode (playbooks, posters).
- **CTAs** always UPPERCASE with loose tracking (+1%).
- **Labels / tags** UPPERCASE with wide tracking (+9-12%), or editorial ultra-light at +28%.
- Intentional lowercase appears as a *device* — intimate one-liners like "já tentou / de tudo" in Expanded Heavy lowercase.

**Signature phrases** (real examples from the repo):
- "Bora bater meta."
- "Inteligência comercial aplicada."
- "Onde o CNPJ cresce sem que o CPF pague o preço."
- "Resultado com leveza."
- "Se a gente promete, a gente entrega. E quando erra, corrige."
- "Método substitui improviso."

**Rhythm**: Set-up sentence ends flat, payoff sentence lands with **one keyword in yellow** (or in Expanded Heavy). Copy uses mixed-weight headlines — an *Expanded Regular* "setup" next to an *Expanded Heavy* "punch".

**What Metta does NOT do**:
- No emoji. Ever. (No exceptions found in the repo.)
- No exclamation-point spam; emphasis comes from typography, not punctuation.
- No corporate jargon ("sinergia", "disrupção", "alavancar") — plain, specific verbs.
- No smiley, friendly, "growth-hacky" copy. Tone is serious, adult, results-focused.
- No diminutives or overly casual slang beyond "bora".

**Vibe**: editorial / institutional with a conversion edge. Imagine *The Economist* crossed with a Brazilian founder's LinkedIn post, on a black background.

---

## Visual Foundations

### Palette strategy
- **Three-color discipline**: Yellow (#FFBE18), Blue Night (#0C161B), White/Ice. Every composition is built from these three. Blue-grays exist only as supporting text/divider tokens.
- **Yellow is load-bearing**. It carries CTA, symbol fill, single-word highlights inside headlines, and section accents. It is never a gradient on text.
- **Dark is the default brand surface**. White sections are used editorially, for breathing room between dark chapters.

### Typography
- **One family**: SF Pro Variable. Fallback: Roboto Flex. *Never Inter, Arial, Helvetica, Open Sans.*
- **Two axes in play**: `font-weight` (270 → 870) and `font-stretch` (100% Regular / 132% Expanded). Use CSS properties directly — never `font-variation-settings: 'wdth' 132`, which loses to `font-stretch` per spec.
- **Headlines → Expanded 132%.** **Body → Regular 100%.**
- **Light (270)** for delicate taglines and soft phrases; **Heavy (870)** for impact. The two bookend the system.
- Letter-spacing: `-1%` on headlines and body, `+9–12%` on labels, `+28%+` on editorial labels (9–11px).

### Logo usage
- Logo never carries glow, drop shadow, or outer stroke. The `rgba(255,190,24,0.24)` glow listed in old guidelines is **removed**.
- On dark `#0C161B` → símbolo yellow + wordmark white.
- On white `#FFFFFF` → símbolo yellow + wordmark Blue Night.
- On yellow `#FFBE18` → wordmark Blue Night, símbolo stays yellow (same color as bg is ok — or use the *cinza* variant).

### Backgrounds
- **Solid plates first**: the repo provides `bg_liso_*` JPGs that are near-flat colors with subtle grain — prefer these to CSS solid fills when the visual warrants texture.
- **Approved gradients**: radial light, radial dark, yellow radial at 82%/10%, angular dark conic, linear yellow 226°. These are the *only* five.
- **Symbol as background art**: the Metta *Símbolo* can be placed at ~7–10% opacity, often oversized and bleeding off one edge. See `.symbol-bg` in the playbook reference. Use the color variant matching the surface (white símbolo on dark; dark símbolo on yellow/white).
- **"metta" ghost watermark**: lowercase "metta" set in Expanded Heavy, very low opacity (3–8%), placed bottom-right bleeding off. Only for hero / chapter-opener moments.

### Motion
- Restrained. Prototypes and web uses: fades, slow opacity cross-fades (400–600ms, ease-out), subtle scale-up on hover (≤1.02). No bounces, no springy overshoots.
- The brand mood is *solid* and *confident*, not playful. Motion should feel inevitable, not surprising.

### Hover / press states
- **Hover**: on yellow CTAs → `#FFC531` (yellow-light). On dark pills → subtle +10% brightness. Never gradient-shift on hover.
- **Press**: 97% scale (`transform: scale(.97)`) + darken one tick (yellow → yellow-alt `#FFB618`). No color inversion.
- **Focus**: 2px outline in `#FFBE18` with 2px offset. Always visible — accessibility matters.

### Borders, corners, cards
- **Radii**: pill CTAs (`999px`), cards `20–24px`, small chips `8–12px`. Never 0. Never 40px+ (avoid "balloon" shapes).
- **Borders are subtle**: `rgba(12,22,27,0.1)` on light, `rgba(255,255,255,0.08)` on dark. For outline style, use `rgba(202,217,224,0.87)` for a crisper stroke.
- **Cards on dark**: filled `#1A2A35` (dark-card) with no border, OR glass (`rgba(255,255,255,0.05)` + `backdrop-filter: blur(20px)` + 1px inner border). On light: `#EBF3F7` (ice-blue) solid, or `#FFFFFF` with 1px `#EDEDED` border.
- **Shadows**: used minimally. Elevation comes from *color contrast* + *ambient glow* (yellow/teal blobs behind content), not from dropshadow stacks.

### Transparency & blur
- `backdrop-filter: blur(20px)` reserved for "glass" cards on top of hero imagery or the angular dark gradient.
- Solid fills everywhere else. Transparency is not a default.

### Layout rules
- **Generous padding**: `page` sections use `10%` horizontal on desktop, dropping to `6%` <900px. Vertical is breathing — 80–100px top/bottom in playbooks.
- **Max content width**: 800–900px for long-form copy. Headlines can bleed wider.
- **Grid**: `card-grid--2` / `--3` with 24px gaps. Collapse to 1 column <900px.
- **Fixed elements**: rare. Metta favors scrolling narrative over fixed navigation.

### Imagery tone
- **No stock photography in the repo** — the ads are type-driven. If/when real photography is used, lean **warm, cinematic, authoritative** — not bright office-stock, not pastel. Think editorial portraits, shot on location, with a slight desaturation and warm cast.
- **Textures directory** exists in the private repo but wasn't imported here — these are brand textures to layer underneath type when adding depth.

---

## Iconography

**Iconografia oficial: Material Symbols — Google** (variante **Rounded**).

- Família: `Material Symbols Rounded` via Google Fonts
- Configuração padrão: `weight 500`, `optical size 24`, `FILL 0`, `GRAD 0`
- Container: 56×56, radius 14 (para pílulas e valores); radius 12 para UI mais densa
- Aplicação de cor: amarelo (`#FFBE18`) sobre dark, dark (`#0C161B`) sobre amarelo cheio, dark sobre Gelo Azulado. **Nunca** amarelo esmaecido de fundo.
- O Metta *Símbolo* continua sendo usado como watermark editorial em todas as escalas (favicon → bleed 7%). **Não** é um ícone de UI — é marca.

**Emoji: proibido.**

```html
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,500,0,0">

<span class="material-symbols-rounded"
  style="font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24;">
  rocket_launch
</span>
```

---

## Font substitution notice

- **SF Pro Variable** is loaded via `local('SF Pro')` first (macOS / iOS system install will hit), then `url('fonts/SF-Pro-Variable-Official.ttf')`. **The `.ttf` file itself was not provided in this upload** — only the italic variant was. On non-Apple systems the fallback will activate.
- **Fallback**: Roboto Flex Variable (Google Fonts) — maps 1:1 on `wght` and `wdth`. Tokens in `colors_and_type.css` work identically.
- **Action for the team**: Please upload `SF-Pro-Variable-Official.ttf` (the upright variable file — the Drive ID `1SDXY_sNrpM9wMxQ5F2_IHq_boVz8jXoB` in the spec) so this system ships with the primary font self-hosted.

---

## Kits

Each surface has its own skill in this plugin, with a working template under `skills/<name>/template/`:

- **`slides`** — pitch-deck kit (1920×1080) on `deck-stage`: TitleSlide, SectionSlide, BigStatSlide, QuoteSlide, ComparisonSlide, ListSlide, ClosingSlide.
- **`ads`** — paid-social ads (feed 4:5, story 9:16), variations laid out on a design canvas.
- **`landing-page`** — landing-page surface: nav, hero, pillars, stat band, testimonial, pricing, FAQ, lead form, footer.
- **`editorial`** — dark/yellow editorial surface for playbooks and long-form pages: section openers, bands, quote blocks, CTA pills.

---

## Caveats

- No SaaS/app UI to replicate — the UI kit focuses on the editorial/marketing surface the brand actually ships.
- SF Pro upright variable `.ttf` missing — see above.
- Brand-texture imagery (`.temp-curadoria/Imagens Texturas/`) was not imported; if needed for future work, pull from the `rpbrandstudio/metta` repo.
