import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['"Playfair Display"', 'Georgia', 'serif']
      },
      colors: {
        rhine: '#1E3A8A',
        river: '#60A5FA',
        park: '#10B981',
        baroque: '#FCD34D',
        cream: '#FFF8ED',
        beige: '#F5F5DC',
        cherry: '#EC4899',
        gold: '#D4AF37',
        ink: '#111827'
      },
      boxShadow: {
        soft: '0 18px 55px rgba(30, 58, 138, 0.13)',
        glow: '0 22px 70px rgba(212, 175, 55, 0.22)'
      }
    }
  },
  plugins: []
} satisfies Config;
