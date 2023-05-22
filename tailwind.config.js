/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#2C2C2C',
      },
      fontFamily: {
        operatormono: ['Operator Mono', 'sans-serif'],
        operatormonoitalic: ['Operator Mono Italic', 'sans-serif'],
      },
      keyframes: {
        'scroll-prompt': {
          '0%, 100%': { top: '.5em' },
          '50%': { top: '2.3em' },
        },
      },
    },
  },
  plugins: [],
};
