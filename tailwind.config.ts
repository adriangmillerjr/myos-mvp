import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'accent-1': '#111827',
        'accent-2': '#1F2937',
        'accent-3': '#374151',
        'accent-4': '#4B5563',
      },
    },
  },
  plugins: [],
};

export default config;