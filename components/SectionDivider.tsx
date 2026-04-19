type Props = {
  from: string
  to: string
  flip?: boolean
}

export function SectionDivider({ from, to, flip = false }: Props) {
  const points = flip
    ? '0,0 1440,0 1440,60'
    : '0,0 1440,0 0,60'

  return (
    <div aria-hidden="true" style={{ background: to, lineHeight: 0, display: 'block', margin: 0 }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        width="100%"
        height="60"
        style={{ display: 'block' }}
      >
        <polygon points={points} fill={from} />
      </svg>
    </div>
  )
}
