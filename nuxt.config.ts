// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/nora';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module'
    ],
    primevue: {
        /* Configuration */
        options: {
          theme: {
              preset: Aura
          }
      }
    }
})
