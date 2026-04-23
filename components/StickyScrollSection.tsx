'use client'

import { useRef, useState, useEffect } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion'

export type ScrollStep = {
  label: string
  title: string
  description: string
  decorative?: React.ReactNode
  mockupState: string
}

type Props = {
  id?: string
  eyebrow: string
  heading: string
  steps: ScrollStep[]
  accent: 'blue' | 'emerald'
  renderMockup: (state: string) => React.ReactNode
  bg?: string
}

const EASE = [0.16, 1, 0.3, 1] as const

export function StickyScrollSection({
  id,
  eyebrow,
  heading,
  steps,
  accent,
  renderMockup,
  bg = '#08090A',
}: Props) {
  const shouldReduce = useReducedMotion() ?? false
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [prevStep, setPrevStep] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const isMobileRef = useRef(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const check = () => {
      const m = window.innerWidth < 768
      setIsMobile(m)
      isMobileRef.current = m
    }
    check()
    setMounted(true)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (isMobileRef.current || shouldReduce) return
    const n = steps.length
    const next = Math.min(Math.floor(latest * n), n - 1)
    if (next !== currentStep) {
      setPrevStep(currentStep)
      setCurrentStep(next)
    }
  })

  const accentColor = accent === 'blue' ? '#3B82F6' : '#10B981'
  const dir = currentStep >= prevStep ? 1 : -1
  const step = steps[currentStep]

  if (!mounted) {
    return <div style={{ height: '3rem', background: bg }} />
  }

  /* ── MOBILE ──────────────────────────────────────────────── */
  if (isMobile || shouldReduce) {
    return (
      <section id={id} style={{ background: bg }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="font-mono text-[10px] tracking-widest uppercase mb-4"
            style={{ color: accentColor }}
          >
            {eyebrow}
          </p>
          <h2
            className="text-2xl font-bold tracking-tight mb-12 leading-tight"
            style={{ color: '#F0F6FF' }}
          >
            {heading}
          </h2>

          <div className="space-y-16">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <p
                  className="font-mono text-[9px] tracking-widest uppercase mb-3"
                  style={{ color: accentColor }}
                >
                  {s.label}
                </p>
                <h3
                  className="text-xl font-semibold mb-3 leading-snug"
                  style={{ color: '#F0F6FF' }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-[1.75] mb-6"
                  style={{ color: '#8B97A8' }}
                >
                  {s.description}
                </p>
                {s.decorative && <div className="mb-6">{s.decorative}</div>}
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ border: '1px solid #1E2530' }}
                >
                  {renderMockup(s.mockupState)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  /* ── DESKTOP sticky scroll ───────────────────────────────── */
  return (
    <section id={id} style={{ background: bg }}>
      <div
        ref={containerRef}
        style={{ height: `${steps.length * 100}vh` }}
      >
        {/* Sticky panel */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Fixed heading */}
          <div className="pt-14 pb-5 max-w-6xl mx-auto px-6 w-full flex-shrink-0">
            <p
              className="font-mono text-[10px] tracking-widest uppercase mb-3"
              style={{ color: accentColor }}
            >
              {eyebrow}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight"
              style={{ color: '#F0F6FF' }}
            >
              {heading}
            </h2>
          </div>

          {/* Content */}
          <div className="flex-1 flex items-center min-h-0 pb-10">
            <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-12 gap-6 items-center">

              {/* Progress indicator */}
              <div className="col-span-1 flex justify-center" aria-hidden="true">
                <div className="relative w-px" style={{ height: 280, background: '#1E2530' }}>
                  {/* Animated fill */}
                  <motion.div
                    className="absolute top-0 left-0 w-px origin-top"
                    style={{ height: lineProgress, background: accentColor }}
                  />
                  {/* Step dots */}
                  {steps.map((_, i) => {
                    const topPct = i === 0 ? '0%' : i === steps.length - 1 ? '100%' : `${(i / (steps.length - 1)) * 100}%`
                    return (
                      <div
                        key={i}
                        className="absolute -left-[3px] w-[7px] h-[7px] rounded-full"
                        style={{
                          top: topPct,
                          transform: 'translateY(-50%)',
                          background: i <= currentStep ? accentColor : '#0D1117',
                          border: `1.5px solid ${i <= currentStep ? accentColor : '#2A3240'}`,
                          transition: 'background 0.3s, border-color 0.3s',
                          zIndex: 1,
                        }}
                      />
                    )
                  })}
                </div>
              </div>

              {/* Text — 4 cols */}
              <div className="col-span-4">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: dir * 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: dir * -20 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <p
                      className="font-mono text-[9px] tracking-widest uppercase mb-4"
                      style={{ color: accentColor }}
                    >
                      {step.label}
                    </p>
                    <h3
                      className="font-semibold leading-snug mb-5 tracking-tight"
                      style={{ color: '#F0F6FF', fontSize: '1.6rem', lineHeight: 1.22 }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="leading-[1.75]"
                      style={{ color: '#8B97A8', fontSize: '0.9375rem', maxWidth: '22rem' }}
                    >
                      {step.description}
                    </p>
                    {step.decorative && (
                      <div className="mt-8" aria-hidden="true">
                        {step.decorative}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mockup — 7 cols */}
              <div className="col-span-7">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={step.mockupState}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {renderMockup(step.mockupState)}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
