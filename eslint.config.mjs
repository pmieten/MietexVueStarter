import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 5,
        },
        multiline: {
          max: 3,
        },
      }],
      'vue/no-multiple-template-root': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
  // your custom flat configs go here, for example:
  // {
  //   files: ['**/*.ts', '**/*.tsx'],
  //   rules: {
  //     'no-console': 'off' // allow console.log in TypeScript files
  //   }
  // },
  // {
  //   ...
  // }
)
