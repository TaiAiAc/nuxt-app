// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {},
  vite: {
    vue: {},
    vueJsx: {
      mergeProps: true,
    },
  },
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@vueuse/nuxt', '@pinia/nuxt', '@nuxtjs/i18n', '@nuxt/image'],
  typescript: {
    strict: true,
  },
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  colorMode: {
    preference: 'light',
  },
})
