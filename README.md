# @ecssc/eslint-config

Shared ESLint configuration for ECSSC projects. Requires ESLint 9+ and supports flat config.

## Installation

```bash
npm install --save-dev @ecssc/eslint-config eslint
```

## Usage

Create an `eslint.config.mjs`:

```javascript
import defaultConfig from '@ecssc/eslint-config/default'

export default [
  ...defaultConfig,
]
```

## Available Configs

| Import Path | Description |
|-------------|-------------|
| `@ecssc/eslint-config/default` | Base JavaScript config with import sorting |
| `@ecssc/eslint-config/typescript` | TypeScript support |
| `@ecssc/eslint-config/vue` | Vue 3 + TypeScript + Tailwind + Prettier |
| `@ecssc/eslint-config/react-native` | React Native support |

### Combining Configs

Layer `typescript` on top of `default` for a TypeScript project:

```javascript
import defaultConfig from '@ecssc/eslint-config/default'
import typescriptConfig from '@ecssc/eslint-config/typescript'

export default [
  ...defaultConfig,
  ...typescriptConfig,
]
```

The `vue` and `react-native` configs are self-contained presets — `vue` already bundles TypeScript, Tailwind, and Prettier, so use them on their own rather than stacking them with `typescript`.
