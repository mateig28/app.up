'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export function CursorFollower() {
  const shouldReduce = useReducedMotion()
  const [isDesktop, setIsDesktop] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const dotX = useSpring(mouseX, { stiffness: 500, damping: 28 })
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 28 })
  const auraX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const auraY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  const auraRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    setIsDesktop(fine)
  }, [])

  useEffect(() => {
    if (!isDesktop || shouldReduce) return

    // Hide native cursor only when custom cursor is active
    document.documentElement.style.setProperty('cursor', 'none', 'important')
    const style = document.createElement('style')
    style.id = 'cursor-hide'
    style.textContent = '*, *::before, *::after { cursor: none !important; }'
    document.head.appendChild(style)

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const isInteractive = (el: Element | null): boolean => {
      if (!el) return false
      return !!el.closest('button, a, [role="button"], [role="tab"], input, select, textarea')
    }

    const over = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) {
        auraRef.current?.classList.add('cursor-expanded')
      }
    }
    const out = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) {
        auraRef.current?.classList.remove('cursor-expanded')
      }
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)

    return () => {
      document.documentElement.style.removeProperty('cursor')
      document.getElementById('cursor-hide')?.remove()
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [isDesktop, mouseX, mouseY, shouldReduce])

  if (!isDesktop || shouldReduce) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
      {/* Dot — fast, precise */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
        }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C14E30]"
      />
      {/* Aura — laggy */}
      <motion.div
        ref={auraRef}
        style={{
          x: auraX,
          y: auraY,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
        }}
        className="cursor-aura fixed top-0 left-0 rounded-full"
      />
    </div>
  )
}
