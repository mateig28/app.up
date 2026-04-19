import { ArrowRight } from 'lucide-react'

type Step = { phase: string; duration: string }

type PackageCardProps = {
  name: string
  duration: string
  description: string
  examples: string[]
  price: string
  steps: Step[]
  featured?: boolean
  ctaHref: string
}

export function PackageCard({
  name,
  duration,
  description,
  examples,
  price,
  steps,
  featured = false,
  ctaHref,
}: PackageCardProps) {
  return (
    <div
      className={`relative flex flex-col h-full rounded-lg border p-6 transition-colors duration-200 ${
        featured
          ? 'border-brand bg-zinc-900'
          : 'border-zinc-200 bg-white hover:border-zinc-300'
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-6 font-mono text-[10px] tracking-widest uppercase bg-brand text-white px-2.5 py-0.5 rounded-sm">
          Cel mai comun
        </span>
      )}

      {/* Header */}
      <div className="mb-5">
        <div className="flex items-baseline justify-between mb-1">
          <span
            className={`font-mono text-xs tracking-widest uppercase ${
              featured ? 'text-brand' : 'text-zinc-500'
            }`}
          >
            {name}
          </span>
          <span
            className={`font-mono text-xs ${
              featured ? 'text-zinc-400' : 'text-zinc-500'
            }`}
          >
            {duration}
          </span>
        </div>
        <p
          className={`text-sm mt-2 ${
            featured ? 'text-zinc-300' : 'text-zinc-600'
          }`}
        >
          {description}
        </p>
      </div>

      {/* Price */}
      <p
        className={`text-2xl font-semibold tracking-tight mb-5 ${
          featured ? 'text-zinc-100' : 'text-zinc-900'
        }`}
      >
        {price}
      </p>

      {/* Examples */}
      <ul
        className={`text-sm space-y-1 mb-6 ${
          featured ? 'text-zinc-400' : 'text-zinc-500'
        }`}
      >
        {examples.map((ex) => (
          <li key={ex} className="flex items-start gap-2">
            <span
              className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${
                featured ? 'bg-brand' : 'bg-zinc-300'
              }`}
            />
            {ex}
          </li>
        ))}
      </ul>

      {/* Process steps */}
      <div className="mt-auto">
        <p
          className={`font-mono text-[10px] tracking-widest uppercase mb-3 ${
            featured ? 'text-zinc-600' : 'text-zinc-400'
          }`}
        >
          Proces
        </p>
        <ol className="space-y-1.5 mb-6">
          {steps.map((s, i) => (
            <li
              key={s.phase}
              className="flex items-center justify-between gap-4"
            >
              <span className="flex items-center gap-2">
                <span
                  className={`font-mono text-[10px] ${
                    featured ? 'text-zinc-600' : 'text-zinc-400'
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`text-xs ${
                    featured ? 'text-zinc-300' : 'text-zinc-700'
                  }`}
                >
                  {s.phase}
                </span>
              </span>
              <span
                className={`font-mono text-[10px] ${
                  featured ? 'text-zinc-500' : 'text-zinc-400'
                }`}
              >
                {s.duration}
              </span>
            </li>
          ))}
        </ol>

        <a
          href={ctaHref}
          className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand min-h-[44px] w-full justify-center rounded-md px-4 py-2.5 ${
            featured
              ? 'bg-brand text-white hover:bg-brand-hover'
              : 'border border-zinc-200 text-zinc-700 hover:border-zinc-400 hover:text-zinc-900'
          }`}
        >
          Alege pachetul <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
