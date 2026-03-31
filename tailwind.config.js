/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cogniq-purple': '#6D28D9',
        'cogniq-dark-purple': '#4C1D95',
        'cogniq-bg': '#FFFFFF',
        'cogniq-bg-dark': '#F9FAFB',
        'cogniq-text-dark': '#1F2937',
        'cogniq-text-light': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
