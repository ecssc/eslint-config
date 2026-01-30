import pluginReactNative from 'eslint-plugin-react-native'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

/**
 * ESLint flat config for React Native projects.
 * Uses eslint-plugin-react-native for React Native specific rules.
 * @type {import('eslint').Linter.Config[]}
 */
export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.node,
        __DEV__: 'readonly',
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'react-native': pluginReactNative,
    },
    rules: {
      'react-native/no-unused-styles': 'error',
      'react-native/split-platform-components': 'error',
      'react-native/no-inline-styles': 'warn',
      'react-native/no-color-literals': 'warn',
      'react-native/no-raw-text': 'off',
      'react-native/no-single-element-style-arrays': 'error',
    },
  },
])
