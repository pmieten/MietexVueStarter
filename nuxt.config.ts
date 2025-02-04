// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/nora';
export default defineNuxtConfig({
  srcDir: 'src',
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@unocss/nuxt',
    ],
    primevue: {
        /* Configuration */
        options: {
          theme: {
              preset: Aura,
              colors: {
                primary: 'blue'
              }
          }
      }
    },
    unocss: {
      nuxtLayers: true,
    },
})
