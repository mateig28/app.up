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
        'accent-blue':   '#3B82F6',
        'accent-indigo': '#6366F1',
        'accent-violet': '#8B5CF6',
        'accent-pink':   '#EC4899',
      },
    },
  },
  plugins: [],
}

export default config
