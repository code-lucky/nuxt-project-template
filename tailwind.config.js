/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#1a202c', // 修改默认的背景颜色
        }
      }
    }
  },
  content: [
    "./component/**/*.{js,vue,ts}",
    "./component/**/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}