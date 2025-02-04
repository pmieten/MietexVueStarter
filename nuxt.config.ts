// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/nora'

export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxt/eslint',
  ],
  imports: {
    dirs: ['stores'],
  },
  devtools: { enabled: true },
  srcDir: 'src/',
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: false,
    },
  },
  i18n: {
    locales: [
      { code: 'en', file: 'en.yml', name: 'English' },
      { code: 'pl', file: 'pl.yml', name: 'Polski' },
    ],
    defaultLocale: 'pl',
    lazy: true,
    langDir: './locales/',
    vueI18n: './i18n.config.ts',
  },
  pinia: {},
  primevue: {
    /* Configuration */
    options: {
      theme: {
        preset: Aura,
        colors: {
          primary: 'blue',
        },
      },
    },
  },
  unocss: {
    nuxtLayers: true,
  },
})
