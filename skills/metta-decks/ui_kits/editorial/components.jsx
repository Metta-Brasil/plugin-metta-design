// Metta Brand Manual — editorial UI kit components
// Each piece pairs a strategic principle with its technical application.

const C = {
  dark: '#0C161B',
  darkSoft: '#1A2A35',
  yellow: '#FFBE18',
  yellowHover: '#FFC531',
  ice: '#FAFCFD',
  iceBlue: '#EBF3F7',
  muted: '#B0CAD8',
  support: '#435965',
  supportSoft: '#688594',
  white: '#FFFFFF',
};

const YellowBand = ({ thick = false, children }) => (
  <div style={{
    width: '100%',
    height: thick ? 48 : 6,
    background: C.yellow,
    display: thick ? 'flex' : 'block',
    alignItems: 'center', justifyContent: 'center', gap: 24,
    color: C.dark,
    fontWeight: 540, fontStretch: '132%',
    letterSpacing: '0.22em', fontSize: 12, textTransform: 'uppercase',
  }}>{children}</div>
);

const TransitionBand = ({ tone = 'yellow', label, num }) => {
  const isYellow = tone === 'yellow';
  return (
    <div style={{
      background: isYellow ? C.yellow : C.dark,
      color: isYellow ? C.dark : C.white,
      padding: '18px 8%',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontWeight: 650, fontStretch: '132%', fontSize: 15, letterSpacing: '0.02em',
    }}>
      <span>{label}</span>
      <span style={{ color: isYellow ? C.dark : C.yellow, fontWeight: 870 }}>{num}</span>
    </div>
  );
};

const CTAPill = ({ variant = 'primary', children, onClick }) => {
  const [pressed, setPressed] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const styles = {
    primary: { bg: hover ? C.yellowHover : C.yellow, color: C.dark },
    dark:    { bg: hover ? C.darkSoft : C.dark, color: C.yellow, border: `1px solid ${C.yellow}` },
    ghost:   { bg: hover ? 'rgba(255,255,255,0.08)' : 'transparent', color: C.white, border: `1px solid ${C.white}` },
  }[variant] || {};
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        fontFamily: 'inherit', border: styles.border || 0, cursor: 'pointer',
        padding: '14px 28px', borderRadius: 999,
        fontWeight: 700, fontStretch: '132%', textTransform: 'uppercase',
        letterSpacing: '0.06em', fontSize: 13,
        background: variant === 'primary' && pressed ? '#FFB618' : styles.bg,
        color: styles.color,
        transform: pressed ? 'scale(0.97)' : 'scale(1)',
        transition: 'transform .12s ease, background .15s ease',
      }}>{children}</button>
  );
};

// Numbered section opener — no background watermarks, editorial grid
const SectionOpener = ({ tone = 'dark', num, kicker, title, lede }) => {
  const isYellow = tone === 'yellow';
  const isLight = tone === 'light';
  const bg = isYellow ? C.yellow : isLight ? C.white : C.dark;
  const fg = isYellow || isLight ? C.dark : C.white;
  const kickerColor = isYellow ? 'rgba(12,22,27,0.55)' : isLight ? C.support : C.yellow;
  const ledeColor = isYellow ? 'rgba(12,22,27,0.7)' : isLight ? C.support : C.muted;

  return (
    <section style={{
      background: bg, color: fg, padding: '120px 8% 100px',
      borderTop: isLight ? `1px solid rgba(12,22,27,0.08)` : 'none',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '120px 1fr',
        gap: 48, alignItems: 'start', maxWidth: 1200,
      }}>
        <div style={{
          fontWeight: 870, fontStretch: '132%', fontSize: 96,
          lineHeight: 0.85, letterSpacing: '-0.02em',
          color: isYellow ? C.dark : isLight ? C.dark : C.yellow,
        }}>{num}</div>
        <div>
          <div style={{
            fontWeight: 540, fontStretch: '132%', fontSize: 12,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: kickerColor, marginBottom: 20,
          }}>{kicker}</div>
          <h2 style={{
            fontWeight: 870, fontStretch: '132%',
            fontSize: 'clamp(42px, 5.5vw, 72px)', lineHeight: 0.95,
            letterSpacing: '-0.015em', margin: 0,
          }}>{title}</h2>
          {lede && (
            <p style={{
              fontWeight: 400, fontStretch: '100%',
              fontSize: 20, lineHeight: 1.55,
              color: ledeColor, maxWidth: 640,
              marginTop: 28, marginBottom: 0,
              letterSpacing: '-0.005em',
            }}>{lede}</p>
          )}
        </div>
      </div>
    </section>
  );
};

// Two-column editorial row: strategy (left) + technical spec (right)
const StrategyTechRow = ({ kicker, title, body, spec, tone = 'light' }) => {
  const isDark = tone === 'dark';
  return (
    <section style={{
      background: isDark ? C.dark : C.white,
      color: isDark ? C.white : C.dark,
      padding: '80px 8%',
      borderTop: isDark ? `1px solid rgba(255,255,255,0.06)` : `1px solid rgba(12,22,27,0.06)`,
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 80, maxWidth: 1200, alignItems: 'start',
      }}>
        <div>
          <div style={{
            fontWeight: 540, fontStretch: '132%', fontSize: 11,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: isDark ? C.yellow : C.support, marginBottom: 16,
          }}>{kicker}</div>
          <h3 style={{
            fontWeight: 650, fontStretch: '132%',
            fontSize: 34, lineHeight: 1.05, letterSpacing: '-0.01em',
            margin: '0 0 20px',
          }}>{title}</h3>
          <p style={{
            fontSize: 17, lineHeight: 1.7,
            color: isDark ? C.muted : C.support, margin: 0,
          }}>{body}</p>
        </div>
        <div style={{
          background: isDark ? C.darkSoft : C.iceBlue,
          borderRadius: 20, padding: 32,
        }}>{spec}</div>
      </div>
    </section>
  );
};

const SpecRow = ({ label, value, mono = false }) => (
  <div style={{
    display: 'flex', justifyContent: 'space-between', gap: 24,
    padding: '12px 0',
    borderBottom: '1px solid rgba(12,22,27,0.08)',
  }}>
    <span style={{
      fontWeight: 540, fontStretch: '132%', fontSize: 11,
      letterSpacing: '0.14em', textTransform: 'uppercase',
      color: C.support,
    }}>{label}</span>
    <span style={{
      fontSize: 14, color: C.dark, textAlign: 'right',
      fontFamily: mono ? 'ui-monospace, SF Mono, Menlo, monospace' : 'inherit',
      fontVariantNumeric: 'tabular-nums',
    }}>{value}</span>
  </div>
);

const ColorSwatch = ({ hex, name, onDark }) => (
  <div style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '10px 0' }}>
    <div style={{
      width: 48, height: 48, borderRadius: 12, background: hex,
      border: onDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(12,22,27,0.08)',
      flexShrink: 0,
    }} />
    <div style={{ flex: 1 }}>
      <div style={{
        fontWeight: 650, fontStretch: '132%', fontSize: 13,
        color: onDark ? C.white : C.dark,
      }}>{name}</div>
      <div style={{
        fontSize: 11, letterSpacing: '0.06em',
        color: onDark ? C.muted : C.support,
        fontVariantNumeric: 'tabular-nums',
      }}>{hex}</div>
    </div>
  </div>
);

const QuoteBlock = ({ children, cite, tone = 'light' }) => (
  <blockquote style={{
    padding: '20px 0', margin: '48px 0', maxWidth: 700,
  }}>
    <p style={{
      fontWeight: 300, fontSize: 26, lineHeight: 1.5, fontStyle: 'italic',
      color: tone === 'dark' ? C.white : C.dark, margin: 0,
      letterSpacing: '-0.01em',
    }}>{children}</p>
    {cite && <cite style={{
      display: 'block', marginTop: 16, fontStyle: 'normal',
      fontWeight: 540, fontStretch: '132%', fontSize: 11,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      color: tone === 'dark' ? C.supportSoft : C.supportSoft,
    }}>{cite}</cite>}
  </blockquote>
);

const Header = ({ tone = 'dark' }) => {
  const logoSrc = tone === 'dark'
    ? '../../assets/logos/logo_metta_colorido_h.svg'
    : '../../assets/logos/logo_metta_colorido_escuro_h.svg';
  return (
    <header style={{
      padding: '22px 8%', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      background: tone === 'dark' ? C.dark : C.white,
      borderBottom: tone === 'dark'
        ? '1px solid rgba(255,255,255,0.06)'
        : '1px solid rgba(12,22,27,0.06)',
    }}>
      <img src={logoSrc} alt="Metta" style={{ height: 26 }} />
      <nav style={{ display: 'flex', gap: 30 }}>
        {['Estratégia', 'Identidade', 'Aplicações', 'Downloads'].map(x => (
          <a key={x} href="#" style={{
            color: tone === 'dark' ? C.muted : C.support,
            textDecoration: 'none',
            fontWeight: 540, fontStretch: '132%', fontSize: 12,
            letterSpacing: '0.14em', textTransform: 'uppercase',
          }}>{x}</a>
        ))}
      </nav>
      <CTAPill variant="primary">Baixar Brand Kit</CTAPill>
    </header>
  );
};

const Footer = () => (
  <footer style={{
    padding: '48px 8%', background: '#0A1013', color: C.muted,
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
    borderTop: '1px solid rgba(255,255,255,0.06)',
  }}>
    <div>
      <img src="../../assets/signatures/assinatura_metta_branco.svg" alt="Metta"
        style={{ height: 34, marginBottom: 14 }} />
      <p style={{
        fontWeight: 270, fontStretch: '132%', fontSize: 11,
        letterSpacing: '0.28em', textTransform: 'uppercase', color: C.supportSoft,
        margin: 0,
      }}>Manual de Marca · v1.0 · 2025</p>
    </div>
    <div style={{ fontSize: 13, lineHeight: 1.8, color: C.supportSoft }}>
      <div>Dúvidas de aplicação</div>
      <div style={{ color: C.yellow }}>brand@metta.com.br</div>
    </div>
  </footer>
);

Object.assign(window, {
  C, YellowBand, TransitionBand, CTAPill,
  SectionOpener, StrategyTechRow, SpecRow, ColorSwatch,
  QuoteBlock, Header, Footer,
});
