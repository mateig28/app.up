'use client'

import { useReducedMotion, motion, AnimatePresence } from 'framer-motion'

const CX = 200
const CY = 155

type Node = { label: string; x: number; y: number }

function polar(angle: number, radius: number): { x: number; y: number } {
  const rad = (angle * Math.PI) / 180
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) }
}

const APPS_NODES: Node[] = [
  { label: 'Rapoarte', ...polar(-90, 108) },
  { label: 'Vânzări',  ...polar(-18, 108) },
  { label: 'Stocuri',  ...polar(54, 108) },
  { label: 'Pontaj',   ...polar(126, 108) },
  { label: 'Producție',...polar(198, 108) },
]

const SITES_NODES: Node[] = [
  { label: 'Antreprenor',      ...polar(-90, 100) },
  { label: 'Firmă mică',       ...polar(30, 100) },
  { label: 'Persoană publică', ...polar(150, 100) },
]

function FlowLine({ x1, y1, x2, y2, delay, shouldReduce }: {
  x1: number; y1: number; x2: number; y2: number
  delay: number; shouldReduce: boolean
}) {
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="rgba(59,130,246,0.3)"
      strokeWidth="1"
      className={shouldReduce ? '' : 'svg-flow'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.4 }}
    />
  )
}

function NodeCircle({ x, y, label, delay, color, r = 20, shouldReduce }: {
  x: number; y: number; label: string; delay: number
  color: string; r?: number; shouldReduce: boolean
}) {
  const labelBelow = y > CY
  const labelY = labelBelow ? y + r + 14 : y - r - 6

  return (
    <motion.g
      initial={shouldReduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <circle cx={x} cy={y} r={r} fill={`${color}12`} stroke={color} strokeWidth="1" />
      <text
        x={x}
        y={labelY}
        textAnchor="middle"
        fontSize="9"
        fontFamily="var(--font-geist-mono)"
        fill="rgba(240,246,255,0.55)"
        letterSpacing="0.08em"
      >
        {label.toUpperCase()}
      </text>
    </motion.g>
  )
}

function AppsAnimation({ shouldReduce }: { shouldReduce: boolean }) {
  return (
    <g>
      {/* Flow lines */}
      {APPS_NODES.map((n, i) => (
        <FlowLine
          key={n.label}
          x1={CX} y1={CY}
          x2={n.x} y2={n.y}
          delay={shouldReduce ? 0 : 0.2 + i * 0.1}
          shouldReduce={shouldReduce}
        />
      ))}

      {/* Growth arrow — top right */}
      <motion.path
        d="M 310 40 L 360 10"
        stroke="url(#growthGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={shouldReduce ? { pathLength: 1, opacity: 0.8 } : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.8 }}
        transition={{ delay: shouldReduce ? 0 : 0.8, duration: 0.6 }}
      />
      <motion.path
        d="M 352 10 L 360 10 L 360 18"
        stroke="url(#growthGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={shouldReduce ? { pathLength: 1, opacity: 0.8 } : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.8 }}
        transition={{ delay: shouldReduce ? 0 : 1.3, duration: 0.3 }}
      />

      {/* Satellite nodes */}
      {APPS_NODES.map((n, i) => (
        <NodeCircle
          key={n.label}
          {...n}
          color="#3B82F6"
          delay={shouldReduce ? 0 : 0.3 + i * 0.1}
          shouldReduce={shouldReduce}
        />
      ))}

      {/* Central node */}
      <motion.g
        initial={shouldReduce ? { opacity: 1 } : { opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <circle cx={CX} cy={CY} r={28} fill="rgba(59,130,246,0.1)" stroke="#3B82F6" strokeWidth="1.5" />
        <text
          x={CX} y={CY - 5}
          textAnchor="middle"
          fontSize="8"
          fontFamily="var(--font-geist-mono)"
          fill="rgba(240,246,255,0.5)"
          letterSpacing="0.1em"
        >
          FIRMĂ
        </text>
        <text
          x={CX} y={CY + 7}
          textAnchor="middle"
          fontSize="7"
          fontFamily="var(--font-geist-mono)"
          fill="rgba(59,130,246,0.7)"
          letterSpacing="0.08em"
        >
          LIVE
        </text>
      </motion.g>
    </g>
  )
}

function SitesAnimation({ shouldReduce }: { shouldReduce: boolean }) {
  return (
    <g>
      {/* Attraction lines */}
      {SITES_NODES.map((n, i) => (
        <motion.line
          key={n.label}
          x1={n.x} y1={n.y} x2={CX} y2={CY}
          stroke="rgba(16,185,129,0.25)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldReduce ? 0 : 0.2 + i * 0.15, duration: 0.5 }}
        />
      ))}

      {/* Satellite nodes — pulse toward center */}
      {SITES_NODES.map((n, i) => {
        const dx = (CX - n.x) * 0.08
        const dy = (CY - n.y) * 0.08
        return (
          <motion.g
            key={n.label}
            initial={shouldReduce ? { opacity: 1 } : { opacity: 0, x: dx * 2, y: dy * 2 }}
            animate={
              shouldReduce
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    x: [0, dx, 0],
                    y: [0, dy, 0],
                    scale: [1, 1.05, 1],
                  }
            }
            transition={
              shouldReduce
                ? { duration: 0 }
                : {
                    opacity: { delay: 0.2 + i * 0.15, duration: 0.4 },
                    x: { delay: 0.6, duration: 3, repeat: Infinity, ease: 'easeInOut' },
                    y: { delay: 0.6, duration: 3, repeat: Infinity, ease: 'easeInOut' },
                    scale: { delay: 0.6, duration: 3, repeat: Infinity, ease: 'easeInOut' },
                  }
            }
          >
            <circle cx={n.x} cy={n.y} r={20} fill="rgba(16,185,129,0.1)" stroke="#10B981" strokeWidth="1" />
            <text
              x={n.x}
              y={n.y > CY ? n.y + 34 : n.y - 24}
              textAnchor="middle"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
              fill="rgba(240,246,255,0.5)"
              letterSpacing="0.06em"
            >
              {n.label.toUpperCase()}
            </text>
          </motion.g>
        )
      })}

      {/* Central node */}
      <motion.g
        initial={shouldReduce ? { opacity: 1 } : { opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <circle cx={CX} cy={CY} r={28} fill="rgba(16,185,129,0.1)" stroke="#10B981" strokeWidth="1.5" />
        <text
          x={CX} y={CY - 4}
          textAnchor="middle"
          fontSize="9"
          fontFamily="var(--font-geist-mono)"
          fill="rgba(240,246,255,0.55)"
          letterSpacing="0.1em"
        >
          APP.UP
        </text>
        <text
          x={CX} y={CY + 8}
          textAnchor="middle"
          fontSize="7"
          fontFamily="var(--font-geist-mono)"
          fill="rgba(16,185,129,0.7)"
          letterSpacing="0.08em"
        >
          STUDIO
        </text>
      </motion.g>
    </g>
  )
}

export function HeroAnimation({ activeTab }: { activeTab: 'apps' | 'sites' }) {
  const shouldReduce = useReducedMotion() ?? false

  return (
    <div
      role="img"
      aria-label={
        activeTab === 'apps'
          ? 'Diagramă: date din producție, stocuri și vânzări curg în timp real spre tabloul de bord central al firmei'
          : 'Diagramă: app.up conectează antreprenori, firme mici și persoane publice cu prezența lor online'
      }
      className="w-full max-w-[420px] mx-auto"
    >
      <svg
        viewBox="0 0 400 310"
        width="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="growthGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        {/* Subtle grid */}
        {[50, 100, 150, 200, 250, 300].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
        ))}
        {[80, 160, 240, 320].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="310" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
        ))}

        <AnimatePresence mode="wait">
          {activeTab === 'apps' ? (
            <motion.g
              key="apps-anim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AppsAnimation shouldReduce={shouldReduce} />
            </motion.g>
          ) : (
            <motion.g
              key="sites-anim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SitesAnimation shouldReduce={shouldReduce} />
            </motion.g>
          )}
        </AnimatePresence>
      </svg>
    </div>
  )
}
