// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui','@nuxtjs/color-mode'],
  devtools: { enabled: true },
  css:[
    '~/public/assets/index.css'
  ]
})
