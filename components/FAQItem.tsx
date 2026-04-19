'use client'

import { Plus, Minus } from 'lucide-react'

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <summary className="flex items-start justify-between gap-4 py-5 cursor-pointer select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 rounded-sm">
        <span className="text-sm font-medium leading-snug" style={{ color: '#F8FAFC' }}>
          {question}
        </span>
        <span
          className="shrink-0 mt-0.5 transition-colors duration-150"
          style={{ color: 'rgba(148,163,184,0.55)' }}
          aria-hidden="true"
        >
          <Plus className="w-4 h-4 group-open:hidden" />
          <Minus className="w-4 h-4 hidden group-open:block" />
        </span>
      </summary>
      <p className="pb-5 text-sm leading-[1.75] pr-8" style={{ color: '#94A3B8' }}>
        {answer}
      </p>
    </details>
  )
}
