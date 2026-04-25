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
  accentGradient?: 'blue' | 'emerald'
  maintenance?: string
  ctaHref?: string
  onColoredSection?: boolean
}

function CardInner({
  name, tagline, duration, price, description, examples, steps,
  featured, accentGradient, maintenance, ctaHref, onColoredSection,
}: PackageCardProps) {
  const isBlue = accentGradient !== 'emerald'
  const accentColor = isBlue ? '#C14E30' : '#E8805E'
  const gradient = isBlue
    ? 'linear-gradient(135deg, #C14E30, #E8805E)'
    : 'linear-gradient(135deg, #E8805E, #C14E30)'

  const cardBg = featured
    ? '#191916'
    : onColoredSection
      ? 'rgba(0,0,0,0.25)'
      : '#1F1F1B'

  const cardClass = featured
    ? 'relative flex flex-col h-full rounded-2xl p-6'
    : onColoredSection
      ? `card-colored ${isBlue ? 'card-colored-blue' : 'card-colored-emerald'} relative flex flex-col h-full rounded-2xl p-6`
      : 'card-dark relative flex flex-col h-full rounded-2xl p-6'

  return (
    <div
      className={cardClass}
      style={{ background: cardBg, border: featured ? 'none' : undefined }}
    >
      {featured && (
        <div
          className="absolute -top-3.5 left-6 font-sans text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={{ background: gradient, color: '#fff' }}
        >
          Cel mai ales
        </div>
      )}

      <div className="mb-5">
        <div className="flex items-baseline justify-between mb-1">
          <span className="font-sans text-[10px] tracking-widest uppercase" style={{ color: accentColor }}>
            {name}
          </span>
          <span className="font-sans text-[10px]" style={{ color: '#8C8882' }}>
            {duration}
          </span>
        </div>
        <p className="text-xs mt-1" style={{ color: '#8C8882' }}>{tagline}</p>
      </div>

      <p className="font-serif text-2xl font-semibold tracking-tight mb-2" style={{ color: '#F2EDE4' }}>
        {price}
      </p>
      <p className="text-sm mb-5 leading-[1.75]" style={{ color: '#8C8882' }}>
        {description}
      </p>

      <ul className="space-y-2 mb-6 flex-1">
        {examples.map((ex) => (
          <li key={ex} className="flex items-start gap-2 text-sm" style={{ color: '#8C8882' }}>
            <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: accentColor }} aria-hidden="true" />
            {ex}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <p
          className="font-sans text-[9px] tracking-widest uppercase mb-3"
          style={{ color: 'rgba(140,136,130,0.5)' }}
        >
          Proces
        </p>
        <ol className="space-y-2 mb-4">
          {steps.map((s, i) => (
            <li key={s.label} className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span className="font-sans text-[9px]" style={{ color: 'rgba(140,136,130,0.4)' }}>
                  0{i + 1}
                </span>
                <span className="text-xs" style={{ color: '#8C8882' }}>{s.label}</span>
              </span>
              <span className="font-sans text-[9px]" style={{ color: 'rgba(140,136,130,0.5)' }}>
                {s.duration}
              </span>
            </li>
          ))}
        </ol>

        {maintenance && (
          <p className="text-xs mb-4" style={{ color: 'rgba(140,136,130,0.5)' }}>
            + Mentenanță opțională {maintenance}
          </p>
        )}

        <a
          href={ctaHref ?? '#contact'}
          className="inline-flex items-center justify-center gap-2 w-full rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]"
          style={
            featured
              ? { background: gradient, color: '#fff' }
              : {
                  border: `1px solid ${accentColor}40`,
                  color: accentColor,
                  background: 'transparent',
                }
          }
          onMouseEnter={(e) => {
            if (!featured) (e.currentTarget as HTMLAnchorElement).style.background = `${accentColor}12`
          }}
          onMouseLeave={(e) => {
            if (!featured) (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
          }}
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
    const spinClass = props.accentGradient === 'emerald' ? 'gradient-spin-emerald' : 'gradient-spin-blue'
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
    <div className="h-full">
      <CardInner {...props} />
    </div>
  )
}
