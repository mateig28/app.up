'use client'

import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion, animate } from 'framer-motion'

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
    <div className="p-4">
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { label: 'Produse azi', value: 847, suffix: ' buc', color: '#3B82F6' },
          { label: 'Calitate', value: 94, suffix: '%', color: '#10B981' },
          { label: 'Livrări', value: 23, suffix: '', color: '#06B6D4' },
        ].map(({ label, value, suffix, color }) => (
          <div
            key={label}
            className="rounded-lg p-2.5"
            style={{ background: '#0D1117', border: '1px solid #1E2530' }}
          >
            <p className="font-mono text-[8px] tracking-wider uppercase mb-1" style={{ color: '#8B97A8' }}>
              {label}
            </p>
            <p className="text-base font-bold" style={{ color }}>
              <AnimatedNumber to={value} suffix={suffix} />
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-lg p-3" style={{ background: '#0D1117', border: '1px solid #1E2530' }}>
        <p className="font-mono text-[8px] tracking-wider uppercase mb-3" style={{ color: '#8B97A8' }}>
          Producție ultimele 7 zile
        </p>
        <svg viewBox="0 0 220 56" width="100%" height="56" fill="none">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="chartLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <path
            d="M 0 44 L 30 38 L 62 42 L 94 28 L 126 20 L 158 10 L 190 6 L 220 14 L 220 56 L 0 56 Z"
            fill="url(#chartFill)"
          />
          <motion.path
            d="M 0 44 L 30 38 L 62 42 L 94 28 L 126 20 L 158 10 L 190 6 L 220 14"
            stroke="url(#chartLine)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
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
    <div className="p-4 space-y-3">
      <div
        className="rounded-lg p-4"
        style={{ background: 'linear-gradient(135deg, #0F2444, #0A1628)', border: '1px solid rgba(59,130,246,0.15)' }}
      >
        <div className="h-2 w-3/4 rounded mb-2" style={{ background: 'rgba(59,130,246,0.4)' }} />
        <div className="h-2 w-1/2 rounded mb-4" style={{ background: 'rgba(255,255,255,0.12)' }} />
        <div className="flex gap-2">
          <div className="h-6 w-16 rounded-md" style={{ background: '#3B82F6' }} />
          <div
            className="h-6 w-14 rounded-md"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {(['#3B82F6', '#06B6D4', '#10B981'] as const).map((c) => (
          <div key={c} className="rounded-lg p-2" style={{ background: '#0D1117', border: '1px solid #1E2530' }}>
            <div className="w-5 h-5 rounded mb-1.5" style={{ background: `${c}20`, border: `1px solid ${c}40` }} />
            <div className="h-1.5 w-full rounded mb-1" style={{ background: 'rgba(255,255,255,0.08)' }} />
            <div className="h-1.5 w-2/3 rounded" style={{ background: 'rgba(255,255,255,0.05)' }} />
          </div>
        ))}
      </div>

      <div className="rounded-lg p-3" style={{ background: '#0D1117', border: '1px solid #1E2530' }}>
        <div className="h-1.5 w-1/3 rounded mb-2" style={{ background: 'rgba(255,255,255,0.1)' }} />
        <div className="h-5 w-full rounded mb-1.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E2530' }} />
        <div className="h-5 w-full rounded mb-1.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1E2530' }} />
        <div className="h-5 w-1/2 rounded" style={{ background: '#10B981' }} />
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
      style={{ background: '#0A0B0E', border: '1px solid #1E2530' }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: '1px solid #1E2530' }}>
        <div className="flex gap-1.5">
          {(['#EF4444', '#EAB308', '#22C55E'] as const).map((c) => (
            <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.6 }} aria-hidden="true" />
          ))}
        </div>
        <div
          className="flex-1 h-5 rounded-md mx-2 flex items-center px-2"
          style={{ background: '#0D1117', border: '1px solid #1E2530' }}
        >
          <span className="font-mono text-[9px]" style={{ color: '#8B97A8' }}>
            {activeTab === 'apps' ? 'dashboard.firma.ro' : 'firma-ta.ro'}
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
