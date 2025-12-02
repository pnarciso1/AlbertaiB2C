/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Albert.ai brand colors
        primary: {
          50: '#fef7ed',
          100: '#fdecd1',
          200: '#fbd5a3',
          300: '#f8b86a',
          400: '#f5942e',
          500: '#f27607', // Main orange
          600: '#e35a02',
          700: '#bc4208',
          800: '#95350e',
          900: '#792d0f',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Main teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Score range colors
        score: {
          excellent: '#10b981', // Green
          good: '#84cc16', // Light green
          fair: '#f59e0b', // Yellow
          poor: '#f97316', // Orange
          critical: '#ef4444', // Red
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.75rem', { lineHeight: '1.1' }], // 60px
        'hero-sm': ['3rem', { lineHeight: '1.1' }], // 48px
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
