'use client'

import type { ReactNode } from 'react'

type ButtonProps = {
  variant: 'primary' | 'outline'
  href: string
  children: ReactNode
  className?: string
  'aria-label'?: string
  target?: '_blank' | '_self'
  rel?: string
}

const base =
  'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand min-h-[44px] px-5 py-3 text-sm rounded-md'

const styles = {
  primary: 'bg-brand text-white hover:bg-brand-hover',
  outline:
    'border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white bg-transparent',
}

export function Button({
  variant,
  href,
  children,
  className = '',
  'aria-label': ariaLabel,
  target,
  rel,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  )
}
