/* eslint-env node */
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        outfit: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        poppins: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#ffffff',
        paper: '#ffffff',
        surface: '#fafafa',
        line: '#e5e5e5',
        'line-strong': '#cfcfcf',
        ink: {
          DEFAULT: '#0a0a0a',
          soft: '#737373',
          faint: '#737373',
        },
        ember: {
          DEFAULT: '#e8a317',
          dark: '#c9840d',
          light: '#f3bd4e',
          wash: '#fdf1d6',
        },
        espresso: '#0a0a0a',
      },
      maxWidth: {
        shell: '65rem',
      },
      boxShadow: {
        lift: '0 1px 2px rgba(10,10,10,0.04), 0 14px 32px -24px rgba(10,10,10,0.28)',
        press: '3px 3px 0 #0a0a0a',
        hard: '4px 4px 0 #0a0a0a',
      },
    },
  },
  plugins: [],
})
