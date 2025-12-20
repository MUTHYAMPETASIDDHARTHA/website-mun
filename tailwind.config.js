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
        serif: ['Playfair Display', 'Libre Baskerville', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Source Sans 3', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

