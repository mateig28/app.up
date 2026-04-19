'use client'

import { motion, useReducedMotion } from 'framer-motion'

type Tab = { id: string; label: string }

type Props = {
  tabs: Tab[]
  activeTab: string
  onTabChange: (id: string) => void
  variant?: 'blue' | 'violet'
}

export function TabSwitcher({ tabs, activeTab, onTabChange, variant = 'blue' }: Props) {
  const shouldReduce = useReducedMotion() ?? false

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

  const pillGradient =
    variant === 'blue'
      ? 'linear-gradient(135deg, #3B82F6, #6366F1)'
      : 'linear-gradient(135deg, #8B5CF6, #EC4899)'

  return (
    <div
      role="tablist"
      aria-label="Selectează serviciul"
      className="relative inline-flex glass rounded-xl p-1 gap-0.5"
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
            className="relative px-6 py-2.5 text-sm font-medium rounded-lg transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 min-h-[40px] min-w-[140px]"
            style={{ color: isActive ? '#F8FAFC' : '#94A3B8' }}
          >
            {isActive &&
              (shouldReduce ? (
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{ background: pillGradient }}
                />
              ) : (
                <motion.div
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: pillGradient }}
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
