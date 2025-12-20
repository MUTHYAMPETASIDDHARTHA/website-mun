/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1C1C1C',
        burgundy: '#800020',
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Cormorant Garamond', 'Libre Baskerville', 'Georgia', 'serif'],
        sans: ['Lora', 'Libre Baskerville', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

