
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1280px',
      xl: '1440px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // 自定义你的颜色主题
        primary: {
          light: '#4FD1C5', // 浅色模式的主颜色
          DEFAULT: '#319795',
          dark: '#2C7A7B' // 暗黑模式的主颜色
        },
        background: {
          light: '#ffffff', // 浅色模式的背景颜色
          dark: '#1a202c' // 暗黑模式的背景颜色
        },
        text: {
          light: '#2d3748', // 浅色模式的文字颜色
          dark: '#f7fafc' // 暗黑模式的文字颜色
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
  plugins: [],
}