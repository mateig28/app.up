'use client'

import { motion } from 'framer-motion'

const bg0   = '#0A0A08'
const bg1   = '#111110'
const bg2   = '#1A1A17'
const bord  = '#2C2C28'
const cream = '#F2EDE4'
const grey  = '#8C8882'
const muted = '#4A4744'
const terra = '#C14E30'

function BrowserChrome({ url, children, badge }: { url: string; children: React.ReactNode; badge?: React.ReactNode }) {
  return (
    <div style={{ background: bg0, border: `1px solid ${bord}`, borderRadius: 12, overflow: 'hidden', height: 420, display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-jakarta)' }}>
      <div style={{ borderBottom: `1px solid ${bord}`, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0, background: bg1 }}>
        {['#EF4444', '#EAB308', '#22C55E'].map((c) => (
          <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.45 }} />
        ))}
        <div style={{ flex: 1, marginLeft: 6, height: 18, background: bg0, border: `1px solid ${bord}`, borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8, paddingRight: 8, justifyContent: 'space-between' }}>
          <span style={{ fontSize: 8, color: muted }}>{url}</span>
          {badge}
        </div>
      </div>
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        {children}
      </div>
    </div>
  )
}

/* ── Step 0: Site vechi, neprofesional ── */
export function SitesMockup0() {
  return (
    <BrowserChrome url="firma-noastra.ro">
      <div style={{ background: '#F5F5F2', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* old nav */}
        <div style={{ background: '#EFEFED', borderBottom: '1px solid #D5D5D0', padding: '7px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: '#333', fontFamily: 'Georgia, serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Firma Noastră SRL</span>
          <div style={{ display: 'flex', gap: 12 }}>
            {['Acasă', 'Despre noi', 'Servicii', 'Contact'].map((l) => (
              <span key={l} style={{ fontSize: 8.5, color: '#666', fontFamily: 'Arial, sans-serif' }}>{l}</span>
            ))}
          </div>
        </div>

        {/* stale hero */}
        <div style={{ background: '#E8E8E5', borderBottom: '1px solid #D5D5D0', padding: '20px 20px 14px', textAlign: 'center' }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: '#222', fontFamily: 'Georgia, serif', marginBottom: 8 }}>
            Bine ați venit pe site-ul nostru!
          </p>
          <p style={{ fontSize: 9, color: '#666', fontFamily: 'Arial, sans-serif', lineHeight: 1.65, maxWidth: 260, margin: '0 auto 12px' }}>
            Firma noastră activează pe piață din 2008 și oferă servicii de calitate. Contactați-ne pentru orice solicitare.
          </p>
          <div style={{ display: 'inline-block', padding: '5px 14px', background: '#888', color: '#fff', fontSize: 9, fontFamily: 'Arial, sans-serif', borderRadius: 2 }}>
            Contactați-ne
          </div>
        </div>

        {/* analytics warning */}
        <div style={{ margin: '10px 16px 0', padding: '6px 10px', background: '#FFF8E1', border: '1px solid #E5D080', borderRadius: 3 }}>
          <span style={{ fontSize: 8.5, color: '#7A5C00', fontFamily: 'Arial, sans-serif' }}>
            ⚠ Timp mediu pe site: 18 sec · Bounce rate: 89% · Ultima actualizare: 2021
          </span>
        </div>

        {/* content */}
        <div style={{ padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { title: 'Despre noi', body: 'Firma noastră activează de mulți ani pe piață, oferind servicii diverse la standarde ridicate de calitate pentru toți clienții noștri.' },
            { title: 'Serviciile noastre', body: 'Oferim o gamă variată de servicii. Ne adresăm atât persoanelor fizice cât și juridice. Vă așteptăm cu drag!' },
          ].map(({ title, body }) => (
            <div key={title} style={{ background: '#fff', border: '1px solid #DDDDD8', padding: '9px 11px', borderRadius: 2 }}>
              <p style={{ fontSize: 9.5, fontWeight: 700, color: '#222', fontFamily: 'Georgia, serif', marginBottom: 4 }}>{title}</p>
              <p style={{ fontSize: 8.5, color: '#777', fontFamily: 'Arial, sans-serif', lineHeight: 1.55 }}>{body}</p>
            </div>
          ))}
          <div style={{ marginTop: 4, borderTop: '1px solid #DDD', paddingTop: 8 }}>
            <p style={{ fontSize: 8, color: '#BBB', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
              © 2021 Firma Noastră SRL · Toate drepturile rezervate · Tel: 0740 000 000
            </p>
          </div>
        </div>
      </div>
    </BrowserChrome>
  )
}

/* ── Step 1: Planificare — structura site-ului ── */
export function SitesMockup1() {
  return (
    <BrowserChrome url="croit.ro / brief — Petrescu Arhitectură">
      <div style={{ background: bg0, height: '100%', position: 'relative', overflow: 'hidden', padding: '14px 18px' }}>
        {/* grid bg */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: `linear-gradient(${cream} 1px,transparent 1px),linear-gradient(90deg,${cream} 1px,transparent 1px)`, backgroundSize: '20px 20px' }} />

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 9 }}>
          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <span style={{ fontSize: 10, color: grey, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Structura site-ului</span>
            <span style={{ fontSize: 9, color: terra, background: `${terra}15`, padding: '2px 8px', borderRadius: 4, border: `1px solid ${terra}30` }}>Brief aprobat ✓</span>
          </div>

          {/* Hero block */}
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.5 }}
            style={{ border: `1.5px dashed ${cream}22`, borderRadius: 6, padding: '12px 14px', background: `${cream}03` }}>
            <p style={{ fontSize: 8, color: muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 7 }}>Hero</p>
            <div style={{ width: '65%', height: 11, background: `${cream}18`, borderRadius: 3, marginBottom: 6 }} />
            <div style={{ width: '45%', height: 7, background: `${cream}10`, borderRadius: 3, marginBottom: 10 }} />
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ width: 80, height: 22, borderRadius: 4, background: terra, opacity: 0.7 }} />
              <div style={{ width: 70, height: 22, borderRadius: 4, border: `1px dashed ${cream}20` }} />
            </div>
          </motion.div>

          {/* 3 sections wireframe */}
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}>
            <p style={{ fontSize: 8, color: muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 7 }}>Secțiunile principale</p>
            <div style={{ display: 'flex', gap: 7 }}>
              {['Portofoliu', 'Servicii', 'Despre noi'].map((s) => (
                <div key={s} style={{ flex: 1, border: `1.5px dashed ${cream}15`, borderRadius: 5, padding: '10px 8px', background: `${cream}02`, display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <p style={{ fontSize: 8, color: grey }}>{s}</p>
                  <div style={{ width: '70%', height: 5, background: `${cream}10`, borderRadius: 2 }} />
                  <div style={{ width: '50%', height: 5, background: `${cream}07`, borderRadius: 2 }} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA + Footer */}
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.5 }}
            style={{ display: 'flex', gap: 7 }}>
            <div style={{ flex: 2, border: `1.5px dashed ${cream}15`, borderRadius: 5, padding: '9px 12px' }}>
              <p style={{ fontSize: 8, color: muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 5 }}>Formular contact</p>
              {[60, 40, 70].map((w, i) => <div key={i} style={{ height: 5, width: `${w}%`, background: `${cream}08`, borderRadius: 2, marginBottom: 4 }} />)}
            </div>
            <div style={{ flex: 1, border: `1.5px dashed ${cream}10`, borderRadius: 5, padding: '9px 12px' }}>
              <p style={{ fontSize: 8, color: muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Footer</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.5 }}
            style={{ padding: '7px 12px', background: `${terra}08`, border: `1px solid ${terra}20`, borderRadius: 6, fontSize: 9, color: terra }}>
            Preț fix: 1.200 EUR · Termen: 10 zile lucrătoare
          </motion.div>
        </div>
      </div>
    </BrowserChrome>
  )
}

/* ── Step 2: Build — site parțial construit ── */
export function SitesMockup2() {
  return (
    <BrowserChrome url="preview.croit.ro/petrescu-arhitectura"
      badge={<span style={{ fontSize: 8, color: grey }}>68% complet</span>}>
      <div style={{ background: bg0, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Progress bar */}
        <div style={{ padding: '7px 14px', background: bg1, borderBottom: `1px solid ${bord}`, flexShrink: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 8, color: terra }}>Design complet</span>
            <span style={{ fontSize: 8, color: muted }}>Content în integrare</span>
          </div>
          <div style={{ height: 3, background: bord, borderRadius: 2 }}>
            <motion.div style={{ height: '100%', borderRadius: 2, background: terra }} initial={{ width: 0 }} animate={{ width: '68%' }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} />
          </div>
        </div>

        {/* Partial site nav */}
        <div style={{ padding: '7px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${bord}`, flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 12, height: 12, borderRadius: 2, background: terra, opacity: 0.8 }} />
            <span style={{ fontSize: 9, fontWeight: 600, color: cream, letterSpacing: '0.05em' }}>PETRESCU</span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {['Portofoliu', 'Servicii', 'Contact'].map((l) => <span key={l} style={{ fontSize: 8, color: grey }}>{l}</span>)}
            <div style={{ background: terra, borderRadius: 3, padding: '3px 7px' }}>
              <span style={{ fontSize: 8, color: cream }}>Ofertă</span>
            </div>
          </div>
        </div>

        {/* Hero — visible */}
        <div style={{ padding: '16px 14px 12px', background: `radial-gradient(ellipse 60% 60% at 20% 50%, rgba(193,78,48,0.08) 0%, transparent 70%)`, flexShrink: 0 }}>
          <div style={{ width: '62%', height: 13, background: `${cream}80`, borderRadius: 3, marginBottom: 7 }} />
          <div style={{ width: '44%', height: 9, background: `${cream}40`, borderRadius: 3, marginBottom: 12 }} />
          <div style={{ display: 'flex', gap: 7 }}>
            <div style={{ width: 80, height: 22, borderRadius: 4, background: terra }} />
            <div style={{ width: 70, height: 22, borderRadius: 4, border: `1px solid ${bord}` }} />
          </div>
        </div>

        {/* 3 cards partial */}
        <div style={{ padding: '0 14px 10px', display: 'flex', gap: 7, flexShrink: 0 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ flex: 1, background: bg2, border: `1px solid ${bord}`, borderRadius: 6, padding: '9px 9px', display: 'flex', flexDirection: 'column', gap: 5 }}>
              <div style={{ width: 16, height: 16, borderRadius: 3, background: `${cream}08`, border: `1px solid ${bord}` }} />
              <div style={{ width: '65%', height: 6, background: `${cream}40`, borderRadius: 2 }} />
              <div style={{ width: '80%', height: 5, background: `${cream}20`, borderRadius: 2 }} />
              <div style={{ width: '55%', height: 5, background: `${cream}14`, borderRadius: 2 }} />
            </div>
          ))}
        </div>

        {/* rest — in progress */}
        <div style={{ flex: 1, margin: '0 14px', borderRadius: 6, border: `1px dashed ${bord}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 9, color: muted }}>Secțiunile următoare — în integrare</span>
        </div>
      </div>
    </BrowserChrome>
  )
}

/* ── Step 3: Lansare — site complet live ── */
export function SitesMockup3() {
  return (
    <BrowserChrome url="arhitecturapetrescu.ro"
      badge={<span style={{ fontSize: 8, color: grey, display: 'flex', alignItems: 'center', gap: 4 }}>
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: cream, opacity: 0.7, display: 'inline-block' }} />indexat Google
      </span>}>
      <div style={{ background: bg0, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* nav */}
        <div style={{ padding: '7px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${bord}`, flexShrink: 0, background: bg0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 14, height: 14, borderRadius: 2, background: terra, opacity: 0.9 }} />
            <span style={{ fontSize: 9, fontWeight: 600, color: cream, letterSpacing: '0.06em' }}>ARHITECTURA PETRESCU</span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {['Portofoliu', 'Servicii', 'Contact'].map((l) => <span key={l} style={{ fontSize: 8, color: grey }}>{l}</span>)}
            <div style={{ background: terra, borderRadius: 3, padding: '3px 8px' }}>
              <span style={{ fontSize: 8, color: cream, fontWeight: 500 }}>Ofertă gratuită</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <div style={{ padding: '16px 14px 12px', background: `radial-gradient(ellipse 70% 80% at 20% 50%, rgba(193,78,48,0.08) 0%, transparent 70%)`, flexShrink: 0 }}>
          <p style={{ fontSize: 7.5, color: terra, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}>Brașov · Arhitectură & Design</p>
          <p style={{ fontSize: 16, fontWeight: 300, color: cream, lineHeight: 1.2, marginBottom: 7, fontFamily: 'var(--font-cormorant)', letterSpacing: '-0.01em' }}>
            Spații gândite să<br /><em style={{ color: '#E8805E', fontStyle: 'italic' }}>dureze.</em>
          </p>
          <p style={{ fontSize: 8, color: grey, lineHeight: 1.6, maxWidth: 200, marginBottom: 10 }}>
            Proiectare rezidențială și comercială. 15 ani experiență, 200+ proiecte livrate în Brașov și împrejurimi.
          </p>
          <div style={{ display: 'flex', gap: 7 }}>
            <div style={{ padding: '5px 12px', background: terra, borderRadius: 4 }}>
              <span style={{ fontSize: 8, color: cream, fontWeight: 500 }}>Consultație gratuită</span>
            </div>
            <div style={{ padding: '5px 12px', border: `1px solid ${bord}`, borderRadius: 4 }}>
              <span style={{ fontSize: 8, color: grey }}>Portofoliu →</span>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div style={{ padding: '0 14px 10px', display: 'flex', gap: 6, flexShrink: 0 }}>
          {[
            { icon: '◻', label: 'Rezidențial', text: '120+ case proiectate' },
            { icon: '◈', label: 'Comercial',   text: 'Birouri & restaurante' },
            { icon: '◉', label: 'Renovări',    text: 'Reamenajări complete' },
          ].map(({ icon, label, text }) => (
            <div key={label} style={{ flex: 1, background: bg2, border: `1px solid ${bord}`, borderRadius: 6, padding: '8px 9px' }}>
              <span style={{ fontSize: 12, color: cream, display: 'block', marginBottom: 5, opacity: 0.5 }}>{icon}</span>
              <span style={{ fontSize: 8.5, color: cream, fontWeight: 500, display: 'block', marginBottom: 3 }}>{label}</span>
              <span style={{ fontSize: 7.5, color: grey, display: 'block' }}>{text}</span>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div style={{ margin: '0 14px', padding: '8px 12px', background: bg2, border: `1px solid ${bord}`, borderRadius: 6, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: cream, display: 'inline-block', opacity: 0.7 }} />
            <span style={{ fontSize: 8, color: grey }}>Live pe domeniu · SEO activ</span>
          </div>
          <span style={{ fontSize: 8, color: muted }}>Timp pe site: 3 min 24 sec ↑</span>
        </div>
      </div>
    </BrowserChrome>
  )
}

/* ── Step 4: După lansare — site live + analytics ── */
export function SitesMockup4() {
  return (
    <BrowserChrome url="arhitecturapetrescu.ro">
      <div style={{ background: bg0, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* nav */}
        <div style={{ padding: '7px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${bord}`, flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 14, height: 14, borderRadius: 2, background: terra, opacity: 0.9 }} />
            <span style={{ fontSize: 9, fontWeight: 600, color: cream, letterSpacing: '0.06em' }}>ARHITECTURA PETRESCU</span>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {['Portofoliu', 'Servicii'].map((l) => <span key={l} style={{ fontSize: 8, color: grey }}>{l}</span>)}
          </div>
        </div>

        {/* Site content blurred/dim */}
        <div style={{ padding: '14px 14px 10px', opacity: 0.45, flexShrink: 0 }}>
          <p style={{ fontSize: 14, fontWeight: 300, color: cream, lineHeight: 1.2, marginBottom: 6, fontFamily: 'var(--font-cormorant)' }}>
            Spații gândite să <em style={{ color: '#E8805E' }}>dureze.</em>
          </p>
          <p style={{ fontSize: 8, color: grey, marginBottom: 10 }}>Proiectare rezidențială și comercială în Brașov.</p>
          <div style={{ display: 'flex', gap: 7 }}>
            <div style={{ padding: '4px 11px', background: terra, borderRadius: 4 }}><span style={{ fontSize: 8, color: cream }}>Consultație</span></div>
          </div>
        </div>

        {/* Maintenance badge */}
        <div style={{ margin: '0 14px 10px', padding: '6px 10px', background: bg2, border: `1px solid ${bord}`, borderRadius: 6, flexShrink: 0, display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: cream, display: 'inline-block', opacity: 0.7 }} />
          <span style={{ fontSize: 8, color: grey }}>Mentenanță activă · hosting inclus · totul funcționează</span>
        </div>

        {/* Analytics overlay */}
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'absolute', top: 48, right: 12, width: 162, background: 'rgba(10,10,8,0.94)', border: `1px solid ${bord}`, borderRadius: 9, padding: '10px 12px', backdropFilter: 'blur(12px)' }}
        >
          <p style={{ fontSize: 8, color: terra, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 9 }}>Analytics — Luna aceasta</p>
          {[
            { label: 'Vizitatori unici',  value: '1.247', change: '↑ 340%' },
            { label: 'Contacte primite',  value: '23',    change: '↑ față de 0' },
            { label: 'Poziție Google',    value: '#3',    change: '"arhitect Brașov"' },
            { label: 'Timp pe site',      value: '3:42',  change: '↑ x4' },
          ].map(({ label, value, change }) => (
            <div key={label} style={{ marginBottom: 8 }}>
              <p style={{ fontSize: 7.5, color: muted, marginBottom: 2 }}>{label}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: cream, fontFamily: 'var(--font-jakarta)' }}>{value}</span>
                <span style={{ fontSize: 7.5, color: terra }}>{change}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </BrowserChrome>
  )
}
