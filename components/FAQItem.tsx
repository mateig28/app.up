'use client'

import { Plus, Minus } from 'lucide-react'

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b" style={{ borderColor: '#2C2C28' }}>
      <summary className="flex items-start justify-between gap-4 py-5 cursor-pointer select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C14E30] rounded-sm">
        <span className="text-sm font-medium leading-snug" style={{ color: '#F2EDE4' }}>
          {question}
        </span>
        <span
          className="shrink-0 mt-0.5 transition-colors duration-150"
          style={{ color: '#8C8882' }}
          aria-hidden="true"
        >
          <Plus className="w-4 h-4 group-open:hidden" />
          <Minus className="w-4 h-4 hidden group-open:block" />
        </span>
      </summary>
      <p className="pb-5 text-sm leading-[1.75] pr-8" style={{ color: '#8C8882' }}>
        {answer}
      </p>
    </details>
  )
}
