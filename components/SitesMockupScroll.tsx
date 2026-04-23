'use client'

import { motion } from 'framer-motion'

function BrowserChrome({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: '#0A0B0E',
        border: '1px solid #1E2530',
        borderRadius: 12,
        overflow: 'hidden',
        height: 420,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Chrome bar */}
      <div
        style={{
          borderBottom: '1px solid #1E2530',
          padding: '8px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', gap: 5 }}>
          {['#EF4444', '#EAB308', '#22C55E'].map((c) => (
            <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.55 }} />
          ))}
        </div>
        <div
          style={{
            flex: 1,
            height: 18,
            background: '#0D1117',
            border: '1px solid #1E2530',
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 8,
          }}
        >
          <span style={{ fontSize: 8, color: '#8B97A8', fontFamily: 'var(--font-geist-mono)' }}>
            {url}
          </span>
        </div>
      </div>
      {/* Body */}
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        {children}
      </div>
    </div>
  )
}

/* ── BEFORE: old static site ── */
function BeforeState() {
  return (
    <BrowserChrome url="firma-ta.ro">
      <div style={{ background: '#F8F8F5', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* old nav */}
        <div style={{ background: '#fff', borderBottom: '1px solid #E5E5E5', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            <div style={{ width: 18, height: 18, background: '#D0D0D0', borderRadius: 2 }} />
            <div style={{ width: 50, height: 7, background: '#D0D0D0', borderRadius: 2 }} />
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Acasă', 'Despre', 'Contact'].map(l => (
              <span key={l} style={{ fontSize: 9, color: '#555', fontFamily: 'Arial, sans-serif' }}>{l}</span>
            ))}
          </div>
        </div>

        {/* hero — plain centered */}
        <div style={{ padding: '28px 24px 16px', textAlign: 'center', background: '#fff', borderBottom: '1px solid #E5E5E5' }}>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#222', fontFamily: 'Arial, sans-serif', marginBottom: 8 }}>
            Bine ați venit pe site-ul nostru!
          </p>
          <p style={{ fontSize: 9, color: '#777', fontFamily: 'Arial, sans-serif', lineHeight: 1.6, maxWidth: 280, margin: '0 auto 12px' }}>
            Suntem o firmă specializată în servicii de calitate. Vă invităm să ne contactați pentru orice solicitare.
          </p>
          <div
            style={{
              display: 'inline-block',
              padding: '5px 14px',
              background: '#2563EB',
              color: '#fff',
              fontSize: 9,
              fontFamily: 'Arial, sans-serif',
              borderRadius: 3,
            }}
          >
            Contactați-ne
          </div>
        </div>

        {/* content */}
        <div style={{ flex: 1, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {/* analytics warning */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '7px 10px', background: '#FFF8E1', border: '1px solid #F59E0B33', borderRadius: 4
          }}>
            <span style={{ fontSize: 8.5, color: '#92400E', fontFamily: 'Arial, sans-serif' }}>
              ⚠ Timp mediu pe site: 18 sec — Bounce rate: 91%
            </span>
          </div>

          {/* two dull content blocks */}
          {[
            { title: 'Despre noi', body: 'Firma noastră activează de peste 10 ani în domeniu cu o echipă de profesioniști dedicați.' },
            { title: 'Serviciile noastre', body: 'Oferim o gamă largă de servicii adaptate nevoilor fiecărui client în parte.' },
          ].map(({ title, body }) => (
            <div key={title} style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 4, padding: '10px 12px' }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: '#222', fontFamily: 'Arial, sans-serif', marginBottom: 4 }}>{title}</p>
              <p style={{ fontSize: 8.5, color: '#777', fontFamily: 'Arial, sans-serif', lineHeight: 1.55 }}>{body}</p>
            </div>
          ))}

          {/* footer */}
          <div style={{ marginTop: 'auto', paddingTop: 8, borderTop: '1px solid #E5E5E5' }}>
            <p style={{ fontSize: 8, color: '#AAA', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
              © 2019 Firma SRL · Toate drepturile rezervate · Ultima actualizare: 4 ani în urmă
            </p>
          </div>
        </div>
      </div>
    </BrowserChrome>
  )
}

/* ── WIREFRAME: design in progress ── */
function WireframeState() {
  const Line = ({ w, h = 7, opacity = 1, mt = 0 }: { w: string; h?: number; opacity?: number; mt?: number }) => (
    <div style={{ width: w, height: h, background: `rgba(59,130,246,${opacity * 0.35})`, borderRadius: 3, marginTop: mt }} />
  )

  return (
    <BrowserChrome url="firma-ta.ro — În construcție">
      <div style={{ background: '#080E1A', height: '100%', overflow: 'hidden', position: 'relative' }}>
        {/* grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.06,
          backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />

        <div style={{ position: 'relative', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* nav wireframe */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10, borderBottom: '1px dashed rgba(59,130,246,0.2)' }}>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <div style={{ width: 20, height: 20, borderRadius: 4, border: '1.5px dashed rgba(59,130,246,0.4)', background: 'rgba(59,130,246,0.07)' }} />
              <Line w="48px" />
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {[40, 36, 44, 56].map((w, i) => <Line key={i} w={`${w}px`} opacity={0.7} />)}
            </div>
          </div>

          {/* hero wireframe */}
          <div style={{ padding: '12px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05, duration: 0.4 }}
            >
              <Line w="72px" h={6} opacity={0.6} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12, duration: 0.4 }}>
              <Line w="220px" h={14} opacity={0.9} mt={2} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.19, duration: 0.4 }}>
              <Line w="180px" h={14} opacity={0.6} mt={2} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.26, duration: 0.4 }}>
              <Line w="260px" h={7} opacity={0.4} mt={4} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.4 }}>
              <Line w="220px" h={7} opacity={0.35} mt={2} />
            </motion.div>
            {/* CTA wireframe buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38, duration: 0.4 }}
              style={{ display: 'flex', gap: 8, marginTop: 6 }}
            >
              <div style={{ width: 80, height: 24, borderRadius: 5, background: 'rgba(59,130,246,0.25)', border: '1.5px solid rgba(59,130,246,0.5)' }} />
              <div style={{ width: 80, height: 24, borderRadius: 5, border: '1.5px dashed rgba(59,130,246,0.3)' }} />
            </motion.div>
          </div>

          {/* 3 service cards wireframe */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            style={{ display: 'flex', gap: 8 }}
          >
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                flex: 1, border: '1.5px dashed rgba(59,130,246,0.25)', borderRadius: 7, padding: '10px 10px',
                background: 'rgba(59,130,246,0.04)',
                display: 'flex', flexDirection: 'column', gap: 5,
              }}>
                <div style={{ width: 20, height: 20, borderRadius: 4, border: '1.5px dashed rgba(59,130,246,0.35)', background: 'rgba(59,130,246,0.08)' }} />
                <Line w="60px" h={6} opacity={0.8} />
                <Line w="75px" h={5} opacity={0.35} />
                <Line w="55px" h={5} opacity={0.3} />
              </div>
            ))}
          </motion.div>

          {/* annotation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            style={{
              marginTop: 4,
              padding: '7px 10px',
              background: 'rgba(59,130,246,0.07)',
              border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              gap: 7,
            }}
          >
            <span style={{ fontSize: 8.5, color: '#60A5FA', fontFamily: 'var(--font-geist-mono)' }}>
              ✦ În construcție — livrare estimată în 12 zile
            </span>
          </motion.div>
        </div>
      </div>
    </BrowserChrome>
  )
}

/* ── AFTER: modern dark site ── */
function AfterState() {
  return (
    <BrowserChrome url="firma-ta.ro">
      <div style={{ background: '#050810', height: '100%', overflowY: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* nav */}
        <div style={{
          padding: '9px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'rgba(5,8,16,0.92)', borderBottom: '1px solid rgba(255,255,255,0.06)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, background: 'linear-gradient(135deg,#3B82F6,#10B981)' }} />
            <div style={{ width: 44, height: 6, background: 'rgba(255,255,255,0.12)', borderRadius: 2 }} />
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {[36, 32, 40].map((w, i) => (
              <div key={i} style={{ width: w, height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }} />
            ))}
            <div style={{ width: 56, height: 20, borderRadius: 4, background: 'linear-gradient(135deg,#3B82F6,#06B6D4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 7.5, color: '#fff', fontFamily: 'var(--font-geist-sans)', fontWeight: 600 }}>Contact</span>
            </div>
          </div>
        </div>

        {/* hero with gradient */}
        <div style={{
          padding: '20px 18px 14px', flexShrink: 0,
          background: 'radial-gradient(ellipse 70% 90% at 60% -20%, rgba(59,130,246,0.18) 0%, transparent 70%)',
        }}>
          <div style={{
            display: 'inline-block', marginBottom: 8, padding: '3px 8px',
            background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.3)',
            borderRadius: 20,
          }}>
            <span style={{ fontSize: 7.5, color: '#60A5FA', fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.06em' }}>
              Disponibil din 2025
            </span>
          </div>
          <p style={{
            fontSize: 16, fontWeight: 800, color: '#F0F6FF',
            fontFamily: 'var(--font-geist-sans)', lineHeight: 1.2, letterSpacing: '-0.02em',
            marginBottom: 6,
          }}>
            Design care{' '}
            <span style={{
              background: 'linear-gradient(90deg,#3B82F6,#06B6D4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              convinge.
            </span>
          </p>
          <p style={{ fontSize: 9, color: '#8B97A8', fontFamily: 'var(--font-geist-sans)', lineHeight: 1.65, marginBottom: 10, maxWidth: 220 }}>
            Site-ul tău, construit să transforme vizitatorii în clienți.
          </p>
          <div style={{ display: 'flex', gap: 7 }}>
            <div style={{ padding: '5px 12px', background: 'linear-gradient(135deg,#3B82F6,#06B6D4)', borderRadius: 5 }}>
              <span style={{ fontSize: 8, color: '#fff', fontWeight: 600, fontFamily: 'var(--font-geist-sans)' }}>Cere ofertă</span>
            </div>
            <div style={{ padding: '5px 12px', border: '1px solid rgba(59,130,246,0.35)', borderRadius: 5 }}>
              <span style={{ fontSize: 8, color: '#60A5FA', fontFamily: 'var(--font-geist-sans)' }}>Portofoliu →</span>
            </div>
          </div>
        </div>

        {/* 3 service cards */}
        <div style={{ padding: '0 18px 10px', display: 'flex', gap: 7, flexShrink: 0 }}>
          {[
            { icon: '⬡', label: 'Design modern', color: '#3B82F6' },
            { icon: '▲', label: 'SEO inclus', color: '#06B6D4' },
            { icon: '◆', label: 'Conversii', color: '#10B981' },
          ].map(({ icon, label, color }) => (
            <div key={label} style={{
              flex: 1, background: '#0D1117', border: '1px solid #1E2530', borderRadius: 7, padding: '9px 10px',
              display: 'flex', flexDirection: 'column', gap: 5,
            }}>
              <span style={{ fontSize: 12, color, lineHeight: 1 }}>{icon}</span>
              <span style={{ fontSize: 8.5, color: '#F0F6FF', fontFamily: 'var(--font-geist-sans)', fontWeight: 600 }}>{label}</span>
              <div style={{ width: '75%', height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }} />
              <div style={{ width: '55%', height: 5, background: 'rgba(255,255,255,0.04)', borderRadius: 2 }} />
            </div>
          ))}
        </div>

        {/* analytics strip */}
        <div style={{ margin: '0 18px', padding: '8px 12px', background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 7, flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span
                style={{
                  display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
                  background: '#10B981', boxShadow: '0 0 6px #10B981',
                }}
              />
              <span style={{ fontSize: 8.5, color: '#10B981', fontFamily: 'var(--font-geist-mono)' }}>
                Timp mediu pe site: 3 min 24 sec ↑
              </span>
            </div>
            <span style={{ fontSize: 8, color: '#8B97A860', fontFamily: 'var(--font-geist-mono)' }}>Bounce: 22%</span>
          </div>
        </div>
      </div>
    </BrowserChrome>
  )
}

export function SitesMockupScroll({ state }: { state: string }) {
  return (
    <div>
      {state === 'before' && <BeforeState />}
      {state === 'wireframe' && <WireframeState />}
      {state === 'after' && <AfterState />}
    </div>
  )
}
