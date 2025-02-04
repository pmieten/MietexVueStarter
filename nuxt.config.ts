// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/nora';
export default defineNuxtConfig({
  srcDir: 'src',
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@unocss/nuxt',
    '@nuxtjs/i18n'
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
    i18n: {      
      locales: [
        { code: 'en', file: 'en.yml', name: 'English' },
        { code: 'pl', file: 'pl.yml', name: 'Polski' }
      ],
      defaultLocale: 'pl',
      lazy: true,
      langDir: './locales/',
      vueI18n: './i18n.config.ts',      
    }
})
