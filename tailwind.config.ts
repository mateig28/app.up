import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        mono:  ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'terra':        '#C14E30',
        'terra-light':  '#E8805E',
        'dark-base':    '#191916',
        'dark-alt':     '#1F1F1B',
        'dark-border':  '#2C2C28',
        'cream':        '#F2EDE4',
        'grey':         '#8C8882',
      },
    },
  },
  plugins: [],
}

export default config
