// Metta Slides — slide components for 1920×1080 decks.
// Conventions: dark default, yellow accent on one word, big Expanded Heavy.

const S = {
  dark: '#0C161B',
  deep: '#0A1013',
  darkCard: '#1A2A35',
  yellow: '#FFBE18',
  yellowAlt: '#FFB618',
  white: '#FFFFFF',
  ice: '#FAFCFD',
  iceBlue: '#EBF3F7',
  steel: '#B0CAD8',
  support: '#435965',
  supportSoft: '#688594',
  divDark: 'rgba(255,255,255,0.12)',
  divLight: 'rgba(12,22,27,0.10)',
};

const slideBase = {
  width: 1920, height: 1080, position: 'relative', overflow: 'hidden',
  fontFamily: "'SF Pro', 'Roboto Flex', -apple-system, sans-serif",
  display: 'flex', flexDirection: 'column',
};

const Kicker = ({ children, color, mb = 40 }) => (
  <div style={{
    fontWeight: 540, fontStretch: '132%', fontSize: 18,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: color || S.yellow, marginBottom: mb,
    display: 'flex', alignItems: 'center', gap: 18,
  }}>
    <span style={{ width: 48, height: 1, background: color || S.yellow }}/>
    {children}
  </div>
);

const SlideFooter = ({ tone = 'dark', num, total }) => {
  const isDark = tone === 'dark';
  return (
    <div style={{
      position: 'absolute', bottom: 48, left: 100, right: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      borderTop: `1px solid ${isDark ? S.divDark : S.divLight}`,
      paddingTop: 22,
      fontSize: 14, letterSpacing: '0.2em', textTransform: 'uppercase',
      color: isDark ? S.supportSoft : S.support,
      fontWeight: 540, fontStretch: '132%',
    }}>
      <span>Metta · Inteligência Comercial</span>
      <span>{num} / {total}</span>
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────
// 01 · TITLE
// ────────────────────────────────────────────────────────────────────────
const TitleSlide = ({ kicker, title, subtitle, num, total }) => (
  <section data-screen-label="01 Title" style={{ ...slideBase, background: S.dark, color: S.white, padding: '120px 100px' }}>
    <img src="../assets/symbols/simbolo_metta_amarelo.svg" alt="" aria-hidden="true"
      style={{ position: 'absolute', right: -200, top: 80, width: 900, opacity: 0.06 }}/>
    <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
      <Kicker>{kicker}</Kicker>
      <h1 style={{
        fontWeight: 870, fontStretch: '132%', fontSize: 200, lineHeight: 0.86,
        letterSpacing: '-0.025em', margin: 0, maxWidth: 1500,
      }}>{title}</h1>
      {subtitle && <p style={{
        fontWeight: 270, fontStretch: '132%', fontSize: 32, lineHeight: 1.4,
        color: S.steel, maxWidth: 1100, marginTop: 56, marginBottom: 0,
        letterSpacing: '-0.005em',
      }}>{subtitle}</p>}
    </div>
    <img src="../assets/logos/logo_metta_colorido_h.svg" alt="Metta"
      style={{ position: 'absolute', top: 80, left: 100, height: 40 }}/>
    <SlideFooter num={num} total={total}/>
  </section>
);

// ────────────────────────────────────────────────────────────────────────
// 02 · SECTION DIVIDER (yellow chapter opener)
// ────────────────────────────────────────────────────────────────────────
const SectionSlide = ({ chapter, title, num, total }) => (
  <section data-screen-label="02 Section" style={{ ...slideBase, background: S.yellow, color: S.dark, padding: '120px 100px', justifyContent: 'flex-end' }}>
    <img src="../assets/symbols/simbolo_metta_azul.svg" alt="" aria-hidden="true"
      style={{ position: 'absolute', left: -160, top: -160, width: 700, opacity: 0.10 }}/>
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{
        fontWeight: 870, fontStretch: '132%', fontSize: 280, lineHeight: 0.85,
        letterSpacing: '-0.03em', color: S.dark, opacity: 0.85,
      }}>{chapter}</div>
      <h1 style={{
        fontWeight: 870, fontStretch: '132%', fontSize: 140, lineHeight: 0.92,
        letterSpacing: '-0.02em', margin: '24px 0 0', color: S.dark,
      }}>{title}</h1>
    </div>
    <SlideFooter tone="light" num={num} total={total}/>
  </section>
);

// ────────────────────────────────────────────────────────────────────────
// 03 · BIG STAT
// ────────────────────────────────────────────────────────────────────────
const BigStatSlide = ({ kicker, stat, label, body, num, total }) => (
  <section data-screen-label="03 Big stat" style={{ ...slideBase, background: S.dark, color: S.white, padding: '120px 100px', justifyContent: 'center' }}>
    <div style={{ maxWidth: 1500 }}>
      <Kicker>{kicker}</Kicker>
      <div style={{
        fontWeight: 870, fontStretch: '132%', fontSize: 380, lineHeight: 0.88,
        letterSpacing: '-0.03em', color: S.yellow, margin: 0,
      }}>{stat}</div>
      <div style={{
        fontWeight: 540, fontStretch: '132%', fontSize: 36, lineHeight: 1.2,
        color: S.white, marginTop: 32, letterSpacing: '-0.005em',
      }}>{label}</div>
      {body && <p style={{
        fontSize: 22, lineHeight: 1.6, color: S.steel,
        maxWidth: 900, marginTop: 32, marginBottom: 0,
      }}>{body}</p>}
    </div>
    <SlideFooter num={num} total={total}/>
  </section>
);

// ────────────────────────────────────────────────────────────────────────
// 04 · BIG QUOTE
// ────────────────────────────────────────────────────────────────────────
const QuoteSlide = ({ quote, attribution, role, num, total }) => (
  <section data-screen-label="04 Quote" style={{ ...slideBase, background: S.white, color: S.dark, padding: '120px 100px', justifyContent: 'center' }}>
    <img src="../assets/symbols/simbolo_metta_amarelo.svg" alt="" aria-hidden="true"
      style={{ position: 'absolute', left: 100, top: 100, width: 120 }}/>
    <div style={{ maxWidth: 1500, marginTop: 80 }}>
      <p style={{
        fontWeight: 270, fontStretch: '132%', fontSize: 88, lineHeight: 1.15,
        letterSpacing: '-0.015em', fontStyle: 'italic',
        color: S.dark, margin: 0,
      }}>"{quote}"</p>
      <div style={{
        marginTop: 64, paddingTop: 28,
        borderTop: `1px solid ${S.divLight}`, maxWidth: 600,
      }}>
        <div style={{
          fontWeight: 650, fontStretch: '132%', fontSize: 22,
          color: S.dark, letterSpacing: '-0.005em',
        }}>{attribution}</div>
        <div style={{
          fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: S.support, marginTop: 6,
        }}>{role}</div>
      </div>
    </div>
    <SlideFooter tone="light" num={num} total={total}/>
  </section>
);

// ────────────────────────────────────────────────────────────────────────
// 05 · 3-COLUMN COMPARISON
// ────────────────────────────────────────────────────────────────────────
const ComparisonSlide = ({ kicker, title, columns, num, total }) => (
  <section data-screen-label="05 Comparison" style={{ ...slideBase, background: S.dark, color: S.white, padding: '100px 100px' }}>
    <Kicker>{kicker}</Kicker>
    <h2 style={{
      fontWeight: 870, fontStretch: '132%', fontSize: 92, lineHeight: 0.95,
      letterSpacing: '-0.02em', margin: '0 0 80px', maxWidth: 1500,
    }}>{title}</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, flex: 1 }}>
      {columns.map((c, i) => (
        <div key={i} style={{
          background: c.highlight ? S.yellow : S.darkCard,
          color: c.highlight ? S.dark : S.white,
          borderRadius: 28, padding: 48,
          display: 'flex', flexDirection: 'column',
        }}>
          <div style={{
            fontWeight: 870, fontStretch: '132%', fontSize: 96, lineHeight: 0.85,
            color: c.highlight ? S.dark : S.yellow, letterSpacing: '-0.02em',
            marginBottom: 32,
          }}>{c.num}</div>
          <h3 style={{
            fontWeight: 650, fontStretch: '132%', fontSize: 36,
            margin: '0 0 24px', letterSpacing: '-0.01em',
          }}>{c.title}</h3>
          <p style={{
            fontSize: 19, lineHeight: 1.55, margin: 0,
            color: c.highlight ? 'rgba(12,22,27,0.78)' : S.steel,
          }}>{c.body}</p>
        </div>
      ))}
    </div>
    <SlideFooter num={num} total={total}/>
  </section>
);

// ────────────────────────────────────────────────────────────────────────
// 06 · CONTENT (heading + list)
// ────────────────────────────────────────────────────────────────────────
const ListSlide = ({ kicker, title, items, num, total }) => (
  <section data-screen-label="06 List" style={{ ...slideBase, background: S.white, color: S.dark, padding: '110px 100px' }}>
    <Kicker color={S.support}>{kicker}</Kicker>
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'start', flex: 1 }}>
      <h2 style={{
        fontWeight: 870, fontStretch: '132%', fontSize: 100, lineHeight: 0.95,
        letterSpacing: '-0.02em', margin: 0,
      }}>{title}</h2>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((it, i) => (
          <li key={i} style={{
            display: 'flex', gap: 24, padding: '24px 0',
            borderTop: `1px solid ${S.divLight}`,
          }}>
            <div style={{
              fontWeight: 870, fontStretch: '132%', fontSize: 22,
              color: S.yellow, minWidth: 44, paddingTop: 4,
            }}>{String(i + 1).padStart(2, '0')}</div>
            <div>
              <div style={{
                fontWeight: 650, fontStretch: '132%', fontSize: 26,
                letterSpacing: '-0.005em', marginBottom: 6,
              }}>{it.t}</div>
              <div style={{ fontSize: 17, lineHeight: 1.6, color: S.support }}>{it.b}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
    <SlideFooter tone="light" num={num} total={total}/>
  </section>
);

// ────────────────────────────────────────────────────────────────────────
// 07 · CLOSING / CTA
// ────────────────────────────────────────────────────────────────────────
const ClosingSlide = ({ phrase, contact, num, total }) => (
  <section data-screen-label="07 Closing" style={{ ...slideBase, background: S.dark, color: S.white, padding: '120px 100px', justifyContent: 'center' }}>
    <img src="../assets/symbols/simbolo_metta_amarelo.svg" alt="" aria-hidden="true"
      style={{ position: 'absolute', right: -300, bottom: -300, width: 1100, opacity: 0.07 }}/>
    <div style={{ position: 'relative', zIndex: 1, maxWidth: 1500 }}>
      <Kicker>Bora começar</Kicker>
      <h1 style={{
        fontWeight: 870, fontStretch: '132%', fontSize: 220, lineHeight: 0.86,
        letterSpacing: '-0.025em', margin: 0,
      }}>
        <span style={{ color: S.yellow }}>Bora</span><br/>bater meta.
      </h1>
      {contact && <div style={{
        marginTop: 80, paddingTop: 28,
        borderTop: `1px solid ${S.divDark}`,
        display: 'flex', gap: 80,
      }}>
        {contact.map((c, i) => (
          <div key={i}>
            <div style={{ fontSize: 14, letterSpacing: '0.2em', textTransform: 'uppercase', color: S.supportSoft, marginBottom: 8 }}>{c.l}</div>
            <div style={{ fontWeight: 650, fontStretch: '132%', fontSize: 24, color: S.yellow }}>{c.v}</div>
          </div>
        ))}
      </div>}
    </div>
    <SlideFooter num={num} total={total}/>
  </section>
);

Object.assign(window, {
  S, Kicker, SlideFooter,
  TitleSlide, SectionSlide, BigStatSlide, QuoteSlide,
  ComparisonSlide, ListSlide, ClosingSlide,
});
