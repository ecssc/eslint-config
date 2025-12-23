import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import { flatConfigs } from 'eslint-plugin-import-x'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default defineConfig(eslint.configs.recommended, flatConfigs.recommended, {
  name: 'app/rules',
  rules: {
    'import-x/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
      },
    ],
    'no-undef': 'off',
  },
})
