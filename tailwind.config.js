/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#111827', // gray-900
        surface: '#1F2937', // gray-800
        primary: {
          DEFAULT: '#DC2626', // red-600
          hover: '#EF4444', // red-500
        },
        accent: '#F59E0B', // amber-500, alertas operacionais sutis
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
