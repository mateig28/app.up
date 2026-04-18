import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
      },
      colors: {
        brand: '#1D4ED8',
        'brand-hover': '#1E40AF',
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(rgba(63,63,70,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(63,63,70,0.25) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '24px 24px',
      },
    },
  },
  plugins: [],
}

export default config
