// Metta · "60 minutos" ad variation — 1080×1350 (Instagram 4:5 feed)
// White bg, Metta wordmark top, ALL-CAPS Expanded Heavy headline,
// sub-copy with selective bolding, black pill CTA. No photo.

const AD_W = 1080, AD_H = 1350;

const Ad = ({ headline, sub, footer, ctaText = 'TOQUE NO LINK ABAIXO' }) => (
  <div style={{
    width: AD_W, height: AD_H, background: '#FFFFFF', color: '#0C161B',
    fontFamily: "'SF Pro', 'Roboto Flex', -apple-system, sans-serif",
    position: 'relative', overflow: 'hidden',
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ paddingTop: 48, display: 'flex', justifyContent: 'center' }}>
      <img src="../../../brand/assets/logos/logo_metta_colorido_escuro_h.svg" alt="Metta"
        style={{ height: 38 }}/>
    </div>

    <h1 style={{
      fontWeight: 870, fontStretch: '132%',
      fontSize: 70, lineHeight: 1.0,
      letterSpacing: '-0.015em', textTransform: 'uppercase',
      textAlign: 'center', color: '#0C161B',
      margin: '50px 70px 0', textWrap: 'balance',
    }}>{headline}</h1>

    <p style={{
      fontWeight: 410, fontStretch: '100%',
      fontSize: 30, lineHeight: 1.35,
      letterSpacing: '-0.005em',
      textAlign: 'center', color: '#0C161B',
      margin: '34px 80px 0', textWrap: 'balance',
    }}>{sub}</p>

    <div style={{ flex: 1 }}/>

    <div style={{ padding: '0 80px 56px' }}>
      <p style={{
        fontWeight: 410, fontStretch: '100%',
        fontSize: 26, lineHeight: 1.35, letterSpacing: '-0.005em',
        textAlign: 'center', color: '#0C161B',
        margin: '0 0 28px', textWrap: 'balance',
      }}>{footer}</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          background: '#0C161B', color: '#FFFFFF',
          padding: '20px 46px', borderRadius: 999,
          fontWeight: 700, fontStretch: '132%', fontSize: 22,
          letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>{ctaText}</div>
      </div>
    </div>
  </div>
);

const B = ({ children }) => <strong style={{ fontWeight: 700 }}>{children}</strong>;

const VarA = () => (
  <Ad
    headline={<>Me dê 60 minutos para transformar o time de vendedores da sua loja em uma máquina de bater metas</>}
    sub={<>Diagnóstico 1:1 de Ativação Comercial com a metodologia que <B>gerou 8,2 bilhões em vendas nos últimos 12 meses</B> sem "motivaçãozinha" e dinâmicas de coach.</>}
    footer={<>Sessão exclusiva <B>para donos de lojas</B> com equipe de vendas.</>}
  />
);

const VarB = () => (
  <Ad
    headline={<>Me dê 60 minutos para transformar o time de vendedores da sua loja em uma máquina de bater metas</>}
    sub={<>Diagnóstico 1:1 com a metodologia que <B>gerou R$ 8,2 bi em vendas no último ano</B> — sem motivacional, sem dinâmica de coach, sem palestrinha.</>}
    footer={<>Sessão exclusiva <B>para donos de varejo</B> com time de vendas próprio.</>}
  />
);

const VarC = () => (
  <div style={{
    width: AD_W, height: AD_H, background: '#FFBE18', color: '#0C161B',
    fontFamily: "'SF Pro', 'Roboto Flex', -apple-system, sans-serif",
    position: 'relative', overflow: 'hidden',
    display: 'flex', flexDirection: 'column',
  }}>
    <img src="../../../brand/assets/symbols/simbolo_metta_azul.svg" alt="" aria-hidden="true"
      style={{ position:'absolute', right:-180, top:-180, width:600, opacity:0.10 }}/>
    <div style={{ paddingTop: 48, display: 'flex', justifyContent: 'center', position:'relative', zIndex:1 }}>
      <img src="../../../brand/assets/logos/logo_metta_colorido_escuro_h.svg" alt="Metta" style={{ height: 38 }}/>
    </div>
    <h1 style={{
      fontWeight: 870, fontStretch: '132%',
      fontSize: 70, lineHeight: 1.0, letterSpacing: '-0.015em', textTransform: 'uppercase',
      textAlign: 'center', color: '#0C161B',
      margin: '50px 70px 0', textWrap: 'balance', position:'relative', zIndex:1,
    }}>Me dê 60 minutos para transformar o time de vendedores da sua loja em uma máquina de bater metas</h1>
    <p style={{
      fontWeight: 410, fontStretch: '100%', fontSize: 30, lineHeight: 1.35,
      letterSpacing: '-0.005em', textAlign: 'center',
      color: 'rgba(12,22,27,0.82)', margin: '34px 80px 0', textWrap: 'balance', position:'relative', zIndex:1,
    }}>Diagnóstico 1:1 com a metodologia que <B>gerou R$ 8,2 bi em vendas</B> — sem motivacional, sem dinâmica de coach.</p>
    <div style={{ flex:1 }}/>
    <div style={{ padding: '0 80px 56px', position:'relative', zIndex:1 }}>
      <p style={{
        fontWeight: 410, fontSize: 26, lineHeight: 1.35, letterSpacing: '-0.005em',
        textAlign: 'center', color: '#0C161B', margin: '0 0 28px', textWrap: 'balance',
      }}>Sessão exclusiva <B>para donos de lojas</B> com equipe de vendas.</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          background: '#0C161B', color: '#FFBE18', padding: '20px 46px', borderRadius: 999,
          fontWeight: 700, fontStretch: '132%', fontSize: 22, letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>Toque no link abaixo</div>
      </div>
    </div>
  </div>
);

const App = () => (
  <DesignCanvas title="Metta · Anúncio 60 minutos · Variações para loja">
    <DCSection id="ads" title="Anúncios · 1080×1350">
      <DCArtboard id="a" label="A · Branco (template original) · loja" width={AD_W} height={AD_H}>
        <VarA/>
      </DCArtboard>
      <DCArtboard id="b" label="B · Branco · varejo / R$ 8,2 bi" width={AD_W} height={AD_H}>
        <VarB/>
      </DCArtboard>
      <DCArtboard id="c" label="C · Amarelo Metta (variante de marca)" width={AD_W} height={AD_H}>
        <VarC/>
      </DCArtboard>
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
