'use client'

import { useRef, useState } from 'react'
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
  useMotionValueEvent,
} from 'framer-motion'

type Step = {
  label: string
  title: string
  description: string
  mockup: React.ReactNode
}

type StickyScrollSectionProps = {
  eyebrow: string
  heading: string
  steps: Step[]
  accent: string
}

export function StickyScrollSection({
  eyebrow,
  heading,
  steps,
  accent,
}: StickyScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentStep, setCurrentStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const rawIndex = useTransform(
    scrollYProgress,
    steps.map((_, i) => i / steps.length),
    steps.map((_, i) => i)
  )

  useMotionValueEvent(rawIndex, 'change', (v) => {
    const clamped = Math.min(Math.max(Math.round(v), 0), steps.length - 1)
    setCurrentStep(clamped)
  })

  const dotY = useTransform(scrollYProgress, [0, 1], [0, (steps.length - 1) * 80])

  return (
    <section
      ref={containerRef}
      style={{ height: `${steps.length * 100}vh` }}
      data-lenis-prevent
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'stretch',
          overflow: 'hidden',
        }}
      >
        {/* STÂNGA */}
        <div
          style={{
            width: '45%',
            padding: '0 4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <div>
            <p style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: accent, marginBottom: 12 }}>
              {eyebrow}
            </p>
            <h2 style={{ fontSize: 36, fontWeight: 600, color: '#F8FAFC', letterSpacing: '-0.02em', marginBottom: 0 }}>
              {heading}
            </h2>
          </div>

          {/* Progress indicator */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ position: 'relative', width: 1, background: '#1E2530', flexShrink: 0, height: steps.length * 80 }}>
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: -3,
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: accent,
                  y: dotY,
                }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <p style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: accent, marginBottom: 8 }}>
                  {steps[currentStep].label}
                </p>
                <h3 style={{ fontSize: 26, fontWeight: 600, color: '#F8FAFC', marginBottom: 12, letterSpacing: '-0.01em' }}>
                  {steps[currentStep].title}
                </h3>
                <p style={{ fontSize: 16, color: '#94A3B8', lineHeight: 1.75, maxWidth: 420 }}>
                  {steps[currentStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* DREAPTA — mockup sticky */}
        <div
          style={{
            width: '55%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 3rem 2rem 1rem',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ width: '100%', maxWidth: 640 }}
            >
              {steps[currentStep].mockup}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
