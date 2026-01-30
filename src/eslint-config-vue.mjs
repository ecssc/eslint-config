import tsParser from '@typescript-eslint/parser'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import { defineConfig } from 'eslint/config'
import pluginPrettier from 'eslint-plugin-prettier/recommended'
import pluginTailwindcss from 'eslint-plugin-tailwindcss'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default defineConfig(
  pluginPrettier,
  pluginTailwindcss.configs['flat/recommended'],
  pluginTailwindcss.configs['flat/recommended'],
  ...defineConfigWithVueTs(
    pluginVue.configs['flat/recommended'],
    vueTsConfigs.recommended
  ),
  {
    name: 'app/language-options',
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
  },
  {
    name: 'app/rules',
    rules: {
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
    },
  }
)
