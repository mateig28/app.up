'use client'

import { motion, AnimatePresence } from 'framer-motion'

type State = 'before' | 'discovery' | 'after'

const SIDEBAR_ITEMS = ['Dashboard', 'Producție', 'Stocuri', 'Vânzări', 'Pontaj']

function Sidebar({ accent }: { accent: string }) {
  return (
    <div
      style={{
        width: 148,
        flexShrink: 0,
        borderRight: '1px solid #1E2530',
        padding: '12px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {/* Logo area */}
      <div style={{ padding: '6px 14px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              background: `${accent}18`,
              border: `1px solid ${accent}40`,
            }}
          />
          <div
            style={{ height: 7, width: 54, borderRadius: 3, background: 'rgba(255,255,255,0.1)' }}
          />
        </div>
      </div>

      {SIDEBAR_ITEMS.map((label, i) => (
        <div
          key={label}
          style={{
            padding: '7px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: i === 0 ? `${accent}12` : 'transparent',
            borderLeft: `2px solid ${i === 0 ? accent : 'transparent'}`,
          }}
        >
          <div
            style={{
              width: 13,
              height: 13,
              borderRadius: 3,
              background: i === 0 ? `${accent}25` : 'rgba(255,255,255,0.05)',
              border: `1px solid ${i === 0 ? `${accent}50` : 'rgba(255,255,255,0.07)'}`,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 10,
              color: i === 0 ? '#F0F6FF' : '#8B97A8',
              fontFamily: 'var(--font-geist-sans)',
              letterSpacing: '0.01em',
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

function KpiCard({
  label,
  value,
  sub,
  warning,
  accent,
}: {
  label: string
  value: string
  sub?: string
  warning?: boolean
  accent: string
}) {
  return (
    <div
      style={{
        flex: 1,
        background: '#0D1117',
        border: `1px solid ${warning ? 'rgba(239,68,68,0.25)' : '#1E2530'}`,
        borderRadius: 8,
        padding: '10px 12px',
        minWidth: 0,
      }}
    >
      <p
        style={{
          fontSize: 9,
          fontFamily: 'var(--font-geist-mono)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#8B97A8',
          marginBottom: 6,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: 18,
          fontWeight: 700,
          fontFamily: 'var(--font-geist-sans)',
          color: warning ? '#EF4444' : '#F0F6FF',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          marginBottom: 3,
        }}
      >
        {value}
      </p>
      {sub && (
        <p style={{ fontSize: 9, color: warning ? '#EF444480' : accent, fontFamily: 'var(--font-geist-mono)' }}>
          {sub}
        </p>
      )}
    </div>
  )
}

function BarChart({ dim, accent }: { dim: boolean; accent: string }) {
  const vals = [62, 54, 71, 48, 83, 91, 87]
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  return (
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 60, padding: '0 4px' }}>
        {vals.map((v, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <div
              style={{
                width: '100%',
                height: `${v}%`,
                borderRadius: '3px 3px 0 0',
                background: dim
                  ? 'rgba(59,130,246,0.15)'
                  : i === 6
                    ? accent
                    : `${accent}55`,
                opacity: dim ? 0.4 : 1,
                transition: 'background 0.3s',
              }}
            />
            <span style={{ fontSize: 8, color: '#8B97A860', fontFamily: 'var(--font-geist-mono)' }}>
              {days[i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function BeforeState({ accent }: { accent: string }) {
  return (
    <div style={{ flex: 1, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <span style={{ fontSize: 10, color: '#8B97A8', fontFamily: 'var(--font-geist-mono)' }}>
          Dashboard
        </span>
        <span style={{ fontSize: 9, color: '#EF4444', fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.08em' }}>
          ⚠ Ultima actualizare: 7 zile în urmă
        </span>
      </div>

      {/* KPIs */}
      <div style={{ display: 'flex', gap: 8 }}>
        <KpiCard label="Stoc Cluj" value="?" sub="⚠ date lipsă" warning accent={accent} />
        <KpiCard label="Pontaj azi" value="?" sub="neconfirmat" warning accent={accent} />
        <KpiCard label="Comenzi" value="?" sub="necunoscut" warning accent={accent} />
      </div>

      {/* Chart label */}
      <p style={{ fontSize: 9, color: '#8B97A860', fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        Producție ultimele 7 zile
      </p>

      {/* Dim chart */}
      <div
        style={{
          background: '#0D1117',
          border: '1px solid #1E2530',
          borderRadius: 8,
          padding: '12px 14px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <BarChart dim accent={accent} />
        <p style={{ fontSize: 9, color: '#EF444460', fontFamily: 'var(--font-geist-mono)', textAlign: 'center' }}>
          Date indisponibile — raport manual în așteptare
        </p>
      </div>
    </div>
  )
}

function DiscoveryState({ accent }: { accent: string }) {
  const items = [
    { label: 'Flux comandă → producție', done: true },
    { label: 'Pontaj și ture', done: true },
    { label: 'Gestionare stocuri', done: true },
    { label: 'Raportare vânzări', done: true },
    { label: 'Distribuție și livrări', done: false },
    { label: 'Integrare furnizori', done: false },
  ]
  return (
    <div style={{ flex: 1, padding: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 10, color: '#F0F6FF', fontFamily: 'var(--font-geist-sans)', fontWeight: 600 }}>
          Analiză în curs
        </span>
        <span style={{ fontSize: 9, color: accent, fontFamily: 'var(--font-geist-mono)' }}>
          Săptămâna 1
        </span>
      </div>

      {/* Progress bar */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
          <span style={{ fontSize: 9, color: '#8B97A8', fontFamily: 'var(--font-geist-mono)' }}>Procese mapate</span>
          <span style={{ fontSize: 9, color: accent, fontFamily: 'var(--font-geist-mono)' }}>4 / 6</span>
        </div>
        <div style={{ height: 4, background: '#1E2530', borderRadius: 2 }}>
          <motion.div
            style={{ height: '100%', borderRadius: 2, background: accent }}
            initial={{ width: 0 }}
            animate={{ width: '67%' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      {/* Checklist */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map(({ label, done }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: done ? `${accent}18` : 'rgba(255,255,255,0.04)',
                border: `1.5px solid ${done ? accent : '#2A3240'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {done && (
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                  <polyline points="1,3.5 3,5.5 6,1.5" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span style={{ fontSize: 10, color: done ? '#F0F6FF' : '#8B97A8', fontFamily: 'var(--font-geist-sans)' }}>
              {label}
            </span>
          </motion.div>
        ))}
      </div>

      <div
        style={{
          marginTop: 4,
          padding: '10px 12px',
          background: `${accent}08`,
          border: `1px solid ${accent}25`,
          borderRadius: 8,
        }}
      >
        <p style={{ fontSize: 10, color: accent, fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.05em' }}>
          La final primești scope complet + preț fix
        </p>
      </div>
    </div>
  )
}

function AfterState({ accent }: { accent: string }) {
  return (
    <div style={{ flex: 1, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {/* Header with LIVE */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 10, color: '#8B97A8', fontFamily: 'var(--font-geist-mono)' }}>Dashboard</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <span
            style={{
              display: 'inline-block',
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#10B981',
              boxShadow: '0 0 6px #10B981',
              animation: 'pulse-live 2s ease-in-out infinite',
            }}
          />
          <span style={{ fontSize: 9, color: '#10B981', fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.1em' }}>
            LIVE
          </span>
          <span style={{ fontSize: 9, color: '#8B97A850', fontFamily: 'var(--font-geist-mono)', marginLeft: 6 }}>
            Actualizat acum 2 min
          </span>
        </div>
      </div>

      {/* KPIs */}
      <div style={{ display: 'flex', gap: 6 }}>
        <KpiCard label="Stoc Cluj" value="847" sub="↑ buc" accent={accent} />
        <KpiCard label="Pontaj azi" value="94%" sub="✓ confirmat" accent={accent} />
        <KpiCard label="OEE L2" value="87%" sub="optimal" accent={accent} />
        <KpiCard label="Livrări" value="23" sub="finalizate" accent={accent} />
      </div>

      {/* Chart label */}
      <p style={{ fontSize: 9, color: '#8B97A8', fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        Producție ultimele 7 zile
      </p>

      {/* Chart */}
      <div
        style={{
          background: '#0D1117',
          border: `1px solid #1E2530`,
          borderRadius: 8,
          padding: '12px 14px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <BarChart dim={false} accent={accent} />
        <p style={{ fontSize: 9, color: '#8B97A860', fontFamily: 'var(--font-geist-mono)', textAlign: 'right' }}>
          +12% față de săptămâna trecută
        </p>
      </div>
    </div>
  )
}

export function AppsMockupScroll({ state }: { state: string }) {
  const accent = '#3B82F6'
  const s = state as State

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
      {/* App chrome */}
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
            dashboard.firma.ro
          </span>
        </div>
      </div>

      {/* App body */}
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <Sidebar accent={accent} />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={s}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}
          >
            {s === 'before' && <BeforeState accent={accent} />}
            {s === 'discovery' && <DiscoveryState accent={accent} />}
            {s === 'after' && <AfterState accent={accent} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
