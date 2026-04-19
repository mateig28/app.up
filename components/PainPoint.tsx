type PainPointProps = {
  number: string
  title: string
  body: string
}

export function PainPoint({ number, title, body }: PainPointProps) {
  return (
    <div
      className="card-colored card-colored-blue rounded-2xl p-6 h-full"
    >
      <p
        className="font-mono text-4xl font-bold mb-4 leading-none"
        style={{ color: 'rgba(59,130,246,0.2)' }}
        aria-hidden="true"
      >
        {number}
      </p>
      <h3 className="text-base font-semibold mb-3 leading-snug" style={{ color: '#E8F4FF' }}>
        {title}
      </h3>
      <p className="text-sm leading-[1.75]" style={{ color: 'rgba(232,244,255,0.65)' }}>
        {body}
      </p>
    </div>
  )
}
