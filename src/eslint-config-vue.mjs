import tsParser from '@typescript-eslint/parser'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import { defineConfig } from 'eslint/config'
import pluginPrettier from 'eslint-plugin-prettier'
import pluginTailwindcss from 'eslint-plugin-tailwindcss'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default defineConfig(
    pluginVue.configs['flat/recommended'],
    pluginTailwindcss.configs['flat/recommended'],
    ...defineConfigWithVueTs(pluginVue.configs['flat/essential'], vueTsConfigs.recommended),
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
        name: 'app/plugins',
        plugins: {
            prettier: pluginPrettier,
            tailwindcss: pluginTailwindcss,
        },
    },
    {
        name: 'app/rules',
        rules: {
            'prettier/prettier': 'error',
            'vue/multi-word-component-names': 'off',
            'vue/singleline-html-element-content-newline': 'off',
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
