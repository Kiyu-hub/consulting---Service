/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'nexablue': '#0A2342',
        'nexagold': '#D4AF37',
        'nexagreen': '#1F6357',
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
};