export const appsMockups = [
  // Etapa 0 — Problema
  <div style={{ background: '#191916', border: '1px solid #2C2C28', borderRadius: 12, overflow: 'hidden', fontFamily: 'monospace' }}>
    <div style={{ background: '#1F1F1B', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid #2C2C28' }}>
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22C55E' }} />
      </div>
      <div style={{ flex: 1, background: '#191916', borderRadius: 6, padding: '4px 12px', fontSize: 12, color: '#6B6763', marginLeft: 8 }}>
        dashboard.firma.ro
      </div>
      <span className="mockup-warning-hide" style={{ fontSize: 12, color: '#EF4444' }}>⚠ Ultima actualizare: 7 zile în urmă</span>
    </div>
    <div style={{ display: 'flex', minHeight: 320 }}>
      <div className="mockup-sidebar" style={{ width: 180, borderRight: '1px solid #2C2C28', padding: '16px 0' }}>
        {['Dashboard', 'Producție', 'Stocuri', 'Vânzări', 'Pontaj'].map((item, i) => (
          <div key={item} style={{ padding: '10px 16px', fontSize: 13, color: i === 0 ? '#F2EDE4' : '#4A4744', background: i === 0 ? '#262420' : 'transparent', borderLeft: i === 0 ? '2px solid #C14E30' : '2px solid transparent' }}>
            {item}
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: 20, minWidth: 0 }}>
        <div className="mockup-kpi-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 16 }}>
          {[
            { label: 'STOC CLUJ', value: '?', sub: '△ date lipsă' },
            { label: 'PONTAJ AZI', value: '?', sub: 'neconfirmat' },
            { label: 'COMENZI', value: '?', sub: 'necunoscut' },
          ].map((kpi) => (
            <div key={kpi.label} style={{ background: '#1F1F1B', border: '1px solid #EF444430', borderRadius: 8, padding: 14 }}>
              <div style={{ fontSize: 10, color: '#6B6763', letterSpacing: '0.08em', marginBottom: 8 }}>{kpi.label}</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#EF4444', marginBottom: 4 }}>{kpi.value}</div>
              <div style={{ fontSize: 11, color: '#EF4444' }}>{kpi.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ background: '#1F1F1B', border: '1px solid #2C2C28', borderRadius: 8, padding: 16, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 12, color: '#EF4444', fontFamily: 'monospace', textAlign: 'center' }}>Date indisponibile — raport manual în așteptare</span>
        </div>
      </div>
    </div>
  </div>,

  // Etapa 1 — Discovery
  <div style={{ background: '#191916', border: '1px solid #2C2C28', borderRadius: 12, overflow: 'hidden' }}>
    <div style={{ background: '#1F1F1B', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid #2C2C28' }}>
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22C55E' }} />
      </div>
      <div style={{ flex: 1, background: '#191916', borderRadius: 6, padding: '4px 12px', fontSize: 12, color: '#6B6763', marginLeft: 8 }}>dashboard.firma.ro</div>
    </div>
    <div style={{ display: 'flex', minHeight: 320 }}>
      <div className="mockup-sidebar" style={{ width: 180, borderRight: '1px solid #2C2C28', padding: '16px 0' }}>
        {['Dashboard', 'Producție', 'Stocuri', 'Vânzări', 'Pontaj'].map((item, i) => (
          <div key={item} style={{ padding: '10px 16px', fontSize: 13, color: i === 0 ? '#F2EDE4' : '#4A4744' }}>{item}</div>
        ))}
      </div>
      <div style={{ flex: 1, padding: 20, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#F2EDE4' }}>Analiză în curs</span>
          <span style={{ fontSize: 12, color: '#C14E30', fontFamily: 'monospace' }}>Săptămâna 1</span>
        </div>
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#6B6763', marginBottom: 6 }}>
            <span>Procese mapate</span><span>4 / 6</span>
          </div>
          <div style={{ height: 4, background: '#2C2C28', borderRadius: 2 }}>
            <div style={{ width: '66%', height: '100%', background: '#C14E30', borderRadius: 2 }} />
          </div>
        </div>
        {[
          { done: true, text: 'Flux comandă → producție' },
          { done: true, text: 'Pontaj și ture' },
          { done: true, text: 'Gestionare stocuri' },
          { done: true, text: 'Raportare vânzări' },
          { done: false, text: 'Distribuție și livrări' },
          { done: false, text: 'Integrare furnizori' },
        ].map((item) => (
          <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', fontSize: 13, color: item.done ? '#F2EDE4' : '#4A4744' }}>
            <div style={{ width: 18, height: 18, borderRadius: '50%', background: item.done ? '#C14E30' : 'transparent', border: item.done ? 'none' : '1px solid #4A4744', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#fff', flexShrink: 0 }}>
              {item.done ? '✓' : ''}
            </div>
            {item.text}
          </div>
        ))}
        <div style={{ marginTop: 12, padding: '10px 14px', border: '1px solid #C14E3020', borderRadius: 6, background: '#C14E3008', fontFamily: 'monospace', fontSize: 12, color: '#C14E30' }}>
          La final primești scope complet + preț fix
        </div>
      </div>
    </div>
  </div>,

  // Etapa 2 — Build
  <div style={{ background: '#191916', border: '1px solid #2C2C28', borderRadius: 12, overflow: 'hidden' }}>
    <div style={{ background: '#1F1F1B', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid #2C2C28' }}>
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22C55E' }} />
      </div>
      <div style={{ flex: 1, background: '#191916', borderRadius: 6, padding: '4px 12px', fontSize: 12, color: '#6B6763', marginLeft: 8 }}>dashboard.firma.ro</div>
      <span className="mockup-warning-hide" style={{ fontSize: 11, color: '#F59E0B', fontFamily: 'monospace' }}>Build în curs — Săpt. 3</span>
    </div>
    <div style={{ display: 'flex', minHeight: 320 }}>
      <div className="mockup-sidebar" style={{ width: 180, borderRight: '1px solid #2C2C28', padding: '16px 0' }}>
        {['Dashboard', 'Producție', 'Stocuri', 'Vânzări', 'Pontaj'].map((item, i) => (
          <div key={item} style={{ padding: '10px 16px', fontSize: 13, color: i === 0 ? '#F2EDE4' : '#4A4744' }}>{item}</div>
        ))}
      </div>
      <div style={{ flex: 1, padding: 20, minWidth: 0 }}>
        {[
          { label: 'Dashboard principal', status: 'livrat', pct: 100 },
          { label: 'Modul stocuri', status: 'livrat', pct: 100 },
          { label: 'Modul pontaj', status: 'în lucru', pct: 60 },
          { label: 'Rapoarte automate', status: 'urmează', pct: 0 },
        ].map((m) => (
          <div key={m.label} style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: m.pct === 100 ? '#F2EDE4' : m.pct > 0 ? '#F59E0B' : '#4A4744', marginBottom: 6 }}>
              <span>{m.label}</span>
              <span style={{ fontFamily: 'monospace', fontSize: 11 }}>{m.status}</span>
            </div>
            <div style={{ height: 3, background: '#2C2C28', borderRadius: 2 }}>
              <div style={{ width: `${m.pct}%`, height: '100%', background: m.pct === 100 ? '#22C55E' : '#F59E0B', borderRadius: 2, transition: 'width 0.6s ease' }} />
            </div>
          </div>
        ))}
        <div style={{ marginTop: 8, fontSize: 12, color: '#4A4744', fontFamily: 'monospace' }}>
          ↻ Ai acces la versiunea de test în fiecare vineri
        </div>
      </div>
    </div>
  </div>,

  // Etapa 3 — Predare
  <div style={{ background: '#191916', border: '1px solid #2C2C28', borderRadius: 12, overflow: 'hidden' }}>
    <div style={{ background: '#1F1F1B', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid #2C2C28' }}>
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22C55E' }} />
      </div>
      <div style={{ flex: 1, background: '#191916', borderRadius: 6, padding: '4px 12px', fontSize: 12, color: '#6B6763', marginLeft: 8 }}>dashboard.firma.ro</div>
      <span style={{ fontSize: 11, color: '#22C55E', fontFamily: 'monospace' }}>● Predare completă</span>
    </div>
    <div style={{ display: 'flex', minHeight: 320 }}>
      <div className="mockup-sidebar" style={{ width: 180, borderRight: '1px solid #2C2C28', padding: '16px 0' }}>
        {['Dashboard', 'Producție', 'Stocuri', 'Vânzări', 'Pontaj'].map((item, i) => (
          <div key={item} style={{ padding: '10px 16px', fontSize: 13, color: i === 0 ? '#F2EDE4' : '#8C8882', background: i === 0 ? '#262420' : 'transparent', borderLeft: i === 0 ? '2px solid #C14E30' : '2px solid transparent' }}>{item}</div>
        ))}
      </div>
      <div style={{ flex: 1, padding: 20, minWidth: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
          {[
            { label: 'STOC CLUJ', value: '847 buc', trend: '↑' },
            { label: 'PONTAJ AZI', value: '94%', trend: '✓' },
            { label: 'COMENZI LIVRATE', value: '23', trend: '' },
            { label: 'OEE LINIE 2', value: '87%', trend: '' },
          ].map((kpi) => (
            <div key={kpi.label} style={{ background: '#1F1F1B', border: '1px solid #2C2C28', borderRadius: 8, padding: 12 }}>
              <div style={{ fontSize: 10, color: '#6B6763', letterSpacing: '0.08em', marginBottom: 6 }}>{kpi.label}</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#C14E30' }}>{kpi.value} <span style={{ fontSize: 14, color: '#22C55E' }}>{kpi.trend}</span></div>
            </div>
          ))}
        </div>
        <div style={{ background: '#22C55E10', border: '1px solid #22C55E30', borderRadius: 6, padding: '10px 14px', fontSize: 12, color: '#22C55E', fontFamily: 'monospace' }}>
          ● Training echipă finalizat — aplicația predată
        </div>
      </div>
    </div>
  </div>,

  // Etapa 4 — Live
  <div style={{ background: '#191916', border: '1px solid #2C2C28', borderRadius: 12, overflow: 'hidden' }}>
    <div style={{ background: '#1F1F1B', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid #2C2C28' }}>
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22C55E' }} />
      </div>
      <div style={{ flex: 1, background: '#191916', borderRadius: 6, padding: '4px 12px', fontSize: 12, color: '#6B6763', marginLeft: 8 }}>dashboard.firma.ro</div>
      <span style={{ fontSize: 11, color: '#22C55E', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: 5 }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', display: 'inline-block', boxShadow: '0 0 6px #22C55E' }} />
        LIVE — actualizat acum 2 min
      </span>
    </div>
    <div style={{ display: 'flex', minHeight: 320 }}>
      <div className="mockup-sidebar" style={{ width: 180, borderRight: '1px solid #2C2C28', padding: '16px 0' }}>
        {['Dashboard', 'Producție', 'Stocuri', 'Vânzări', 'Pontaj'].map((item, i) => (
          <div key={item} style={{ padding: '10px 16px', fontSize: 13, color: i === 0 ? '#F2EDE4' : '#8C8882', background: i === 0 ? '#262420' : 'transparent', borderLeft: i === 0 ? '2px solid #C14E30' : '2px solid transparent' }}>{item}</div>
        ))}
      </div>
      <div style={{ flex: 1, padding: 20, minWidth: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
          {[
            { label: 'STOC CLUJ', value: '847 buc', trend: '↑ 12%' },
            { label: 'PONTAJ AZI', value: '94%', trend: '✓ normal' },
            { label: 'COMENZI LIVRATE', value: '23', trend: '4 în livrare' },
            { label: 'OEE LINIE 2', value: '87%', trend: '↑ față de ieri' },
          ].map((kpi) => (
            <div key={kpi.label} style={{ background: '#1F1F1B', border: '1px solid #2C2C28', borderRadius: 8, padding: 12 }}>
              <div style={{ fontSize: 10, color: '#6B6763', letterSpacing: '0.08em', marginBottom: 6 }}>{kpi.label}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#C14E30', marginBottom: 2 }}>{kpi.value}</div>
              <div style={{ fontSize: 11, color: '#22C55E' }}>{kpi.trend}</div>
            </div>
          ))}
        </div>
        <div style={{ background: '#1F1F1B', border: '1px solid #2C2C28', borderRadius: 8, padding: 12, height: 70, display: 'flex', alignItems: 'flex-end', gap: 4 }}>
          {[40, 55, 48, 62, 58, 71, 87].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 6 ? '#C14E30' : '#2C2C28', borderRadius: '2px 2px 0 0', transition: 'height 0.6s ease' }} />
          ))}
        </div>
      </div>
    </div>
  </div>,
]
