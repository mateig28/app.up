'use client'

import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion, animate } from 'framer-motion'

const bg0   = '#0A0A08'
const bg1   = '#111110'
const bg2   = '#1A1A17'
const bord  = '#2C2C28'
const cream = '#F2EDE4'
const grey  = '#8C8882'
const muted = '#4A4744'
const terra = '#C14E30'

function AnimatedNumber({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    if (shouldReduce) {
      if (ref.current) ref.current.textContent = `${to}${suffix}`
      return
    }
    const ctrl = animate(0, to, {
      duration: 1.4,
      delay: 0.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`
      },
    })
    return () => ctrl.stop()
  }, [to, suffix, shouldReduce])

  return <span ref={ref}>0{suffix}</span>
}

function DashboardContent() {
  return (
    <div style={{ padding: 14, fontFamily: 'var(--font-jakarta)' }}>
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: cream }}>Dashboard · azi</span>
        <span style={{ fontSize: 9, color: muted, background: bg2, padding: '2px 7px', borderRadius: 4, border: `1px solid ${bord}` }}>
          ● LIVE
        </span>
      </div>

      {/* KPI cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 12 }}>
        {[
          { label: 'Produse azi', value: 847, suffix: ' buc' },
          { label: 'Calitate',    value: 94,  suffix: '%' },
          { label: 'Livrări',     value: 23,  suffix: '' },
        ].map(({ label, value, suffix }) => (
          <div key={label} style={{ background: bg2, border: `1px solid ${bord}`, borderRadius: 7, padding: '9px 10px' }}>
            <p style={{ fontSize: 8, color: grey, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 5 }}>
              {label}
            </p>
            <p style={{ fontSize: 17, fontWeight: 700, color: cream, lineHeight: 1 }}>
              <AnimatedNumber to={value} suffix={suffix} />
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div style={{ background: bg2, border: `1px solid ${bord}`, borderRadius: 7, padding: '10px 12px' }}>
        <p style={{ fontSize: 8, color: grey, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
          Producție ultimele 7 zile
        </p>
        <svg viewBox="0 0 220 52" width="100%" height="52" fill="none">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={terra} stopOpacity="0.12" />
              <stop offset="100%" stopColor={terra} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M 0 42 L 32 36 L 64 40 L 96 26 L 128 18 L 160 10 L 192 6 L 220 14 L 220 52 L 0 52 Z" fill="url(#chartFill)" />
          <motion.path
            d="M 0 42 L 32 36 L 64 40 L 96 26 L 128 18 L 160 10 L 192 6 L 220 14"
            stroke={terra}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </div>
    </div>
  )
}

function SiteContent() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-jakarta)' }}>
      {/* Site nav */}
      <div style={{ padding: '7px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: bg0, borderBottom: `1px solid ${bord}`, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 14, height: 14, borderRadius: 2, background: terra, opacity: 0.9 }} />
          <span style={{ fontSize: 9, fontWeight: 600, color: cream, letterSpacing: '0.06em' }}>ARHITECTURA PETRESCU</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          {['Portofoliu', 'Servicii', 'Contact'].map((l) => (
            <span key={l} style={{ fontSize: 8, color: grey }}>{l}</span>
          ))}
          <div style={{ background: terra, borderRadius: 3, padding: '3px 8px' }}>
            <span style={{ fontSize: 8, color: cream, fontWeight: 500 }}>Ofertă</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '16px 14px 12px', background: `radial-gradient(ellipse 80% 60% at 20% 50%, rgba(193,78,48,0.07) 0%, transparent 70%)`, flexShrink: 0 }}>
        <p style={{ fontSize: 7.5, color: terra, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}>Brașov · Arhitectură</p>
        <p style={{ fontSize: 14, fontWeight: 300, color: cream, lineHeight: 1.25, marginBottom: 6, fontFamily: 'var(--font-cormorant)', letterSpacing: '-0.01em' }}>
          Spații gândite<br />
          <em style={{ color: '#E8805E', fontStyle: 'italic' }}>să dureze.</em>
        </p>
        <p style={{ fontSize: 8, color: grey, lineHeight: 1.6, maxWidth: 200, marginBottom: 10 }}>
          Proiectare rezidențială și comercială în Brașov. 15 ani experiență, 200+ proiecte finalizate.
        </p>
        <div style={{ display: 'flex', gap: 7 }}>
          <div style={{ padding: '5px 11px', background: terra, borderRadius: 4 }}>
            <span style={{ fontSize: 7.5, color: cream, fontWeight: 500 }}>Consultație gratuită</span>
          </div>
          <div style={{ padding: '5px 11px', border: `1px solid ${bord}`, borderRadius: 4 }}>
            <span style={{ fontSize: 7.5, color: grey }}>Portofoliu →</span>
          </div>
        </div>
      </div>

      {/* 3 feature cards */}
      <div style={{ padding: '0 14px 10px', display: 'flex', gap: 6, flexShrink: 0 }}>
        {[
          { icon: '◻', label: 'Rezidențial', text: 'Case și apartamente personalizate' },
          { icon: '◈', label: 'Comercial',   text: 'Birouri, restaurante, retail' },
          { icon: '◉', label: 'Renovări',    text: 'Reamenajări și extinderi' },
        ].map(({ icon, label, text }) => (
          <div key={label} style={{ flex: 1, background: bg2, border: `1px solid ${bord}`, borderRadius: 6, padding: '8px 9px' }}>
            <span style={{ fontSize: 12, color: cream, display: 'block', marginBottom: 5, opacity: 0.6 }}>{icon}</span>
            <span style={{ fontSize: 8.5, color: cream, fontWeight: 500, display: 'block', marginBottom: 3 }}>{label}</span>
            <span style={{ fontSize: 7.5, color: grey, display: 'block', lineHeight: 1.4 }}>{text}</span>
          </div>
        ))}
      </div>

      {/* Live badge */}
      <div style={{ margin: '0 14px', padding: '6px 10px', background: `${cream}06`, border: `1px solid ${bord}`, borderRadius: 6, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: cream, display: 'inline-block', opacity: 0.7 }} />
          <span style={{ fontSize: 8, color: grey }}>arhitecturapetrescu.ro · live</span>
        </div>
        <span style={{ fontSize: 8, color: muted }}>Timp pe site: 3 min 42 sec ↑</span>
      </div>
    </div>
  )
}

export function BrowserMockup({ activeTab }: { activeTab: 'apps' | 'sites' }) {
  return (
    <div
      className="rounded-xl overflow-hidden w-full"
      role="img"
      aria-label={
        activeTab === 'apps'
          ? 'Previzualizare dashboard de producție cu indicatori în timp real'
          : 'Previzualizare site de prezentare profesional'
      }
      style={{ background: bg0, border: `1px solid ${bord}` }}
    >
      {/* Browser chrome */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', borderBottom: `1px solid ${bord}` }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#EF4444', '#EAB308', '#22C55E'].map((c) => (
            <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, opacity: 0.5 }} aria-hidden="true" />
          ))}
        </div>
        <div style={{ flex: 1, height: 20, borderRadius: 5, background: bg1, border: `1px solid ${bord}`, display: 'flex', alignItems: 'center', paddingLeft: 8, marginLeft: 4 }}>
          <span style={{ fontSize: 9, color: muted, fontFamily: 'var(--font-jakarta)' }}>
            {activeTab === 'apps' ? 'dashboard.metalex.ro' : 'arhitecturapetrescu.ro'}
          </span>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait" initial={false}>
        {activeTab === 'apps' ? (
          <motion.div
            key="dash"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <DashboardContent />
          </motion.div>
        ) : (
          <motion.div
            key="site"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <SiteContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
