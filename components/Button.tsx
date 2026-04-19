'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'primary-emerald' | 'ghost' | 'ghost-sm'

type Props = {
  variant?: Variant
  href?: string
  children: ReactNode
  className?: string
  onClick?: () => void
  target?: string
  rel?: string
  'aria-label'?: string
}

const STYLES: Record<Variant, string> = {
  'primary': [
    'inline-flex items-center justify-center gap-2',
    'bg-[#3B82F6] hover:bg-[#2563EB] text-white',
    'px-5 py-2.5 rounded-lg text-sm font-medium',
    'transition-colors duration-200',
    'min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400',
  ].join(' '),
  'primary-emerald': [
    'inline-flex items-center justify-center gap-2',
    'bg-[#10B981] hover:bg-[#059669] text-white',
    'px-5 py-2.5 rounded-lg text-sm font-medium',
    'transition-colors duration-200',
    'min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400',
  ].join(' '),
  'ghost': [
    'inline-flex items-center justify-center gap-2',
    'border border-[#1E2530] text-[#8B97A8] hover:text-[#F0F6FF] hover:border-[#3B82F6]',
    'px-5 py-2.5 rounded-lg text-sm font-medium',
    'transition-colors duration-200',
    'min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400',
  ].join(' '),
  'ghost-sm': [
    'inline-flex items-center justify-center gap-1.5',
    'border border-[#1E2530] text-[#8B97A8] hover:text-[#F0F6FF] hover:border-[#3B82F6]',
    'px-3 py-1.5 rounded-md text-xs font-medium',
    'transition-colors duration-200',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400',
  ].join(' '),
}

export function Button({
  variant = 'ghost',
  href,
  children,
  className = '',
  onClick,
  target,
  rel,
  'aria-label': ariaLabel,
}: Props) {
  const cls = `${STYLES[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={cls}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={cls}
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
