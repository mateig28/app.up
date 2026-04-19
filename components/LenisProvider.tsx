'use client'

import { useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    if (shouldReduce) return
    if (window.matchMedia('(max-width: 768px)').matches) return

    let rafId: number

    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      } as ConstructorParameters<typeof Lenis>[0])

      function raf(time: number) {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)

      return () => {
        cancelAnimationFrame(rafId)
        lenis.destroy()
      }
    })

    return () => cancelAnimationFrame(rafId)
  }, [shouldReduce])

  return <>{children}</>
}
