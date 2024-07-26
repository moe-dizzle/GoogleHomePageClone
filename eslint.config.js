import html from '@html-eslint/eslint-plugin'
import * as cssPlugin from "eslint-plugin-css"
import js from "@eslint/js";
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: globals.browser,
        },
    },
    {
        // recommended configuration included in the plugin
        ...html.configs['flat/recommended'],
        files: ['**/*.html'],
    },
    cssPlugin.configs["flat/recommended"]
]
