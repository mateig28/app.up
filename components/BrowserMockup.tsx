'use client'

import { useEffect, useRef } from 'react'
import { animate, motion, AnimatePresence, useReducedMotion } from 'framer-motion'

function AnimatedNumber({ to, duration = 1.8 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const shouldReduce = useReducedMotion() ?? false

  useEffect(() => {
    if (!ref.current) return
    if (shouldReduce) {
      ref.current.textContent = String(to)
      return
    }
    const ctrl = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v).toString()
      },
    })
    return () => ctrl.stop()
  }, [to, duration, shouldReduce])

  return <span ref={ref}>{shouldReduce ? to : 0}</span>
}

function KPICard({
  label,
  value,
  suffix,
  color,
}: {
  label: string
  value: number
  suffix: string
  color: string
}) {
  return (
    <div
      className="rounded-lg p-3"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <p
        className="font-mono text-[9px] uppercase tracking-widest mb-1.5"
        style={{ color: 'rgba(148,163,184,0.55)' }}
      >
        {label}
      </p>
      <p className="text-base font-bold" style={{ color }}>
        <AnimatedNumber to={value} />
        {suffix}
      </p>
    </div>
  )
}

function DashboardContent() {
  return (
    <div className="p-4 space-y-3">
      <div className="grid grid-cols-3 gap-2">
        <KPICard label="Stoc Cluj" value={847} suffix=" buc" color="#3B82F6" />
        <KPICard label="Prezență tură" value={94} suffix="%" color="#22C55E" />
        <KPICard label="Comenzi azi" value={23} suffix=" liv." color="#8B5CF6" />
      </div>

      <div
        className="rounded-lg p-3"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <p
          className="font-mono text-[8px] uppercase tracking-widest mb-2"
          style={{ color: 'rgba(148,163,184,0.45)' }}
        >
          Producție — ultimele 7 zile
        </p>
        <svg viewBox="0 0 220 48" className="w-full h-10">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 42 L31 36 L62 38 L93 26 L124 20 L155 12 L186 6 L220 2 L220 48 L0 48Z"
            fill="url(#chartFill)"
          />
          <path
            d="M0 42 L31 36 L62 38 L93 26 L124 20 L155 12 L186 6 L220 2"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="220" cy="2" r="3" fill="#3B82F6" />
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Linie 1', val: '87%', ok: true },
          { label: 'Linie 2', val: '72%', ok: false },
          { label: 'Depozit', val: 'OK', ok: true },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-md px-2 py-2 text-center"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <p
              className="font-mono text-[7px] uppercase tracking-widest mb-1"
              style={{ color: 'rgba(148,163,184,0.45)' }}
            >
              {s.label}
            </p>
            <p
              className="text-xs font-semibold"
              style={{ color: s.ok ? '#22C55E' : '#EAB308' }}
            >
              {s.val}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SiteContent() {
  return (
    <div
      className="p-4"
      style={{ background: 'linear-gradient(135deg, #0A0A0F 0%, #0F0A1E 100%)' }}
    >
      <div className="flex justify-between items-center mb-5 px-1">
        <div
          className="h-2.5 w-14 rounded-sm"
          style={{ background: 'rgba(139,92,246,0.5)' }}
        />
        <div className="flex items-center gap-2">
          <div className="h-2 w-8 rounded-sm" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div className="h-2 w-8 rounded-sm" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div
            className="h-5 w-14 rounded-md"
            style={{
              background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
              opacity: 0.8,
            }}
          />
        </div>
      </div>

      <div className="text-center mb-5">
        <div
          className="h-1.5 w-24 rounded-full mx-auto mb-2.5"
          style={{ background: 'rgba(139,92,246,0.4)' }}
        />
        <div
          className="h-4 rounded-md mx-auto mb-1.5"
          style={{
            width: '82%',
            background: 'linear-gradient(135deg, rgba(139,92,246,0.6), rgba(236,72,153,0.6))',
          }}
        />
        <div
          className="h-4 rounded-md mx-auto mb-4"
          style={{
            width: '62%',
            background: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(236,72,153,0.3))',
          }}
        />
        <div className="flex gap-2 justify-center">
          <div
            className="h-7 w-20 rounded-lg"
            style={{
              background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
              opacity: 0.85,
            }}
          />
          <div
            className="h-7 w-16 rounded-lg"
            style={{ border: '1px solid rgba(255,255,255,0.15)' }}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {[
          'rgba(59,130,246,0.3)',
          'rgba(139,92,246,0.3)',
          'rgba(236,72,153,0.3)',
        ].map((bg, i) => (
          <div
            key={i}
            className="rounded-lg p-2"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="w-4 h-4 rounded-md mb-1.5" style={{ background: bg }} />
            <div
              className="h-1.5 rounded-sm mb-1"
              style={{ background: 'rgba(255,255,255,0.12)' }}
            />
            <div
              className="h-1 rounded-sm"
              style={{ width: '70%', background: 'rgba(255,255,255,0.06)' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function BrowserMockup({ activeTab }: { activeTab: 'apps' | 'sites' }) {
  const shouldReduce = useReducedMotion() ?? false

  return (
    <div
      className="glass rounded-2xl overflow-hidden w-full max-w-[500px] mx-auto lg:mx-0"
      role="img"
      aria-label={
        activeTab === 'apps'
          ? 'Previzualizare dashboard aplicație internă'
          : 'Previzualizare site de prezentare'
      }
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-3 px-4 py-3 border-b"
        style={{
          background: 'rgba(255,255,255,0.03)',
          borderColor: 'rgba(255,255,255,0.06)',
        }}
      >
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(239,68,68,0.45)' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(234,179,8,0.45)' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(34,197,94,0.45)' }} />
        </div>
        <div
          className="flex-1 rounded-md h-6 px-3 flex items-center"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <span
            className="font-mono text-[10px]"
            style={{ color: 'rgba(148,163,184,0.45)' }}
          >
            {activeTab === 'apps' ? 'app.up.ro/dashboard' : 'exemplu-site.ro'}
          </span>
        </div>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <div className="w-2 h-2 rounded-full svg-pulse" style={{ background: '#22C55E' }} />
          <span className="font-mono text-[9px]" style={{ color: 'rgba(34,197,94,0.65)' }}>
            LIVE
          </span>
        </div>
      </div>

      {/* Content switcher */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeTab}
          initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduce ? { opacity: 1 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {activeTab === 'apps' ? <DashboardContent /> : <SiteContent />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
