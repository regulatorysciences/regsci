/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'irsg-navy': '#0a1a3f',
        'irsg-blue': '#1e3a8a',
        'irsg-orange': '#f97316',
        'irsg-gray': '#f5f7fa',
        'irsg-dark': '#1b1f24',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
