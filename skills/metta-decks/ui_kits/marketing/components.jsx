// Metta Marketing UI Kit — landing-page surface
// Builds on the editorial kit's tokens; adds nav, hero, stat row, pricing,
// FAQ, testimonial, lead form, footer — all dark-default with editorial type.

const M = {
  dark: '#0C161B',
  deep: '#0A1013',
  darkCard: '#1A2A35',
  darkSlate: '#2E3E47',
  yellow: '#FFBE18',
  yellowHover: '#FFC531',
  yellowAlt: '#FFB618',
  white: '#FFFFFF',
  ice: '#FAFCFD',
  iceBlue: '#EBF3F7',
  steel: '#B0CAD8',
  support: '#435965',
  supportSoft: '#688594',
  supportLight: '#75919F',
  divLight: 'rgba(12,22,27,0.10)',
  divDark: 'rgba(255,255,255,0.10)',
};

// ────────────────────────────────────────────────────────────────────────
// NAV
// ────────────────────────────────────────────────────────────────────────
const TopNav = ({ active = 'Método' }) => {
  const items = ['Método', 'Garantia', 'Cases', 'Manifesto', 'Contato'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(12,22,27,0.86)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${M.divDark}`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 7%',
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="../../assets/logos/logo_metta_colorido_h.svg" alt="Metta" style={{ height: 24 }} />
      </a>
      <nav style={{ display: 'flex', gap: 34 }}>
        {items.map(x => (
          <a key={x} href="#" style={{
            color: x === active ? M.yellow : M.steel,
            textDecoration: 'none',
            fontWeight: 540, fontStretch: '132%', fontSize: 12,
            letterSpacing: '0.14em', textTransform: 'uppercase',
          }}>{x}</a>
        ))}
      </nav>
      <CTA variant="primary" size="sm">Sessão estratégica</CTA>
    </header>
  );
};

// ────────────────────────────────────────────────────────────────────────
// CTA — refined version of the editorial kit pill
// ────────────────────────────────────────────────────────────────────────
const CTA = ({ variant = 'primary', size = 'md', children, onClick }) => {
  const [pressed, setPressed] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: { pad: '10px 20px', fs: 11 },
    md: { pad: '14px 28px', fs: 13 },
    lg: { pad: '18px 36px', fs: 14 },
  }[size];
  const variants = {
    primary: { bg: hover ? M.yellowHover : M.yellow, color: M.dark, border: 'none' },
    dark:    { bg: hover ? M.darkCard : M.dark, color: M.yellow, border: `1px solid ${M.yellow}` },
    ghost:   { bg: hover ? 'rgba(255,255,255,0.08)' : 'transparent', color: M.white, border: `1px solid ${M.white}` },
    light:   { bg: hover ? M.iceBlue : M.white, color: M.dark, border: `1px solid ${M.divLight}` },
  }[variant];
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        fontFamily: 'inherit', cursor: 'pointer',
        padding: sizes.pad, borderRadius: 999,
        fontWeight: 700, fontStretch: '132%', textTransform: 'uppercase',
        letterSpacing: '0.06em', fontSize: sizes.fs,
        background: variants.bg, color: variants.color, border: variants.border,
        transform: pressed ? 'scale(0.97)' : 'scale(1)',
        transition: 'transform .12s ease, background .15s ease',
      }}>{children}</button>
  );
};

// ────────────────────────────────────────────────────────────────────────
// HERO
// ────────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section style={{
    background: M.dark, color: M.white, position: 'relative', overflow: 'hidden',
    padding: '140px 7% 120px',
  }}>
    {/* Símbolo bleed */}
    <img src="../../assets/symbols/simbolo_metta_amarelo.svg" alt=""
      aria-hidden="true"
      style={{
        position: 'absolute', right: '-8%', top: '8%',
        width: 620, opacity: 0.07, pointerEvents: 'none',
      }} />
    <div style={{
      maxWidth: 1100, position: 'relative', zIndex: 1,
      display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'end',
    }}>
      <div>
        <div style={{
          fontWeight: 540, fontStretch: '132%', fontSize: 12,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: M.yellow, marginBottom: 32,
          display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <span style={{ width: 32, height: 1, background: M.yellow }}/>
          Inteligência comercial aplicada
        </div>
        <h1 style={{
          fontWeight: 870, fontStretch: '132%',
          fontSize: 'clamp(64px, 8.5vw, 128px)', lineHeight: 0.86,
          letterSpacing: '-0.02em', margin: 0,
        }}>
          <span style={{ color: M.yellow }}>Bater meta</span><br/>
          virou método.
        </h1>
        <p style={{
          fontWeight: 270, fontStretch: '132%',
          fontSize: 'clamp(20px, 1.6vw, 24px)', lineHeight: 1.45,
          color: M.steel, maxWidth: 560,
          marginTop: 36, marginBottom: 0,
          letterSpacing: '-0.005em',
        }}>
          Onde o CNPJ cresce sem que o CPF pague o preço.
          Garantia contratual: bateu meta ou a gente devolve o investimento.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 48 }}>
          <CTA variant="primary" size="lg">Agendar sessão estratégica</CTA>
          <CTA variant="ghost" size="lg">Ver o método</CTA>
        </div>
      </div>
      {/* Right side: spec card */}
      <div style={{
        background: M.darkCard, borderRadius: 24, padding: 32,
        border: `1px solid ${M.divDark}`,
      }}>
        <div style={{
          fontWeight: 540, fontStretch: '132%', fontSize: 11,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: M.yellow, marginBottom: 18,
        }}>O número</div>
        <div style={{
          fontWeight: 870, fontStretch: '132%', fontSize: 88,
          lineHeight: 0.9, letterSpacing: '-0.02em',
          color: M.white, marginBottom: 4,
        }}>R$ 8,5 bi</div>
        <div style={{ fontSize: 14, color: M.steel, lineHeight: 1.5, marginBottom: 24 }}>
          gerados em receita atribuível para 1.000+ clientes em 21 anos.
        </div>
        <div style={{ height: 1, background: M.divDark, margin: '8px 0 18px' }}/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div>
            <div style={{ fontWeight: 870, fontStretch: '132%', fontSize: 28, color: M.yellow }}>21</div>
            <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: M.supportSoft }}>Anos</div>
          </div>
          <div>
            <div style={{ fontWeight: 870, fontStretch: '132%', fontSize: 28, color: M.yellow }}>1k+</div>
            <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: M.supportSoft }}>Empresas</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ────────────────────────────────────────────────────────────────────────
// LOGO STRIP / SOCIAL PROOF
// ────────────────────────────────────────────────────────────────────────
const LogoStrip = () => (
  <section style={{
    background: M.deep, color: M.supportSoft,
    padding: '40px 7%',
    borderTop: `1px solid ${M.divDark}`,
    borderBottom: `1px solid ${M.divDark}`,
    display: 'flex', alignItems: 'center', gap: 56, flexWrap: 'wrap',
  }}>
    <div style={{
      fontWeight: 270, fontStretch: '132%', fontSize: 11,
      letterSpacing: '0.28em', textTransform: 'uppercase',
      color: M.supportSoft, minWidth: 180,
    }}>Operam com método</div>
    {['ALPHA·CO', 'NORTE LTDA', 'GRUPO 7', 'CASA MORENA', 'PRISMA', 'VERTICE'].map(n => (
      <span key={n} style={{
        fontWeight: 650, fontStretch: '132%', fontSize: 16,
        letterSpacing: '0.04em', color: M.steel, opacity: 0.7,
      }}>{n}</span>
    ))}
  </section>
);

// ────────────────────────────────────────────────────────────────────────
// METHOD / 3 PILLARS
// ────────────────────────────────────────────────────────────────────────
const MethodPillars = () => {
  const pillars = [
    { num: '01', title: 'Diagnóstico', body: 'FCA — Fatos, Causas, Ações. Mapeamos o gap entre meta e execução em até 14 dias.' },
    { num: '02', title: 'Protocolo', body: 'Implementação assistida do método: rituais, scripts, painéis e cadências de revisão.' },
    { num: '03', title: 'Garantia', body: 'Bateu meta no ciclo contratado, ou devolvemos o investimento. Cláusula em contrato.' },
  ];
  return (
    <section style={{ background: M.white, color: M.dark, padding: '120px 7%' }}>
      <div style={{ maxWidth: 1100 }}>
        <div style={{
          fontWeight: 540, fontStretch: '132%', fontSize: 12,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: M.support, marginBottom: 24,
        }}>O método · três pilares</div>
        <h2 style={{
          fontWeight: 870, fontStretch: '132%',
          fontSize: 'clamp(48px, 6vw, 84px)', lineHeight: 0.95,
          letterSpacing: '-0.02em', margin: '0 0 80px', maxWidth: 900,
        }}>
          Diagnóstico, protocolo<br/>e <span style={{ color: M.yellow }}>garantia.</span>
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24, alignItems: 'stretch',
        }}>
          {pillars.map(p => (
            <article key={p.num} style={{
              background: M.iceBlue, borderRadius: 24, padding: 36,
              display: 'flex', flexDirection: 'column', gap: 20,
              minHeight: 320,
            }}>
              <div style={{
                fontWeight: 870, fontStretch: '132%', fontSize: 64,
                lineHeight: 0.85, color: M.yellow, letterSpacing: '-0.02em',
              }}>{p.num}</div>
              <h3 style={{
                fontWeight: 650, fontStretch: '132%', fontSize: 28,
                margin: 0, letterSpacing: '-0.01em',
              }}>{p.title}</h3>
              <p style={{
                fontSize: 15, lineHeight: 1.65, color: M.support, margin: 0,
              }}>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ────────────────────────────────────────────────────────────────────────
// STAT BAND
// ────────────────────────────────────────────────────────────────────────
const StatBand = () => {
  const stats = [
    { v: '1.000+', l: 'Empresas atendidas' },
    { v: 'R$ 8,5 bi', l: 'Receita atribuível' },
    { v: '21 anos', l: 'De método aplicado' },
    { v: '94%', l: 'Renovam o contrato' },
  ];
  return (
    <section style={{
      background: M.yellow, color: M.dark,
      padding: '64px 7%',
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48,
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{ borderLeft: i ? `1px solid rgba(12,22,27,0.18)` : 'none', paddingLeft: i ? 32 : 0 }}>
          <div style={{
            fontWeight: 870, fontStretch: '132%', fontSize: 'clamp(32px, 4vw, 48px)',
            lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: 8,
          }}>{s.v}</div>
          <div style={{
            fontWeight: 540, fontStretch: '132%', fontSize: 11,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(12,22,27,0.7)',
          }}>{s.l}</div>
        </div>
      ))}
    </section>
  );
};

// ────────────────────────────────────────────────────────────────────────
// TESTIMONIAL
// ────────────────────────────────────────────────────────────────────────
const Testimonial = () => (
  <section style={{
    background: M.dark, color: M.white,
    padding: '120px 7%', position: 'relative', overflow: 'hidden',
  }}>
    <img src="../../assets/symbols/simbolo_metta_amarelo.svg" alt=""
      aria-hidden="true"
      style={{
        position: 'absolute', left: '-6%', bottom: '-12%',
        width: 480, opacity: 0.06, pointerEvents: 'none',
      }} />
    <div style={{ maxWidth: 900, position: 'relative', zIndex: 1 }}>
      <div style={{
        fontWeight: 540, fontStretch: '132%', fontSize: 12,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: M.yellow, marginBottom: 28,
      }}>Quem aplicou</div>
      <p style={{
        fontWeight: 270, fontStretch: '132%',
        fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1.25,
        letterSpacing: '-0.01em', fontStyle: 'italic',
        color: M.white, margin: 0,
      }}>
        "Em quatro meses passamos de meta batida no susto para meta batida com previsibilidade.
        O método ficou na empresa — não dependemos mais de ninguém."
      </p>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 16,
        marginTop: 40, paddingTop: 24,
        borderTop: `1px solid ${M.divDark}`,
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: 999,
          background: M.darkCard, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          fontWeight: 870, fontStretch: '132%', color: M.yellow,
        }}>RM</div>
        <div>
          <div style={{ fontWeight: 650, fontStretch: '132%', fontSize: 15, color: M.white }}>Renata Maia</div>
          <div style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: M.supportSoft }}>
            CEO · Grupo 7
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ────────────────────────────────────────────────────────────────────────
// PRICING / TIERS
// ────────────────────────────────────────────────────────────────────────
const PricingTiers = () => {
  const tiers = [
    { tag: 'Diagnóstico', name: 'Sessão Estratégica', price: 'Gratuita', items: ['Mapeamento FCA', 'Relatório executivo', 'Plano de ação 90 dias'], variant: 'light' },
    { tag: 'Protocolo', name: 'Programa Metta', price: 'Sob proposta', items: ['Implementação assistida', 'Painéis + cadências', 'Garantia de meta'], variant: 'yellow', highlight: true },
    { tag: 'Continuidade', name: 'Aceleração Anual', price: 'Sob proposta', items: ['Revisão trimestral', 'Coaching de liderança', 'Acesso ao acervo Metta'], variant: 'dark' },
  ];
  return (
    <section style={{ background: M.ice, color: M.dark, padding: '120px 7%' }}>
      <div style={{ maxWidth: 1100 }}>
        <div style={{
          fontWeight: 540, fontStretch: '132%', fontSize: 12,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: M.support, marginBottom: 24,
        }}>Como trabalhamos</div>
        <h2 style={{
          fontWeight: 870, fontStretch: '132%',
          fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1, letterSpacing: '-0.02em',
          margin: '0 0 64px', maxWidth: 800,
        }}>Três caminhos. Uma garantia.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {tiers.map(t => {
            const isYellow = t.variant === 'yellow';
            const isDark = t.variant === 'dark';
            const bg = isYellow ? M.yellow : isDark ? M.dark : M.white;
            const fg = isDark ? M.white : M.dark;
            const sub = isYellow ? 'rgba(12,22,27,0.7)' : isDark ? M.steel : M.support;
            return (
              <div key={t.name} style={{
                background: bg, color: fg, borderRadius: 24, padding: 32,
                border: !isYellow && !isDark ? `1px solid ${M.divLight}` : 'none',
                display: 'flex', flexDirection: 'column', minHeight: 380,
                transform: t.highlight ? 'translateY(-8px)' : 'none',
                boxShadow: t.highlight ? '0 24px 48px rgba(255,190,24,0.18)' : 'none',
              }}>
                <div style={{
                  fontWeight: 540, fontStretch: '132%', fontSize: 11,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: sub, marginBottom: 16,
                }}>{t.tag}</div>
                <h3 style={{
                  fontWeight: 650, fontStretch: '132%', fontSize: 24,
                  letterSpacing: '-0.01em', margin: '0 0 24px',
                }}>{t.name}</h3>
                <div style={{
                  fontWeight: 870, fontStretch: '132%', fontSize: 40,
                  lineHeight: 1, letterSpacing: '-0.02em',
                  color: isYellow ? M.dark : isDark ? M.yellow : M.dark,
                  marginBottom: 24,
                }}>{t.price}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', flex: 1 }}>
                  {t.items.map(i => (
                    <li key={i} style={{
                      display: 'flex', gap: 10, alignItems: 'flex-start',
                      padding: '10px 0',
                      borderTop: `1px solid ${isYellow ? 'rgba(12,22,27,0.15)' : isDark ? M.divDark : M.divLight}`,
                      fontSize: 14, color: sub,
                    }}>
                      <span style={{ color: isYellow ? M.dark : M.yellow, fontWeight: 870 }}>+</span>
                      {i}
                    </li>
                  ))}
                </ul>
                <CTA variant={isYellow ? 'dark' : isDark ? 'primary' : 'dark'} size="md">Conversar</CTA>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ────────────────────────────────────────────────────────────────────────
// FAQ
// ────────────────────────────────────────────────────────────────────────
const FAQItem = ({ q, a, defaultOpen }) => {
  const [open, setOpen] = React.useState(defaultOpen || false);
  return (
    <div style={{ borderTop: `1px solid ${M.divLight}` }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', background: 'transparent', border: 'none', cursor: 'pointer',
        padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'inherit', textAlign: 'left',
      }}>
        <span style={{
          fontWeight: 650, fontStretch: '132%', fontSize: 18,
          letterSpacing: '-0.005em', color: M.dark,
        }}>{q}</span>
        <span style={{
          width: 32, height: 32, borderRadius: 999,
          background: open ? M.yellow : M.iceBlue, color: M.dark,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 870, fontSize: 18, transition: 'background .15s',
          flexShrink: 0,
        }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <p style={{
          fontSize: 15, lineHeight: 1.7, color: M.support,
          margin: 0, padding: '0 0 24px', maxWidth: 720,
        }}>{a}</p>
      )}
    </div>
  );
};

const FAQ = () => (
  <section style={{ background: M.white, color: M.dark, padding: '120px 7%' }}>
    <div style={{
      maxWidth: 1100, display: 'grid',
      gridTemplateColumns: '1fr 1.3fr', gap: 80, alignItems: 'start',
    }}>
      <div>
        <div style={{
          fontWeight: 540, fontStretch: '132%', fontSize: 12,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: M.support, marginBottom: 24,
        }}>Dúvidas frequentes</div>
        <h2 style={{
          fontWeight: 870, fontStretch: '132%',
          fontSize: 'clamp(40px, 4.5vw, 56px)', lineHeight: 0.95,
          letterSpacing: '-0.02em', margin: 0,
        }}>O que perguntam<br/>antes de começar.</h2>
      </div>
      <div>
        <FAQItem defaultOpen
          q="A garantia funciona mesmo?"
          a="Sim. Está em contrato. Se a meta acordada para o ciclo não for batida, o investimento é devolvido. A cláusula é específica e auditável." />
        <FAQItem
          q="Quanto tempo leva o diagnóstico FCA?"
          a="Até 14 dias. Inclui imersão com a liderança, leitura de pipeline e entrega do plano de ação para os 90 dias seguintes." />
        <FAQItem
          q="Vocês atendem qual porte de empresa?"
          a="De R$ 5 mi a R$ 500 mi de faturamento anual. Em cada faixa, o protocolo é ajustado para a complexidade comercial real do negócio." />
        <FAQItem
          q="Implementam, ou só consultam?"
          a="Implementam. Método, rituais, painéis e cadência ficam rodando dentro da empresa. A Metta sai quando o time roda sozinho." />
      </div>
    </div>
  </section>
);

// ────────────────────────────────────────────────────────────────────────
// LEAD FORM
// ────────────────────────────────────────────────────────────────────────
const LeadForm = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const Field = ({ label, type = 'text', placeholder, full }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, gridColumn: full ? '1 / -1' : 'auto' }}>
      <label style={{
        fontWeight: 540, fontStretch: '132%', fontSize: 11,
        letterSpacing: '0.16em', textTransform: 'uppercase', color: M.steel,
      }}>{label}</label>
      <input type={type} placeholder={placeholder}
        style={{
          fontFamily: 'inherit', fontSize: 15, padding: '14px 16px',
          background: 'rgba(255,255,255,0.05)', border: `1px solid ${M.divDark}`,
          borderRadius: 12, color: M.white, outline: 'none',
        }}
        onFocus={e => { e.target.style.borderColor = M.yellow; e.target.style.boxShadow = '0 0 0 3px rgba(255,190,24,0.22)'; }}
        onBlur={e => { e.target.style.borderColor = M.divDark; e.target.style.boxShadow = 'none'; }}
      />
    </div>
  );
  return (
    <section style={{
      background: M.deep, color: M.white,
      padding: '120px 7%', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: 980, display: 'grid',
        gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'start',
      }}>
        <div>
          <div style={{
            fontWeight: 540, fontStretch: '132%', fontSize: 12,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: M.yellow, marginBottom: 28,
          }}>Sessão estratégica</div>
          <h2 style={{
            fontWeight: 870, fontStretch: '132%',
            fontSize: 'clamp(40px, 4.6vw, 60px)', lineHeight: 0.95,
            letterSpacing: '-0.02em', margin: 0,
          }}>Bora bater <span style={{ color: M.yellow }}>meta.</span></h2>
          <p style={{
            fontWeight: 270, fontStretch: '132%', fontSize: 18,
            lineHeight: 1.55, color: M.steel,
            marginTop: 24, marginBottom: 0, maxWidth: 380,
          }}>
            45 minutos. Sem vendedor. A gente lê seu pipeline, devolve um diagnóstico e você decide o que faz com isso.
          </p>
        </div>
        {submitted ? (
          <div style={{
            background: M.darkCard, borderRadius: 24, padding: 48,
            border: `1px solid ${M.divDark}`, textAlign: 'left',
          }}>
            <div style={{
              fontWeight: 540, fontStretch: '132%', fontSize: 11,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: M.yellow, marginBottom: 16,
            }}>Recebido</div>
            <h3 style={{
              fontWeight: 650, fontStretch: '132%', fontSize: 28,
              margin: '0 0 12px', letterSpacing: '-0.01em',
            }}>Em até 24 horas alguém te chama.</h3>
            <p style={{ color: M.steel, margin: 0, fontSize: 15, lineHeight: 1.6 }}>
              Não é um SDR. É alguém do time de método, que vai entender se faz sentido seguir.
            </p>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
            style={{
              background: M.darkCard, borderRadius: 24, padding: 32,
              border: `1px solid ${M.divDark}`,
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18,
            }}>
            <Field label="Nome" placeholder="Seu nome" />
            <Field label="Cargo" placeholder="Seu cargo atual" />
            <Field label="E-mail corporativo" type="email" placeholder="voce@empresa.com.br" full />
            <Field label="Empresa" placeholder="Nome da empresa" />
            <Field label="Faturamento" placeholder="R$ XX milhões / ano" />
            <div style={{ gridColumn: '1 / -1', marginTop: 12 }}>
              <CTA variant="primary" size="lg">Agendar sessão</CTA>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

// ────────────────────────────────────────────────────────────────────────
// FOOTER
// ────────────────────────────────────────────────────────────────────────
const SiteFooter = () => (
  <footer style={{
    background: M.deep, color: M.steel, padding: '64px 7% 40px',
    borderTop: `1px solid ${M.divDark}`,
  }}>
    <div style={{
      display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48,
      maxWidth: 1200, paddingBottom: 48, borderBottom: `1px solid ${M.divDark}`,
    }}>
      <div>
        <img src="../../assets/signatures/assinatura_metta_branco.svg" alt="Metta"
          style={{ height: 32, marginBottom: 16 }} />
        <p style={{
          fontWeight: 270, fontStretch: '132%', fontSize: 13, lineHeight: 1.6,
          color: M.supportSoft, margin: 0, maxWidth: 320,
        }}>
          Ecossistema de inteligência comercial. Onde o CNPJ cresce sem que o CPF pague o preço.
        </p>
      </div>
      {[
        { h: 'Método', l: ['Diagnóstico FCA', 'Protocolo Metta', 'Garantia contratual'] },
        { h: 'Conteúdo', l: ['Manifesto', 'Cases', 'Playbook'] },
        { h: 'Empresa', l: ['Sobre', 'Carreiras', 'Contato'] },
      ].map(col => (
        <div key={col.h}>
          <div style={{
            fontWeight: 540, fontStretch: '132%', fontSize: 11,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: M.yellow, marginBottom: 18,
          }}>{col.h}</div>
          {col.l.map(x => (
            <div key={x} style={{ marginBottom: 10 }}>
              <a href="#" style={{
                color: M.steel, textDecoration: 'none', fontSize: 13, lineHeight: 1.6,
              }}>{x}</a>
            </div>
          ))}
        </div>
      ))}
    </div>
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      marginTop: 32, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
      color: M.supportSoft,
    }}>
      <span>© 2026 Metta · Inteligência Comercial</span>
      <span style={{ color: M.yellow }}>brand@metta.com.br</span>
    </div>
  </footer>
);

Object.assign(window, {
  M, TopNav, CTA, Hero, LogoStrip, MethodPillars, StatBand,
  Testimonial, PricingTiers, FAQItem, FAQ, LeadForm, SiteFooter,
});
