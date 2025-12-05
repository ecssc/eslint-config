import { defineConfig } from 'eslint/config'

import { ecsscConfigDefault } from './src/index.mjs'

export default defineConfig(
  ecsscConfigDefault,
  {
    name: 'app/files-to-lint',
    files: ['**/*.mjs'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/node_modules/**'],
  }
)
