type PainPointProps = {
  number: string
  title: string
  body: string
}

export function PainPoint({ number, title, body }: PainPointProps) {
  return (
    <div className="glass rounded-2xl p-6 card-hover h-full">
      <p
        className="font-mono text-4xl font-bold mb-4 leading-none"
        style={{ color: 'rgba(59,130,246,0.18)' }}
        aria-hidden="true"
      >
        {number}
      </p>
      <h3 className="text-base font-semibold mb-3 leading-snug" style={{ color: '#F8FAFC' }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
        {body}
      </p>
    </div>
  )
}
