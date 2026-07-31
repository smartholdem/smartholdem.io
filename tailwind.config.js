/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Brand orange (logo color) — primary accent
        brand: {
          DEFAULT: '#FF5A0A',
          400: '#FF7A2A',
          500: '#FF5A0A',
          600: '#E24E06'
        },
        // Deep space / obsidian surfaces
        navy: {
          950: '#070A1A',
          900: '#0A0E27',
          800: '#0F1430',
          700: '#151B3B',
          600: '#1C2447'
        },
        // Neon accents
        cyan: {
          DEFAULT: '#00D4FF',
          400: '#33DDFF',
          500: '#00D4FF',
          600: '#00A8CC'
        },
        neon: {
          cyan: '#00D4FF',
          purple: '#7C3AED',
          magenta: '#D946EF',
          gold: '#F59E0B',
          green: '#10B981'
        },
        ink: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          400: '#94A3B8',
          500: '#64748B',
          700: '#475569',
          900: '#0F172A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        'brand': '0 4px 20px rgba(255,90,10,0.4)',
        'brand-lg': '0 6px 28px rgba(255,90,10,0.6)',
        'neon-cyan': '0 0 20px -2px rgba(0,212,255,0.45)',
        'neon-purple': '0 0 20px -2px rgba(124,58,237,0.5)',
        'neon-gold': '0 0 20px -2px rgba(245,158,11,0.45)',
        'card': '0 8px 40px -12px rgba(0,0,0,0.5)'
      },
      backgroundImage: {
        'grid-fade': 'none'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'pulse-glow': {
          '0%,100%': { opacity: '0.6' },
          '50%': { opacity: '1' }
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
