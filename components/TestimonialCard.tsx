export function TestimonialCard({ index }: { index: number }) {
  return (
    <div
      className="card-colored card-colored-emerald rounded-2xl p-6"
      role="article"
      aria-label={`Testimonial placeholder ${index + 1}`}
    >
      <div className="flex gap-1 mb-5" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4" fill="rgba(234,179,8,0.25)" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <div className="space-y-2 mb-6" aria-hidden="true">
        <div className="h-3 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }} />
        <div className="h-3 rounded-full" style={{ background: 'rgba(255,255,255,0.05)', width: '82%' }} />
        <div className="h-3 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', width: '62%' }} />
      </div>

      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full shrink-0"
          style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)' }}
          aria-hidden="true"
        />
        <div className="space-y-1.5" aria-hidden="true">
          <div className="h-3 rounded-sm" style={{ width: 88, background: 'rgba(255,255,255,0.09)' }} />
          <div className="h-2 rounded-sm" style={{ width: 64, background: 'rgba(255,255,255,0.05)' }} />
        </div>
      </div>
    </div>
  )
}
