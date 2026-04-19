'use client'

import type { ReactNode } from 'react'

type Variant = 'gradient-blue' | 'gradient-violet' | 'ghost' | 'ghost-sm'

type Props = {
  variant?: Variant
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  'aria-label'?: string
  target?: '_blank' | '_self'
  rel?: string
  type?: 'button' | 'submit'
}

const BASE =
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 min-h-[44px] px-5 py-2.5 text-sm rounded-lg active:scale-[0.98] select-none'

const VARIANTS: Record<Variant, string> = {
  'gradient-blue':
    'bg-gradient-to-r from-blue-500 to-indigo-500 text-white glow-blue focus-visible:outline-blue-400',
  'gradient-violet':
    'bg-gradient-to-r from-violet-500 to-pink-500 text-white glow-violet focus-visible:outline-violet-400',
  ghost:
    'border border-white/10 text-slate-300 hover:border-white/20 hover:text-white bg-white/[0.03] focus-visible:outline-white/40',
  'ghost-sm':
    'border border-white/10 text-slate-400 hover:border-white/18 hover:text-slate-200 bg-transparent text-xs min-h-[36px] px-4 py-2 focus-visible:outline-white/40',
}

export function Button({
  variant = 'gradient-blue',
  href,
  onClick,
  children,
  className = '',
  'aria-label': ariaLabel,
  target,
  rel,
  type = 'button',
}: Props) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
