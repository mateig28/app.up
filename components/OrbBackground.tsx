'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function OrbBackground() {
  const shouldReduce = useReducedMotion() ?? false
  if (shouldReduce) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 720,
          height: 720,
          background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: '-180px',
          left: '-160px',
        }}
        animate={{ x: [0, 90, -40, 0], y: [0, -70, 90, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 580,
          height: 580,
          background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: '25%',
          right: '-120px',
        }}
        animate={{ x: [0, -70, 50, 0], y: [0, 90, -55, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3, repeatType: 'mirror' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 480,
          height: 480,
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: '-80px',
          left: '38%',
        }}
        animate={{ x: [0, 55, -75, 0], y: [0, -65, 45, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 7, repeatType: 'mirror' }}
      />
    </div>
  )
}
