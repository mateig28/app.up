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
        className="font-serif text-4xl font-semibold mb-4 leading-none"
        style={{ color: 'rgba(193,78,48,0.2)' }}
        aria-hidden="true"
      >
        {number}
      </p>
      <h3 className="text-base font-semibold mb-3 leading-snug" style={{ color: '#F2EDE4' }}>
        {title}
      </h3>
      <p className="text-sm leading-[1.75]" style={{ color: 'rgba(242,237,228,0.65)' }}>
        {body}
      </p>
    </div>
  )
}
