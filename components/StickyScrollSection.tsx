'use client'

import { useRef, useState, useEffect } from 'react'
import { useScroll, useTransform, motion, AnimatePresence, useMotionValueEvent, useReducedMotion } from 'framer-motion'

export type ScrollStep = {
  label: string
  title: string
  description: string
  mockup: React.ReactNode
}

type Props = {
  id?: string
  steps: ScrollStep[]
  accent: string
  bg?: string
}

const EASE = [0.16, 1, 0.3, 1] as const

export function StickyScrollSection({ id, steps, accent, bg = '#09090B' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [prevStep, setPrevStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    setMounted(true)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const shouldReduce = useReducedMotion() ?? false

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const n = steps.length
  const stepIndex = useTransform(
    scrollYProgress,
    steps.map((_, i) => i / n),
    steps.map((_, i) => i),
  )

  // Dot Y position along the progress line (0% to 100%)
  const dotY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useMotionValueEvent(stepIndex, 'change', (latest) => {
    if (isMobile || shouldReduce) return
    const next = Math.min(Math.round(latest), n - 1)
    if (next !== currentStep) {
      setPrevStep(currentStep)
      setCurrentStep(next)
    }
  })

  const dir = currentStep >= prevStep ? 1 : -1

  if (!mounted) {
    return <div style={{ height: '3rem', background: bg }} />
  }

  /* ── MOBILE ── */
  if (isMobile || shouldReduce) {
    return (
      <section id={id} style={{ background: bg }} className="py-16">
        <div className="max-w-5xl mx-auto px-5 space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <p
                className="font-mono text-[11px] tracking-widest uppercase mb-4"
                style={{ color: accent }}
              >
                {step.label}
              </p>
              <h3
                className="font-semibold leading-snug mb-4"
                style={{ color: '#F8FAFC', fontSize: '1.5rem', lineHeight: 1.25 }}
              >
                {step.title}
              </h3>
              <p
                className="leading-[1.75] mb-8"
                style={{ color: '#94A3B8', fontSize: '1rem' }}
              >
                {step.description}
              </p>
              <div
                className="rounded-xl overflow-hidden"
                style={{ border: '1px solid #1E2530' }}
              >
                {step.mockup}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    )
  }

  /* ── DESKTOP sticky ── */
  return (
    <section id={id} style={{ background: bg }}>
      <div
        ref={containerRef}
        data-lenis-prevent
        style={{ height: `${n * 100}vh` }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            display: 'flex',
            overflow: 'hidden',
          }}
        >
          {/* LEFT — text 45% */}
          <div
            style={{
              width: '45%',
              padding: '0 4rem',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Vertical progress line */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '2rem',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 1,
                height: 220,
                background: '#1E2530',
              }}
            >
              {/* Step dots */}
              {steps.map((_, i) => {
                const topPct = n === 1 ? '50%' : `${(i / (n - 1)) * 100}%`
                return (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      top: topPct,
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: i <= currentStep ? accent : '#09090B',
                      border: `1.5px solid ${i <= currentStep ? accent : '#2A3240'}`,
                      transition: 'background 0.35s, border-color 0.35s',
                      zIndex: 1,
                    }}
                  />
                )
              })}
              {/* Moving dot */}
              <motion.div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: dotY,
                  x: '-50%',
                  y: '-50%',
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  background: accent,
                  boxShadow: `0 0 8px ${accent}`,
                  zIndex: 2,
                }}
              />
            </div>

            {/* Text block */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: dir * 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: dir * -20 }}
                transition={{ duration: 0.4, ease: EASE }}
                style={{ paddingLeft: '2.5rem' }}
              >
                <p
                  className="font-mono uppercase tracking-widest mb-5"
                  style={{ fontSize: 11, color: accent }}
                >
                  {steps[currentStep].label}
                </p>
                <h3
                  className="font-semibold leading-snug mb-5"
                  style={{ color: '#F8FAFC', fontSize: '1.875rem', lineHeight: 1.2 }}
                >
                  {steps[currentStep].title}
                </h3>
                <p
                  className="leading-[1.75]"
                  style={{ color: '#94A3B8', fontSize: '1rem', maxWidth: '26rem' }}
                >
                  {steps[currentStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — mockup 55% */}
          <div
            style={{
              width: '55%',
              display: 'flex',
              alignItems: 'center',
              padding: '2rem 3rem 2rem 1rem',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{ width: '100%' }}
              >
                {steps[currentStep].mockup}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
