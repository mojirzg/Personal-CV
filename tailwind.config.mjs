/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background-card': 'var(--background-card)',
        'background-input': 'var(--background-input)',
        'background-menu': 'var(--background-menu)',
        'background-subtle': 'var(--background-subtle)',
        'border-button': 'var(--border-button)',
        'content-primary': 'var(--content-primary)',
        'border-menu': 'var(--border-menu)',
        'content-secondary': 'var(--content-secondary)',
        'surface-main': 'var(--surface-main)',
        transparent: 'transparent',
      },

      fontFamily: {
        satoshi: ['var(--font-satoshi)'],
      },

      keyframes: {
        opacityChanger: { from: { opacity: 0 }, to: { opacity: 1 } },
        typing: {
          from: { maxWidth: 0, opacity: 1 },
          to: { maxWidth: '100%', opacity: 1 },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'var(--content-primary, #fff)' },
        },
        typingFrameworks: {
          '0%': { maxWidth: '0%' },
          '20%': { maxWidth: '100%' },
          '50%': { maxWidth: '100%' },
          '70%': { maxWidth: '0%' },
          '100%': { maxWidth: '0%' },
        },
      },
    },
  },
  plugins: [],
};
