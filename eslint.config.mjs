import { defineConfig } from 'eslint/config'

import { ecsscConfigDefault } from '@ecssc/eslint-config'

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
