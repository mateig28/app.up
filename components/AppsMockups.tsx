/* ── Paleta mockup ── */
const bg0   = '#111110'
const bg1   = '#191916'
const bg2   = '#1F1F1B'
const bord  = '#2C2C28'
const cream = '#F2EDE4'
const grey  = '#8C8882'
const muted = '#4A4744'
const terra = '#C14E30'

const sidebar = ['Dashboard', 'Producție', 'Stocuri', 'Vânzări', 'Pontaj']

function Chrome({ label, badge }: { label: string; badge?: React.ReactNode }) {
  return (
    <div style={{ background: bg2, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: `1px solid ${bord}` }}>
      <div style={{ display: 'flex', gap: 5 }}>
        {['#EF4444','#F59E0B','#22C55E'].map((c) => (
          <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.45 }} />
        ))}
      </div>
      <div style={{ flex: 1, background: bg0, borderRadius: 5, padding: '3px 10px', fontSize: 11, color: muted, marginLeft: 4 }}>
        {label}
      </div>
      {badge}
    </div>
  )
}

function Sidebar({ active = 0 }: { active?: number }) {
  return (
    <div className="mockup-sidebar" style={{ width: 160, borderRight: `1px solid ${bord}`, padding: '0', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '12px 16px 10px', borderBottom: `1px solid ${bord}` }}>
        <div style={{ fontSize: 9, color: muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 2 }}>Metalex SRL</div>
        <div style={{ fontSize: 8, color: muted, opacity: 0.5 }}>Brașov · producție</div>
      </div>
      <div style={{ padding: '8px 0' }}>
        {sidebar.map((item, i) => (
          <div key={item} style={{ padding: '8px 16px', fontSize: 12, color: i === active ? cream : muted, background: i === active ? '#262420' : 'transparent', borderLeft: i === active ? `2px solid ${terra}` : `2px solid transparent`, cursor: 'default' }}>
            {item}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 'auto', padding: '10px 16px', borderTop: `1px solid ${bord}` }}>
        <div style={{ fontSize: 9, color: muted, marginBottom: 2 }}>Dan Ionescu</div>
        <div style={{ fontSize: 8, color: muted, opacity: 0.5 }}>Director general</div>
      </div>
    </div>
  )
}

function KpiCard({ label, value, sub, dim }: { label: string; value: string; sub?: string; dim?: boolean }) {
  return (
    <div style={{ background: bg2, border: `1px solid ${bord}`, borderRadius: 8, padding: '10px 12px' }}>
      <div style={{ fontSize: 9, color: grey, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 700, color: dim ? muted : cream, marginBottom: 3, fontFamily: 'var(--font-jakarta)', lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: 10, color: dim ? muted : grey }}>{sub}</div>}
    </div>
  )
}

export const appsMockups = [
  /* ─── Etapa 0 — Problema: date vechi, lipsă vizibilitate ─── */
  <div style={{ background: bg0, border: `1px solid ${bord}`, borderRadius: 12, overflow: 'hidden', fontFamily: 'var(--font-jakarta)' }}>
    <Chrome label="dashboard.firma.ro" badge={
      <span className="mockup-warning-hide" style={{ fontSize: 10, color: '#8C8882', background: '#2C2C28', padding: '2px 8px', borderRadius: 4 }}>
        ⚠ Ultima actualizare: acum 7 zile
      </span>
    } />
    <div style={{ display: 'flex', minHeight: 320 }}>
      <Sidebar active={0} />
      <div style={{ flex: 1, padding: '16px 18px', minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: cream }}>Dashboard</span>
          <span style={{ fontSize: 10, color: muted, background: bg2, padding: '3px 8px', borderRadius: 4, border: `1px solid ${bord}` }}>
            Luni, 14 Apr — date lipsă
          </span>
        </div>
        <div className="mockup-kpi-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 14 }}>
          <KpiCard label="Stoc Cluj" value="—" sub="neconfirmat" dim />
          <KpiCard label="Pontaj azi" value="—" sub="nesincronizat" dim />
          <KpiCard label="Comenzi" value="—" sub="date manuale" dim />
        </div>
        <div style={{ background: bg2, border: `1px solid ${bord}`, borderRadius: 8, padding: '12px 14px', marginBottom: 12 }}>
          <div style={{ fontSize: 9, color: grey, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>Rapoarte recente</div>
          {[
            { data: '07 Apr', tip: 'Raport producție', status: 'primit via WhatsApp', dim: true },
            { data: '31 Mar', tip: 'Stoc depozit', status: 'fișier Excel atașat', dim: true },
            { data: '24 Mar', tip: 'Pontaj ture', status: 'completat manual', dim: true },
          ].map((r) => (
            <div key={r.data} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: `1px solid ${bord}`, fontSize: 11 }}>
              <div style={{ display: 'flex', gap: 8 }}>
                <span style={{ color: muted, minWidth: 40 }}>{r.data}</span>
                <span style={{ color: grey }}>{r.tip}</span>
              </div>
              <span style={{ color: muted, fontSize: 10 }}>{r.status}</span>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 10, color: muted, fontStyle: 'italic' }}>
          Deciziile de azi se iau cu date de acum 7 zile.
        </div>
      </div>
    </div>
  </div>,

  /* ─── Etapa 1 — Discovery: mapăm procesele ─── */
  <div style={{ background: bg0, border: `1px solid ${bord}`, borderRadius: 12, overflow: 'hidden', fontFamily: 'var(--font-jakarta)' }}>
    <Chrome label="croit.ro / discovery — Metalex SRL" />
    <div style={{ display: 'flex', minHeight: 320 }}>
      <Sidebar active={0} />
      <div style={{ flex: 1, padding: '16px 18px', minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: cream }}>Analiză procese</span>
          <span style={{ fontSize: 10, color: terra, background: `${terra}15`, padding: '3px 8px', borderRadius: 4, border: `1px solid ${terra}30` }}>
            Săptămâna 1 / 1
          </span>
        </div>
        <div style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: grey, marginBottom: 5 }}>
            <span>Procese mapate</span>
            <span style={{ color: cream }}>4 din 6</span>
          </div>
          <div style={{ height: 4, background: bord, borderRadius: 2 }}>
            <div style={{ width: '67%', height: '100%', background: terra, borderRadius: 2 }} />
          </div>
        </div>
        {[
          { done: true,  text: 'Flux comandă → producție → livrare' },
          { done: true,  text: 'Pontaj și ture — Linia 1, Linia 3' },
          { done: true,  text: 'Gestiune stocuri: Cluj + Brașov' },
          { done: true,  text: 'Raportare vânzări și clienți recurenți' },
          { done: false, text: 'Distribuție și rute de livrare' },
          { done: false, text: 'Integrare date furnizori' },
        ].map((item) => (
          <div key={item.text} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, padding: '6px 0', fontSize: 12, color: item.done ? cream : muted, borderBottom: `1px solid ${bord}22` }}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', flexShrink: 0, marginTop: 1, background: item.done ? terra : 'transparent', border: item.done ? 'none' : `1px solid ${bord}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#fff' }}>
              {item.done ? '✓' : ''}
            </div>
            {item.text}
          </div>
        ))}
        <div style={{ marginTop: 12, padding: '9px 12px', background: `${terra}0A`, border: `1px solid ${terra}20`, borderRadius: 6, fontSize: 11, color: terra }}>
          Output final: scope complet + preț fix + termen de livrare
        </div>
      </div>
    </div>
  </div>,

  /* ─── Etapa 2 — Build: construcție sprint cu sprint ─── */
  <div style={{ background: bg0, border: `1px solid ${bord}`, borderRadius: 12, overflow: 'hidden', fontFamily: 'var(--font-jakarta)' }}>
    <Chrome label="preview.croit.ro / metalex" badge={
      <span className="mockup-warning-hide" style={{ fontSize: 10, color: grey, background: bg2, padding: '2px 8px', borderRadius: 4, border: `1px solid ${bord}` }}>
        Sprint 3 / 6
      </span>
    } />
    <div style={{ display: 'flex', minHeight: 320 }}>
      <Sidebar active={0} />
      <div style={{ flex: 1, padding: '16px 18px', minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: cream }}>Progres module</span>
          <span style={{ fontSize: 10, color: grey }}>Săptămâna 3 din 6</span>
        </div>
        {[
          { label: 'Dashboard principal',    pct: 100, status: 'livrat' },
          { label: 'Gestiune stocuri',       pct: 100, status: 'livrat' },
          { label: 'Pontaj și ture',         pct: 65,  status: 'în lucru' },
          { label: 'Rapoarte automate',      pct: 0,   status: 'urmează' },
        ].map((m) => (
          <div key={m.label} style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 5 }}>
              <span style={{ color: m.pct === 100 ? cream : m.pct > 0 ? cream : muted }}>{m.label}</span>
              <span style={{ fontSize: 10, color: m.pct === 100 ? terra : m.pct > 0 ? grey : muted }}>{m.status}</span>
            </div>
            <div style={{ height: 3, background: bord, borderRadius: 2 }}>
              <div style={{ width: `${m.pct}%`, height: '100%', background: m.pct === 100 ? terra : m.pct > 0 ? `${terra}80` : 'transparent', borderRadius: 2, transition: 'width 0.6s ease' }} />
            </div>
          </div>
        ))}
        <div style={{ padding: '10px 12px', background: bg2, border: `1px solid ${bord}`, borderRadius: 6, marginTop: 4 }}>
          <div style={{ fontSize: 10, color: grey, marginBottom: 6 }}>Ultimul update primit:</div>
          <div style={{ fontSize: 11, color: cream }}>„Modulul de stocuri funcționează exact cum aveam nevoie. Pontajul arată bine, mai ajustăm o regulă de tură." — Dan, Director</div>
          <div style={{ fontSize: 9, color: muted, marginTop: 4 }}>Vineri, 18 Apr · acces versiune test disponibil →</div>
        </div>
      </div>
    </div>
  </div>,

  /* ─── Etapa 3 — Predare: totul livrat, training finalizat ─── */
  <div style={{ background: bg0, border: `1px solid ${bord}`, borderRadius: 12, overflow: 'hidden', fontFamily: 'var(--font-jakarta)' }}>
    <Chrome label="dashboard.metalex.ro" badge={
      <span style={{ fontSize: 10, color: cream, background: `${terra}20`, padding: '2px 8px', borderRadius: 4, border: `1px solid ${terra}40` }}>
        ✓ Predare completă
      </span>
    } />
    <div style={{ display: 'flex', minHeight: 320 }}>
      <Sidebar active={0} />
      <div style={{ flex: 1, padding: '16px 18px', minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: cream }}>Dashboard</span>
          <span style={{ fontSize: 10, color: grey }}>Marți, 6 Mai</span>
        </div>
        <div className="mockup-kpi-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 14 }}>
          <KpiCard label="Stoc Cluj" value="2.847 kg" sub="↑ actualizat azi" />
          <KpiCard label="Pontaj azi" value="96%" sub="23 / 24 prezenți" />
          <KpiCard label="Comenzi" value="38" sub="7 în livrare azi" />
        </div>
        <div style={{ background: bg2, border: `1px solid ${bord}`, borderRadius: 8, padding: '10px 14px', marginBottom: 12 }}>
          <div style={{ fontSize: 9, color: grey, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Checklist predare</div>
          {[
            'Aplicație funcțională și testată',
            'Documentație tehnică predată',
            'Training echipă: 12 utilizatori',
            'Cod sursă transferat pe serverele Metalex',
          ].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0', fontSize: 11, color: cream, borderBottom: `1px solid ${bord}30` }}>
              <div style={{ width: 14, height: 14, borderRadius: '50%', background: terra, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#fff', flexShrink: 0 }}>✓</div>
              {item}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 10, color: muted }}>Suport 3 luni inclus · cod 100% al tău</div>
      </div>
    </div>
  </div>,

  /* ─── Etapa 4 — Live: dashboard activ, date în timp real ─── */
  <div style={{ background: bg0, border: `1px solid ${bord}`, borderRadius: 12, overflow: 'hidden', fontFamily: 'var(--font-jakarta)' }}>
    <Chrome label="dashboard.metalex.ro" badge={
      <span style={{ fontSize: 10, color: cream, display: 'flex', alignItems: 'center', gap: 5 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: cream, display: 'inline-block', boxShadow: `0 0 5px ${cream}` }} />
        LIVE · acum 2 min
      </span>
    } />
    <div style={{ display: 'flex', minHeight: 320 }}>
      <Sidebar active={0} />
      <div style={{ flex: 1, padding: '16px 18px', minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: cream }}>Dashboard · Marți, 6 Mai</span>
          <span style={{ fontSize: 10, color: grey }}>Linia 1 + 3 active</span>
        </div>
        <div className="mockup-kpi-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 14 }}>
          <KpiCard label="Stoc Cluj" value="2.847 kg" sub="↑ 12% față de ieri" />
          <KpiCard label="OEE Linia 3" value="89%" sub="↑ target: 85%" />
          <KpiCard label="Livrări azi" value="7 / 9" sub="2 programate 15:00" />
        </div>
        <div style={{ background: bg2, border: `1px solid ${bord}`, borderRadius: 8, padding: '10px 14px', marginBottom: 10 }}>
          <div style={{ fontSize: 9, color: grey, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Producție — ultimele 7 zile (buc/zi)</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 48 }}>
            {[52, 67, 59, 74, 81, 78, 94].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${(h / 94) * 100}%`, background: i === 6 ? terra : `${bord}CC`, borderRadius: '2px 2px 0 0' }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            {['L','Ma','Mi','J','V','S','D'].map((z) => (
              <span key={z} style={{ flex: 1, textAlign: 'center', fontSize: 8, color: muted }}>{z}</span>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[
            { ora: '11:05', text: 'Alertă: Șuruburi M8 sub stoc minim (Cluj)' },
            { ora: '10:32', text: 'Comanda #C-2847 marcată ca livrată' },
            { ora: '09:14', text: 'Intrare materie primă: 850 kg tablă 3mm' },
          ].map((ev) => (
            <div key={ev.ora} style={{ display: 'flex', gap: 10, fontSize: 10, padding: '4px 0', borderBottom: `1px solid ${bord}30` }}>
              <span style={{ color: muted, flexShrink: 0 }}>{ev.ora}</span>
              <span style={{ color: grey }}>{ev.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>,
]
