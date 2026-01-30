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

```javascript
import defaultConfig from '@ecssc/eslint-config/default'
import typescriptConfig from '@ecssc/eslint-config/typescript'
import vueConfig from '@ecssc/eslint-config/vue'

export default [
  ...defaultConfig,
  ...typescriptConfig,
  ...vueConfig,
]
```