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
      colors: {
        'accent-blue':    '#3B82F6',
        'accent-cyan':    '#06B6D4',
        'accent-emerald': '#10B981',
        'dark-base':      '#08090A',
        'dark-alt':       '#0D1117',
        'dark-border':    '#1E2530',
      },
    },
  },
  plugins: [],
}

export default config
