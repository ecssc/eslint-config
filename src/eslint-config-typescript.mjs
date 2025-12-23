import { defineConfig } from 'eslint/config'
import { flatConfigs } from 'eslint-plugin-import-x'
import pluginTypescript from 'typescript-eslint'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default defineConfig(
  flatConfigs.typescript,
  pluginTypescript.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    name: 'app/rules',
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
  {
    settings: {
      'import-x/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        },
      },
    },
  }
)
