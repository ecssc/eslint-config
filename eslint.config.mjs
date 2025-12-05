import { defineConfig } from 'eslint/config'

export default defineConfig(
    {
        name: 'app/files-to-lint',
        files: ['**/*.mjs'],
    },
    {
        name: 'app/files-to-ignore',
        ignores: ['**/node_modules/**'],
    },
)
