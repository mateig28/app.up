type PainPointProps = {
  number: string
  title: string
  body: string
}

export function PainPoint({ number, title, body }: PainPointProps) {
  return (
    <div className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors duration-200">
      <p className="font-mono text-xs tracking-widest text-zinc-600 mb-3">
        {number}
      </p>
      <h3 className="text-base font-semibold text-zinc-100 mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{body}</p>
    </div>
  )
}
