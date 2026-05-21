/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background:   'var(--color-background)',
        surface:      'var(--color-surface)',
        'surface-raised': 'var(--color-surface-raised)',
        primary:      'var(--color-primary)',
        accent:       'var(--color-accent)',
        foreground:   'var(--color-text)',
        muted:        'var(--color-muted)',
        border:       'var(--color-border)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        card: 'var(--radius-card)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'fade-up':    'fade-up 0.45s ease-out forwards',
      },
      keyframes: {
        'pulse-glow': {
          '0%,100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':     { opacity: '1',   transform: 'scale(1.06)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
