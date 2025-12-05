import {defineConfig} from "eslint/config";
import pluginTypescript from "typescript-eslint";
import pluginImport from "eslint-plugin-import-x";

export default defineConfig(
    pluginImport.flatConfigs.typescript,
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
    }
)