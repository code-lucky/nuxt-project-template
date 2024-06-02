export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  colorMode: {
    preference: 'system',
  },
  devtools: { enabled: true },
  plugins: [
    '~/plugins/vue-filepond.ts', // 引入 vue-filepond 插件
  ],
})
