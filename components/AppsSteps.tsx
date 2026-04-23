'use client'

import { motion } from 'framer-motion'

/* ── Shared chrome wrapper ── */
function AppChrome({ children }: { children: React.ReactNode }) {
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
        fontFamily: 'var(--font-geist-sans)',
      }}
    >
      {/* Traffic lights */}
      <div
        style={{
          borderBottom: '1px solid #1E2530',
          padding: '8px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          flexShrink: 0,
          background: '#0A0B0E',
        }}
      >
        {['#EF4444', '#EAB308', '#22C55E'].map((c) => (
          <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.5 }} />
        ))}
        <div style={{ flex: 1, marginLeft: 6, height: 18, background: '#111', border: '1px solid #1E2530', borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
          <span style={{ fontSize: 8, color: '#8B97A8', fontFamily: 'var(--font-geist-mono)' }}>dashboard.firma.ro</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Sidebar */}
        <div style={{ width: 140, flexShrink: 0, borderRight: '1px solid #1E2530', padding: '12px 0' }}>
          {['Dashboard', 'Producție', 'Stocuri', 'Vânzări', 'Pontaj'].map((item, i) => (
            <div
              key={item}
              style={{
                padding: '7px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: i === 0 ? 'rgba(59,130,246,0.08)' : 'transparent',
                borderLeft: `2px solid ${i === 0 ? '#3B82F6' : 'transparent'}`,
              }}
            >
              <div style={{
                width: 13, height: 13, borderRadius: 3, flexShrink: 0,
                background: i === 0 ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${i === 0 ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.07)'}`,
              }} />
              <span style={{ fontSize: 10, color: i === 0 ? '#F0F6FF' : '#8B97A8' }}>{item}</span>
            </div>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          {children}
        </div>
      </div>
    </div>
  )
}

function KpiCard({ label, value, sub, warning }: { label: string; value: string; sub?: string; warning?: boolean }) {
  return (
    <div style={{
      flex: 1, background: '#111', border: `1px solid ${warning ? '#EF444440' : '#1E2530'}`,
      borderRadius: 8, padding: '10px 12px', minWidth: 0,
    }}>
      <p style={{ fontSize: 8.5, fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8B97A8', marginBottom: 5 }}>{label}</p>
      <p style={{ fontSize: 18, fontWeight: 700, color: warning ? '#EF4444' : '#F0F6FF', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 3 }}>{value}</p>
      {sub && <p style={{ fontSize: 8.5, color: warning ? '#EF444480' : '#8B97A8', fontFamily: 'var(--font-geist-mono)' }}>{sub}</p>}
    </div>
  )
}

function BarChart({ dim, accent }: { dim: boolean; accent: string }) {
  const vals = [52, 61, 48, 70, 58, 83, 91]
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 56 }}>
      {vals.map((v, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          <div style={{
            width: '100%', height: `${v}%`, borderRadius: '2px 2px 0 0',
            background: dim ? 'rgba(255,255,255,0.06)' : (i === 6 ? accent : `${accent}55`),
          }} />
          <span style={{ fontSize: 7.5, color: '#8B97A840', fontFamily: 'var(--font-geist-mono)' }}>{days[i]}</span>
        </div>
      ))}
    </div>
  )
}

/* ── Step 0: Problema — date lipsă ── */
export function AppsMockup0() {
  return (
    <AppChrome>
      <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* Header warning */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 10, color: '#8B97A8', fontFamily: 'var(--font-geist-mono)' }}>Dashboard</span>
          <span style={{ fontSize: 9, color: '#EF4444', fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.07em' }}>
            ⚠ Ultima actualizare: 7 zile în urmă
          </span>
        </div>
        {/* KPIs */}
        <div style={{ display: 'flex', gap: 8 }}>
          <KpiCard label="Stoc Cluj" value="?" sub="⚠ date lipsă" warning />
          <KpiCard label="Pontaj azi" value="?" sub="neconfirmat" warning />
          <KpiCard label="Comenzi" value="?" sub="necunoscut" warning />
        </div>
        {/* Chart */}
        <div style={{ background: '#111', border: '1px solid #1E2530', borderRadius: 8, padding: '12px 14px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <p style={{ fontSize: 8.5, color: '#8B97A860', fontFamily: 'var(--font-geist-mono)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Producție — 7 zile</p>
          <BarChart dim accent="#3B82F6" />
          <p style={{ fontSize: 9, color: '#EF444460', fontFamily: 'var(--font-geist-mono)', textAlign: 'center', marginTop: 4 }}>
            Date indisponibile — raport manual în așteptare
          </p>
        </div>
      </div>
    </AppChrome>
  )
}

/* ── Step 1: Discovery — checklist ── */
export function AppsMockup1() {
  const items = [
    { label: 'Flux comandă → producție', done: true },
    { label: 'Pontaj și ture', done: true },
    { label: 'Gestionare stocuri', done: true },
    { label: 'Raportare vânzări', done: true },
    { label: 'Distribuție și livrări', done: false },
    { label: 'Integrare furnizori', done: false },
  ]
  return (
    <AppChrome>
      <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 10, fontWeight: 600, color: '#F0F6FF' }}>Analiză în curs</span>
          <span style={{ fontSize: 9, color: '#3B82F6', fontFamily: 'var(--font-geist-mono)' }}>Săptămâna 1</span>
        </div>
        {/* Progress */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 8.5, color: '#8B97A8', fontFamily: 'var(--font-geist-mono)' }}>Procese mapate</span>
            <span style={{ fontSize: 8.5, color: '#3B82F6', fontFamily: 'var(--font-geist-mono)' }}>4 / 6</span>
          </div>
          <div style={{ height: 4, background: '#1E2530', borderRadius: 2 }}>
            <motion.div
              style={{ height: '100%', borderRadius: 2, background: '#3B82F6' }}
              initial={{ width: 0 }}
              animate={{ width: '67%' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
        {/* Checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {items.map(({ label, done }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 + i * 0.07, duration: 0.3 }}
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <div style={{
                width: 14, height: 14, borderRadius: '50%', flexShrink: 0,
                background: done ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.04)',
                border: `1.5px solid ${done ? '#3B82F6' : '#2A3240'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {done && (
                  <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                    <polyline points="1,3.5 3,5.5 6,1.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span style={{ fontSize: 10, color: done ? '#F0F6FF' : '#8B97A8' }}>{label}</span>
            </motion.div>
          ))}
        </div>
        {/* Bottom note */}
        <div style={{ marginTop: 'auto', padding: '8px 12px', background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 7 }}>
          <p style={{ fontSize: 9.5, color: '#3B82F6', fontFamily: 'var(--font-geist-mono)' }}>
            La final primești scope complet + preț fix
          </p>
        </div>
      </div>
    </AppChrome>
  )
}

/* ── Step 2: Build — module progress ── */
export function AppsMockup2() {
  const modules = [
    { label: 'Dashboard principal', status: 'done', pct: 100 },
    { label: 'Modul stocuri', status: 'done', pct: 100 },
    { label: 'Modul pontaj', status: 'wip', pct: 60 },
    { label: 'Rapoarte automate', status: 'todo', pct: 0 },
  ]
  const accent = '#3B82F6'
  return (
    <AppChrome>
      <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 10, fontWeight: 600, color: '#F0F6FF' }}>Build în curs</span>
          <span style={{ fontSize: 9, color: accent, fontFamily: 'var(--font-geist-mono)' }}>Săptămâna 3</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {modules.map(({ label, status, pct }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              style={{
                background: '#111', border: `1px solid ${status === 'wip' ? `${accent}30` : '#1E2530'}`,
                borderRadius: 8, padding: '9px 12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  {status === 'done' && (
                    <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'rgba(16,185,129,0.15)', border: '1.5px solid #10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="7" height="7" viewBox="0 0 7 7" fill="none"><polyline points="1,3.5 3,5.5 6,1.5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  )}
                  {status === 'wip' && (
                    <div style={{ width: 14, height: 14, borderRadius: '50%', background: `${accent}15`, border: `1.5px solid ${accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 7, color: accent }}>⚙</span>
                    </div>
                  )}
                  {status === 'todo' && (
                    <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', border: '1.5px solid #2A3240', flexShrink: 0 }} />
                  )}
                  <span style={{ fontSize: 10, color: status === 'todo' ? '#8B97A8' : '#F0F6FF' }}>{label}</span>
                </div>
                <span style={{ fontSize: 8.5, color: status === 'done' ? '#10B981' : status === 'wip' ? accent : '#8B97A840', fontFamily: 'var(--font-geist-mono)' }}>
                  {status === 'done' ? 'livrat' : status === 'wip' ? `${pct}%` : 'urmează'}
                </span>
              </div>
              {status !== 'todo' && (
                <div style={{ height: 3, background: '#1E2530', borderRadius: 2 }}>
                  <motion.div
                    style={{ height: '100%', borderRadius: 2, background: status === 'done' ? '#10B981' : accent }}
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.1 }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <p style={{ fontSize: 9, color: '#8B97A860', fontFamily: 'var(--font-geist-mono)', textAlign: 'center', marginTop: 2 }}>
          Ai acces la versiunea de test în fiecare vineri
        </p>
      </div>
    </AppChrome>
  )
}

/* ── Step 3: Predare — dashboard funcțional ── */
export function AppsMockup3() {
  const accent = '#3B82F6'
  return (
    <AppChrome>
      <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 10, color: '#8B97A8', fontFamily: 'var(--font-geist-mono)' }}>Dashboard</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: 20, padding: '3px 8px' }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#10B981' }} />
            <span style={{ fontSize: 8.5, color: '#10B981', fontFamily: 'var(--font-geist-mono)' }}>Predare completă — training finalizat</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <KpiCard label="Stoc Cluj" value="847" sub="↑ buc" />
          <KpiCard label="Pontaj azi" value="94%" sub="✓ confirmat" />
          <KpiCard label="Comenzi" value="23" sub="livrate" />
          <KpiCard label="OEE L2" value="87%" sub="optimal" />
        </div>
        <p style={{ fontSize: 8.5, color: '#8B97A8', fontFamily: 'var(--font-geist-mono)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Producție — 7 zile</p>
        <div style={{ background: '#111', border: '1px solid #1E2530', borderRadius: 8, padding: '12px 14px', flex: 1 }}>
          <BarChart dim={false} accent={accent} />
        </div>
      </div>
    </AppChrome>
  )
}

/* ── Step 4: După livrare — dashboard LIVE ── */
export function AppsMockup4() {
  const accent = '#3B82F6'
  return (
    <AppChrome>
      <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 10, color: '#8B97A8', fontFamily: 'var(--font-geist-mono)' }}>Dashboard</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{
              display: 'inline-block', width: 7, height: 7, borderRadius: '50%',
              background: '#10B981', boxShadow: '0 0 6px #10B981',
              animation: 'pulse-live 2s ease-in-out infinite',
            }} />
            <span style={{ fontSize: 9, color: '#10B981', fontFamily: 'var(--font-geist-mono)', letterSpacing: '0.1em' }}>LIVE</span>
            <span style={{ fontSize: 9, color: '#8B97A840', fontFamily: 'var(--font-geist-mono)', marginLeft: 5 }}>Actualizat acum 2 min</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <KpiCard label="Stoc Cluj" value="847" sub="↑ buc" />
          <KpiCard label="Pontaj azi" value="94%" sub="✓ confirmat" />
          <KpiCard label="Comenzi" value="23" sub="livrate" />
          <KpiCard label="OEE L2" value="87%" sub="optimal" />
        </div>
        <p style={{ fontSize: 8.5, color: '#8B97A8', fontFamily: 'var(--font-geist-mono)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Producție — 7 zile</p>
        <div style={{ background: '#111', border: `1px solid #1E2530`, borderRadius: 8, padding: '12px 14px', flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <BarChart dim={false} accent={accent} />
          <p style={{ fontSize: 9, color: '#8B97A860', fontFamily: 'var(--font-geist-mono)', textAlign: 'right' }}>+12% față de săptămâna trecută</p>
        </div>
      </div>
    </AppChrome>
  )
}
