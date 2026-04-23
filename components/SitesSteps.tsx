'use client'

import { motion } from 'framer-motion'

function BrowserChrome({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: '#0A0B0E',
        border: '1px solid #27272A',
        borderRadius: 12,
        overflow: 'hidden',
        height: 420,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{
        borderBottom: '1px solid #1E2530', padding: '8px 14px',
        display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0, background: '#0A0B0E',
      }}>
        {['#EF4444', '#EAB308', '#22C55E'].map((c) => (
          <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.5 }} />
        ))}
        <div style={{ flex: 1, marginLeft: 6, height: 18, background: '#111', border: '1px solid #1E2530', borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
          <span style={{ fontSize: 8, color: '#8B97A8', fontFamily: 'var(--font-geist-mono)' }}>{url}</span>
        </div>
      </div>
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        {children}
      </div>
    </div>
  )
}

/* ── Step 0: Site vechi ── */
export function SitesMockup0() {
  return (
    <BrowserChrome url="firma-noastra.ro">
      <div style={{ background: '#F9F9F6', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* old nav */}
        <div style={{ background: '#fff', borderBottom: '1px solid #DDD', padding: '8px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#333', fontFamily: 'Georgia, serif' }}>FIRMA NOASTRĂ SRL</span>
          <div style={{ display: 'flex', gap: 14 }}>
            {['Acasă', 'Despre', 'Servicii', 'Contact'].map((l) => (
              <span key={l} style={{ fontSize: 9, color: '#555', fontFamily: 'Arial, sans-serif' }}>{l}</span>
            ))}
          </div>
        </div>

        {/* hero */}
        <div style={{ background: '#fff', borderBottom: '1px solid #DDD', padding: '24px 24px 16px', textAlign: 'center' }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: '#222', fontFamily: 'Georgia, serif', marginBottom: 10 }}>
            Bine ați venit pe site-ul nostru!
          </p>
          <p style={{ fontSize: 9.5, color: '#666', fontFamily: 'Arial, sans-serif', lineHeight: 1.65, maxWidth: 280, margin: '0 auto 14px' }}>
            Suntem o firmă cu experiență de peste 10 ani în domeniu. Vă oferim servicii de calitate la prețuri competitive. Contactați-ne pentru mai multe informații.
          </p>
          <div style={{ display: 'inline-block', padding: '5px 14px', background: '#888', color: '#fff', fontSize: 9, fontFamily: 'Arial, sans-serif', borderRadius: 2, cursor: 'default' }}>
            Contact
          </div>
        </div>

        {/* content */}
        <div style={{ flex: 1, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {/* analytics warning */}
          <div style={{ display: 'flex', alignItems: 'center', padding: '6px 10px', background: '#FFF3CD', border: '1px solid #FBBF2440', borderRadius: 4 }}>
            <span style={{ fontSize: 8.5, color: '#92400E', fontFamily: 'Arial, sans-serif' }}>
              ⚠ Timp mediu pe site: 18 secunde — Bounce rate: 91%
            </span>
          </div>

          {[
            { title: 'Despre noi', body: 'Firma noastră activează de mult timp pe piață, oferind servicii variate la standarde ridicate de calitate.' },
            { title: 'Servicii', body: 'Oferim o gamă largă de servicii adaptate necesităților dumneavoastră. Vă așteptăm cu drag.' },
          ].map(({ title, body }) => (
            <div key={title} style={{ background: '#fff', border: '1px solid #DDD', padding: '10px 12px', borderRadius: 3 }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: '#222', fontFamily: 'Georgia, serif', marginBottom: 4 }}>{title}</p>
              <p style={{ fontSize: 8.5, color: '#777', fontFamily: 'Arial, sans-serif', lineHeight: 1.55 }}>{body}</p>
            </div>
          ))}

          <div style={{ marginTop: 'auto', borderTop: '1px solid #DDD', paddingTop: 8 }}>
            <p style={{ fontSize: 8, color: '#AAA', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
              © 2018 Firma Noastră SRL · Toate drepturile rezervate
            </p>
          </div>
        </div>
      </div>
    </BrowserChrome>
  )
}

/* ── Step 1: Wireframe schiță ── */
export function SitesMockup1() {
  return (
    <BrowserChrome url="firma-ta.ro — structură">
      <div style={{ background: '#0C111D', height: '100%', position: 'relative', overflow: 'hidden' }}>
        {/* grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: 'linear-gradient(#94A3B8 1px,transparent 1px),linear-gradient(90deg,#94A3B8 1px,transparent 1px)',
          backgroundSize: '20px 20px',
        }} />
        <div style={{ position: 'relative', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* Hero wireframe */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            style={{ border: '1.5px dashed rgba(148,163,184,0.3)', borderRadius: 6, padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: 8, background: 'rgba(148,163,184,0.03)' }}
          >
            <p style={{ fontSize: 8.5, color: 'rgba(148,163,184,0.5)', fontFamily: 'var(--font-geist-mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Hero section</p>
            <div style={{ width: '60%', height: 12, background: 'rgba(148,163,184,0.15)', borderRadius: 3 }} />
            <div style={{ width: '45%', height: 8, background: 'rgba(148,163,184,0.1)', borderRadius: 3 }} />
            <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
              <div style={{ width: 70, height: 22, borderRadius: 4, border: '1.5px dashed rgba(148,163,184,0.3)', background: 'rgba(148,163,184,0.06)' }} />
              <div style={{ width: 70, height: 22, borderRadius: 4, border: '1.5px dashed rgba(148,163,184,0.2)' }} />
            </div>
          </motion.div>

          {/* Services wireframe */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <p style={{ fontSize: 8.5, color: 'rgba(148,163,184,0.5)', fontFamily: 'var(--font-geist-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Services</p>
            <div style={{ display: 'flex', gap: 8 }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ flex: 1, border: '1.5px dashed rgba(148,163,184,0.2)', borderRadius: 5, padding: '10px 8px', background: 'rgba(148,163,184,0.02)', display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <div style={{ width: 20, height: 20, borderRadius: 3, border: '1.5px dashed rgba(148,163,184,0.25)' }} />
                  <div style={{ width: '70%', height: 6, background: 'rgba(148,163,184,0.12)', borderRadius: 2 }} />
                  <div style={{ width: '55%', height: 5, background: 'rgba(148,163,184,0.07)', borderRadius: 2 }} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA + Footer wireframe */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            style={{ border: '1.5px dashed rgba(148,163,184,0.15)', borderRadius: 5, padding: '10px 14px', background: 'rgba(148,163,184,0.02)' }}
          >
            <p style={{ fontSize: 8.5, color: 'rgba(148,163,184,0.4)', fontFamily: 'var(--font-geist-mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>CTA + Footer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            style={{ padding: '8px 12px', background: 'rgba(148,163,184,0.05)', border: '1px solid rgba(148,163,184,0.15)', borderRadius: 6 }}
          >
            <span style={{ fontSize: 9, color: 'rgba(148,163,184,0.5)', fontFamily: 'var(--font-geist-mono)' }}>
              Structura site-ului tău — în lucru
            </span>
          </motion.div>
        </div>
      </div>
    </BrowserChrome>
  )
}

/* ── Step 2: Build — site parțial ── */
export function SitesMockup2() {
  return (
    <BrowserChrome url="preview.app.up/firma-ta">
      <div style={{ background: '#050810', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Progress bar */}
        <div style={{ padding: '8px 16px', background: 'rgba(59,130,246,0.06)', borderBottom: '1px solid rgba(59,130,246,0.15)', flexShrink: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 8.5, color: '#3B82F6', fontFamily: 'var(--font-geist-mono)' }}>Design complet</span>
            <span style={{ fontSize: 8.5, color: '#8B97A860', fontFamily: 'var(--font-geist-mono)' }}>Content în integrare</span>
          </div>
          <div style={{ height: 3, background: '#1E2530', borderRadius: 2 }}>
            <motion.div
              style={{ height: '100%', borderRadius: 2, background: '#3B82F6' }}
              initial={{ width: 0 }}
              animate={{ width: '68%' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>

        {/* Hero section visible */}
        <div style={{
          padding: '18px 18px 14px', flexShrink: 0,
          background: 'radial-gradient(ellipse 80% 80% at 50% -10%, rgba(59,130,246,0.18) 0%, transparent 70%)',
        }}>
          <div style={{ width: '65%', height: 14, background: 'rgba(248,250,252,0.85)', borderRadius: 3, marginBottom: 8 }} />
          <div style={{ width: '48%', height: 10, background: 'rgba(248,250,252,0.5)', borderRadius: 3, marginBottom: 12 }} />
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 72, height: 24, borderRadius: 5, background: 'linear-gradient(135deg,#3B82F6,#06B6D4)' }} />
            <div style={{ width: 72, height: 24, borderRadius: 5, border: '1px solid rgba(59,130,246,0.35)' }} />
          </div>
        </div>

        {/* 3 cards partial */}
        <div style={{ padding: '0 18px 10px', display: 'flex', gap: 7, flexShrink: 0 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ flex: 1, background: '#0D1117', border: '1px solid #1E2530', borderRadius: 7, padding: '10px 10px', display: 'flex', flexDirection: 'column', gap: 5 }}>
              <div style={{ width: 18, height: 18, borderRadius: 3, background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.2)' }} />
              <div style={{ width: '65%', height: 7, background: 'rgba(248,250,252,0.6)', borderRadius: 2 }} />
              <div style={{ width: '80%', height: 5, background: 'rgba(148,163,184,0.25)', borderRadius: 2 }} />
              <div style={{ width: '60%', height: 5, background: 'rgba(148,163,184,0.18)', borderRadius: 2 }} />
            </div>
          ))}
        </div>

        {/* rest blurred */}
        <div style={{ flex: 1, margin: '0 18px', borderRadius: 6, background: 'rgba(255,255,255,0.02)', border: '1px dashed #1E2530', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 9, color: '#8B97A840', fontFamily: 'var(--font-geist-mono)' }}>Secțiunile următoare — în integrare</span>
        </div>
      </div>
    </BrowserChrome>
  )
}

/* ── Step 3: Lansare — site complet ── */
export function SitesMockup3() {
  return (
    <BrowserChrome url="firma-ta.ro">
      <div style={{ background: '#050810', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* nav */}
        <div style={{ padding: '8px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(5,8,16,0.9)', borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <div style={{ width: 16, height: 16, borderRadius: 3, background: 'linear-gradient(135deg,#3B82F6,#10B981)' }} />
            <div style={{ width: 40, height: 5, background: 'rgba(255,255,255,0.12)', borderRadius: 2 }} />
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {[32, 28, 36].map((w, i) => <div key={i} style={{ width: w, height: 5, background: 'rgba(255,255,255,0.09)', borderRadius: 2 }} />)}
            <div style={{ width: 52, height: 18, borderRadius: 4, background: 'linear-gradient(135deg,#3B82F6,#06B6D4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 7.5, color: '#fff', fontWeight: 600 }}>Contact</span>
            </div>
          </div>
        </div>

        {/* hero */}
        <div style={{ padding: '18px 18px 12px', background: 'radial-gradient(ellipse 70% 90% at 60% -20%, rgba(59,130,246,0.2) 0%, transparent 70%)', flexShrink: 0 }}>
          <p style={{ fontSize: 15, fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 6, fontFamily: 'var(--font-geist-sans)' }}>
            Design care{' '}
            <span style={{ background: 'linear-gradient(90deg,#3B82F6,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>convinge.</span>
          </p>
          <p style={{ fontSize: 9, color: '#94A3B8', lineHeight: 1.6, marginBottom: 10, maxWidth: 210 }}>Site construit să transforme vizitatorii în clienți.</p>
          <div style={{ display: 'flex', gap: 7 }}>
            <div style={{ padding: '5px 12px', background: 'linear-gradient(135deg,#3B82F6,#06B6D4)', borderRadius: 5 }}>
              <span style={{ fontSize: 7.5, color: '#fff', fontWeight: 600 }}>Cere ofertă</span>
            </div>
            <div style={{ padding: '5px 12px', border: '1px solid rgba(59,130,246,0.3)', borderRadius: 5 }}>
              <span style={{ fontSize: 7.5, color: '#60A5FA' }}>Portofoliu →</span>
            </div>
          </div>
        </div>

        {/* 3 cards */}
        <div style={{ padding: '0 18px 10px', display: 'flex', gap: 7, flexShrink: 0 }}>
          {[{ icon: '◆', c: '#3B82F6', l: 'Design modern' }, { icon: '▲', c: '#06B6D4', l: 'SEO inclus' }, { icon: '⬡', c: '#10B981', l: 'Conversii' }].map(({ icon, c, l }) => (
            <div key={l} style={{ flex: 1, background: '#0D1117', border: '1px solid #1E2530', borderRadius: 7, padding: '9px 10px' }}>
              <span style={{ fontSize: 11, color: c, lineHeight: 1, display: 'block', marginBottom: 5 }}>{icon}</span>
              <span style={{ fontSize: 8.5, color: '#F0F6FF', fontWeight: 600, display: 'block', marginBottom: 4 }}>{l}</span>
              <div style={{ width: '70%', height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, marginBottom: 3 }} />
              <div style={{ width: '50%', height: 4, background: 'rgba(255,255,255,0.04)', borderRadius: 2 }} />
            </div>
          ))}
        </div>

        {/* Live badge + metric */}
        <div style={{ margin: '0 18px', padding: '8px 12px', background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 7, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 5px #10B981', display: 'inline-block' }} />
            <span style={{ fontSize: 8.5, color: '#10B981', fontFamily: 'var(--font-geist-mono)' }}>Live — indexat Google</span>
          </div>
          <span style={{ fontSize: 8.5, color: '#94A3B860', fontFamily: 'var(--font-geist-mono)' }}>Timp mediu: 3 min 24 sec ↑</span>
        </div>
      </div>
    </BrowserChrome>
  )
}

/* ── Step 4: După lansare — cu analytics overlay ── */
export function SitesMockup4() {
  return (
    <BrowserChrome url="firma-ta.ro">
      <div style={{ background: '#050810', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* nav */}
        <div style={{ padding: '8px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(5,8,16,0.9)', borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <div style={{ width: 16, height: 16, borderRadius: 3, background: 'linear-gradient(135deg,#3B82F6,#10B981)' }} />
            <div style={{ width: 40, height: 5, background: 'rgba(255,255,255,0.12)', borderRadius: 2 }} />
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {[32, 28, 36].map((w, i) => <div key={i} style={{ width: w, height: 5, background: 'rgba(255,255,255,0.09)', borderRadius: 2 }} />)}
          </div>
        </div>

        {/* hero */}
        <div style={{ padding: '18px 18px 12px', background: 'radial-gradient(ellipse 70% 90% at 60% -20%, rgba(59,130,246,0.2) 0%, transparent 70%)', flexShrink: 0 }}>
          <p style={{ fontSize: 15, fontWeight: 800, color: '#F8FAFC', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 6 }}>
            Design care{' '}
            <span style={{ background: 'linear-gradient(90deg,#3B82F6,#06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>convinge.</span>
          </p>
          <p style={{ fontSize: 9, color: '#94A3B8', lineHeight: 1.6, marginBottom: 10, maxWidth: 210 }}>Site construit să transforme vizitatorii în clienți.</p>
          <div style={{ display: 'flex', gap: 7 }}>
            <div style={{ padding: '5px 12px', background: 'linear-gradient(135deg,#3B82F6,#06B6D4)', borderRadius: 5 }}>
              <span style={{ fontSize: 7.5, color: '#fff', fontWeight: 600 }}>Cere ofertă</span>
            </div>
          </div>
        </div>

        {/* cards */}
        <div style={{ padding: '0 18px 10px', display: 'flex', gap: 7, flexShrink: 0 }}>
          {[{ icon: '◆', c: '#3B82F6', l: 'Design modern' }, { icon: '▲', c: '#06B6D4', l: 'SEO inclus' }, { icon: '⬡', c: '#10B981', l: 'Conversii' }].map(({ icon, c, l }) => (
            <div key={l} style={{ flex: 1, background: '#0D1117', border: '1px solid #1E2530', borderRadius: 7, padding: '9px 10px' }}>
              <span style={{ fontSize: 11, color: c, lineHeight: 1, display: 'block', marginBottom: 5 }}>{icon}</span>
              <span style={{ fontSize: 8.5, color: '#F0F6FF', fontWeight: 600, display: 'block', marginBottom: 4 }}>{l}</span>
              <div style={{ width: '70%', height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }} />
            </div>
          ))}
        </div>

        {/* Maintenance badge */}
        <div style={{ margin: '0 18px', padding: '7px 12px', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.18)', borderRadius: 7, flexShrink: 0, display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
          <span style={{ fontSize: 8.5, color: '#10B981', fontFamily: 'var(--font-geist-mono)' }}>Mentenanță activă — totul funcționează</span>
        </div>

        {/* Analytics overlay */}
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            top: 52,
            right: 12,
            width: 150,
            background: 'rgba(9,9,11,0.9)',
            border: '1px solid rgba(16,185,129,0.3)',
            borderRadius: 8,
            padding: '10px 12px',
            backdropFilter: 'blur(12px)',
          }}
        >
          <p style={{ fontSize: 8, color: '#10B981', fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 7 }}>Analytics</p>
          {[
            { label: 'Vizitatori luna asta', value: '847', change: '↑ 340%', color: '#10B981' },
            { label: 'Contacte primite', value: '23', change: '↑ nou', color: '#3B82F6' },
            { label: 'Poziție Google', value: '#4', change: 'cuvânt cheie', color: '#F0F6FF' },
          ].map(({ label, value, change, color }) => (
            <div key={label} style={{ marginBottom: 7 }}>
              <p style={{ fontSize: 7.5, color: '#94A3B880', fontFamily: 'var(--font-geist-mono)', marginBottom: 2 }}>{label}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color, fontFamily: 'var(--font-geist-mono)' }}>{value}</span>
                <span style={{ fontSize: 7.5, color: '#10B98170', fontFamily: 'var(--font-geist-mono)' }}>{change}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </BrowserChrome>
  )
}
