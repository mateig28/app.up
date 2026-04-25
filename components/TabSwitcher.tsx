'use client'

import { motion, useReducedMotion } from 'framer-motion'

type Tab = { id: string; label: string }

type Props = {
  tabs: Tab[]
  activeTab: string
  onTabChange: (id: string) => void
  variant?: 'blue' | 'emerald'
}

export function TabSwitcher({ tabs, activeTab, onTabChange, variant = 'blue' }: Props) {
  const shouldReduce = useReducedMotion() ?? false

  const isBlue = variant === 'blue'
  const accentColor = isBlue ? '#C14E30' : '#E8805E'
  const pillBg = isBlue ? '#C14E30' : '#E8805E'
  const pillGlow = isBlue
    ? '0 0 12px rgba(193,78,48,0.4)'
    : '0 0 12px rgba(232,128,94,0.4)'

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index
    if (e.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length
    else if (e.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length
    else return
    e.preventDefault()
    onTabChange(tabs[nextIndex].id)
    const el = document.querySelector<HTMLElement>(`[data-tab="${tabs[nextIndex].id}"]`)
    el?.focus()
  }

  return (
    <div
      role="tablist"
      aria-label="Selectează serviciul"
      className="relative inline-flex rounded-xl p-1 gap-0.5"
      style={{ background: '#1F1F1B', border: '1px solid #2C2C28' }}
    >
      {tabs.map((tab, i) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            role="tab"
            data-tab={tab.id}
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onTabChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className="relative px-6 py-2.5 text-sm font-medium rounded-lg transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 min-h-[40px] min-w-[140px]"
            style={{
              color: isActive ? '#F2EDE4' : '#8C8882',
              outlineColor: accentColor,
            }}
          >
            {isActive &&
              (shouldReduce ? (
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{ background: pillBg, boxShadow: pillGlow }}
                />
              ) : (
                <motion.div
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: pillBg, boxShadow: pillGlow }}
                  transition={{ type: 'spring', bounce: 0.18, duration: 0.4 }}
                />
              ))}
            <span className="relative z-10">{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
