'use client'

import { ArrowRight, Check } from 'lucide-react'

type Step = { label: string; duration: string }

export type PackageCardProps = {
  name: string
  tagline: string
  duration: string
  price: string
  description: string
  examples: string[]
  steps: Step[]
  featured?: boolean
  accentGradient?: 'blue' | 'violet'
  maintenance?: string
  ctaHref?: string
}

function CardInner({
  name,
  tagline,
  duration,
  price,
  description,
  examples,
  steps,
  featured,
  accentGradient,
  maintenance,
  ctaHref,
}: PackageCardProps) {
  const isBlue = accentGradient !== 'violet'
  const accentColor = isBlue ? '#3B82F6' : '#8B5CF6'
  const gradient = isBlue
    ? 'linear-gradient(135deg, #3B82F6, #6366F1)'
    : 'linear-gradient(135deg, #8B5CF6, #EC4899)'
  const glow = isBlue
    ? '0 0 20px rgba(99,102,241,0.4)'
    : '0 0 20px rgba(139,92,246,0.4)'

  return (
    <div
      className="relative flex flex-col h-full rounded-2xl p-6"
      style={{
        background: featured ? 'rgba(10,10,22,0.94)' : 'rgba(255,255,255,0.04)',
        border: featured ? 'none' : '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {featured && (
        <div
          className="absolute -top-3.5 left-6 font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={{ background: gradient, color: '#fff' }}
        >
          Cel mai ales
        </div>
      )}

      <div className="mb-5">
        <div className="flex items-baseline justify-between mb-1">
          <span
            className="font-mono text-[10px] tracking-widest uppercase"
            style={{ color: accentColor }}
          >
            {name}
          </span>
          <span className="font-mono text-[10px]" style={{ color: 'rgba(148,163,184,0.6)' }}>
            {duration}
          </span>
        </div>
        <p className="text-xs mt-1" style={{ color: 'rgba(148,163,184,0.6)' }}>
          {tagline}
        </p>
      </div>

      <p className="text-2xl font-bold tracking-tight mb-2" style={{ color: '#F8FAFC' }}>
        {price}
      </p>
      <p className="text-sm mb-5 leading-relaxed" style={{ color: '#94A3B8' }}>
        {description}
      </p>

      <ul className="space-y-2 mb-6 flex-1">
        {examples.map((ex) => (
          <li key={ex} className="flex items-start gap-2 text-sm" style={{ color: '#94A3B8' }}>
            <Check
              className="w-4 h-4 mt-0.5 shrink-0"
              style={{ color: accentColor }}
              aria-hidden="true"
            />
            {ex}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <p
          className="font-mono text-[9px] tracking-widest uppercase mb-3"
          style={{ color: 'rgba(148,163,184,0.4)' }}
        >
          Proces
        </p>
        <ol className="space-y-2 mb-4">
          {steps.map((s, i) => (
            <li key={s.label} className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span
                  className="font-mono text-[9px]"
                  style={{ color: 'rgba(148,163,184,0.35)' }}
                >
                  0{i + 1}
                </span>
                <span className="text-xs" style={{ color: '#94A3B8' }}>
                  {s.label}
                </span>
              </span>
              <span
                className="font-mono text-[9px]"
                style={{ color: 'rgba(148,163,184,0.45)' }}
              >
                {s.duration}
              </span>
            </li>
          ))}
        </ol>

        {maintenance && (
          <p className="text-xs mb-4" style={{ color: 'rgba(148,163,184,0.45)' }}>
            + Mentenanță opțională {maintenance}
          </p>
        )}

        <a
          href={ctaHref ?? '#contact'}
          className="inline-flex items-center justify-center gap-2 w-full rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]"
          style={
            featured
              ? { background: gradient, color: '#fff', boxShadow: glow }
              : {
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#94A3B8',
                  background: 'transparent',
                }
          }
        >
          Alege pachetul
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}

export function PackageCard(props: PackageCardProps) {
  if (props.featured) {
    const spinClass =
      props.accentGradient === 'violet' ? 'gradient-spin-violet' : 'gradient-spin-blue'
    return (
      <div className="relative rounded-2xl overflow-hidden p-[1px] h-full">
        <div
          className={spinClass}
          style={{ inset: '-50%', width: '200%', height: '200%' }}
          aria-hidden="true"
        />
        <div className="relative h-full rounded-[15px] overflow-hidden">
          <CardInner {...props} />
        </div>
      </div>
    )
  }

  return (
    <div className="h-full card-hover rounded-2xl">
      <CardInner {...props} />
    </div>
  )
}
