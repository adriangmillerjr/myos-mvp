import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#7f5af0',
          600: '#6240c3',
          700: '#493198'
        },
        background: {
          DEFAULT: '#0e1a2b',
          light: '#142139'
        },
        foreground: {
          DEFAULT: '#f5f5f5',
          muted: '#a1a1a1'
        }
      }
      ,
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}

export default config