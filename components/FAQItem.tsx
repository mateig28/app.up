type FAQItemProps = {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group border-b border-zinc-200 last:border-0">
      <summary className="flex items-start justify-between gap-4 py-5 cursor-pointer select-none">
        <span className="text-sm font-medium text-zinc-900 leading-snug pr-4">
          {question}
        </span>
        <span
          className="shrink-0 mt-0.5 text-zinc-400 text-xl leading-none group-open:hidden"
          aria-hidden="true"
        >
          +
        </span>
        <span
          className="shrink-0 mt-0.5 text-zinc-400 text-xl leading-none hidden group-open:block"
          aria-hidden="true"
        >
          −
        </span>
      </summary>
      <p className="pb-5 text-sm text-zinc-600 leading-relaxed pr-8">
        {answer}
      </p>
    </details>
  )
}
