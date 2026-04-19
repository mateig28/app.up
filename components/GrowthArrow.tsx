'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useReducedMotion, useInView, animate } from 'framer-motion'

const STATS = [
  { to: 10,   suffix: ' săptămâni', label: 'livrare per proiect', prefix: 'max.' },
  { to: 3000, suffix: '€',          label: 'preț de pornire',      prefix: 'de la' },
  { to: 3,    suffix: ' luni',      label: 'suport inclus',        prefix: '' },
]

function AnimatedCounter({ to, prefix, suffix, label, active }: {
  to: number; prefix: string; suffix: string; label: string; active: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    if (!active) return
    if (shouldReduce) {
      if (ref.current) ref.current.textContent = to.toLocaleString('ro-RO')
      return
    }
    const ctrl = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString('ro-RO')
      },
    })
    return () => ctrl.stop()
  }, [active, to, shouldReduce])

  return (
    <div className="text-center">
      <p className="font-mono text-[10px] tracking-widest uppercase mb-2" style={{ color: '#3B82F6' }}>
        {prefix}
      </p>
      <p className="text-4xl font-bold tracking-tight" style={{ color: '#F0F6FF' }}>
        <span ref={ref}>0</span>
        <span>{suffix}</span>
      </p>
      <p className="text-sm mt-2" style={{ color: '#8B97A8' }}>{label}</p>
    </div>
  )
}

export function GrowthArrow() {
  const shouldReduce = useReducedMotion() ?? false
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [fired, setFired] = useState(false)

  useEffect(() => {
    if (inView && !fired) setFired(true)
  }, [inView, fired])

  const pathInit = shouldReduce
    ? { pathLength: 1 as number, opacity: 0.7 }
    : { pathLength: 0 as number, opacity: 0 }
  const pathTarget = { pathLength: 1 as number, opacity: 0.7 }

  return (
    <div ref={sectionRef} className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Arrow SVG */}
        <div className="mb-16 flex justify-center">
          <svg
            viewBox="0 0 560 80"
            width="100%"
            height="80"
            fill="none"
            aria-hidden="true"
            style={{ maxWidth: 560, overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="arrowGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>

            {/* Baseline */}
            <line x1="0" y1="68" x2="560" y2="68" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

            {/* Arrow shaft — bottom-left to top-right */}
            <motion.line
              x1="20" y1="65"
              x2="490" y2="12"
              stroke="url(#arrowGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={pathInit}
              whileInView={pathTarget}
              viewport={{ once: true, margin: '-80px' }}
              transition={shouldReduce ? { duration: 0 } : { duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Arrow head */}
            <motion.path
              d="M 478 6 L 490 12 L 484 24"
              stroke="url(#arrowGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={pathInit}
              whileInView={pathTarget}
              viewport={{ once: true, margin: '-80px' }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.35, delay: 1.5, ease: 'easeOut' }}
            />

            {/* Decorative end dot */}
            <motion.circle
              cx="490" cy="12" r="4"
              fill="#10B981"
              initial={shouldReduce ? { opacity: 0.8, scale: 1 } : { opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.8, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.3, delay: 1.8 }}
            />

            {/* Second parallel line for depth */}
            <motion.line
              x1="20" y1="70"
              x2="470" y2="20"
              stroke="rgba(59,130,246,0.1)"
              strokeWidth="8"
              strokeLinecap="round"
              initial={pathInit}
              whileInView={pathTarget}
              viewport={{ once: true, margin: '-80px' }}
              transition={shouldReduce ? { duration: 0 } : { duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-3 gap-8 sm:gap-12">
          {STATS.map((s) => (
            <AnimatedCounter key={s.label} {...s} active={fired} />
          ))}
        </div>
      </div>
    </div>
  )
}
