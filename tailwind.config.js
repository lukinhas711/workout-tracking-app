/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'black-primary': '#0B0B0D',
        'black-secondary': '#1C56B840',
        'custom-blue': '#1C56B8'
      }
    },
  },
  plugins: [],
}
