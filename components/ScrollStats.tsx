'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView, animate } from 'framer-motion'

type Stat = {
  value: string
  label: string
  numericEnd?: number
  prefix?: string
  suffix?: string
}

function StatItem({ stat, accent }: { stat: Stat; accent: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const fired = useRef(false)
  const [display, setDisplay] = useState(stat.numericEnd !== undefined ? `${stat.prefix ?? ''}0${stat.suffix ?? ''}` : stat.value)

  useEffect(() => {
    if (!inView || fired.current || stat.numericEnd === undefined) return
    fired.current = true
    const end = stat.numericEnd
    const prefix = stat.prefix ?? ''
    const suffix = stat.suffix ?? ''
    const isFloat = String(end).includes('.')
    const controls = animate(0, end, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(`${prefix}${isFloat ? v.toFixed(1) : Math.round(v)}${suffix}`)
      },
    })
    return () => controls.stop()
  }, [inView, stat.numericEnd, stat.prefix, stat.suffix])

  return (
    <div>
      <span
        ref={ref}
        className="scroll-stats-number block font-serif font-semibold"
        style={{ fontSize: '2.8rem', color: accent, lineHeight: 1, letterSpacing: '-0.03em' }}
      >
        {display}
      </span>
      <p className="mt-2 text-sm leading-snug" style={{ color: '#8C8882', maxWidth: '14rem' }}>
        {stat.label}
      </p>
    </div>
  )
}

export function ScrollStats({ stats, accent, bg }: { stats: Stat[]; accent: string; bg?: string }) {
  return (
    <div style={{ background: bg ?? '#191916', borderTop: '1px solid rgba(242,237,228,0.05)' }}>
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="scroll-stats-grid grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} accent={accent} />
          ))}
        </div>
      </div>
    </div>
  )
}
