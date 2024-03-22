"use strict"

require("./resolution")

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            globalReturn: false,
            impliedStrict: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
        },
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
            },
        },
        "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
    },
    extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hook-form/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:@tanstack/eslint-plugin-query/recommended",
        "prettier",
    ],
    overrides: [
        // Test files.
        {
            files: ["**/?(*.)+(test).{js,jsx,ts,tsx}"],
            extends: [
                "plugin:testing-library/react",
                "plugin:jest/recommended",
            ],
            rules: {},
        },
        // Cypress Files.
        {
            files: ["*.cy.ts"],
            extends: ["plugin:cypress/recommended"],
            rules: {},
        },
        // Storybook
        {
            files: ["**/*.stories.{ts,tsx,mdx}"],
            extends: ["plugin:storybook/recommended"],
            rules: {},
        },
        {
            // javascript commonjs
            files: ["*.js", "*.cjs"],
            extends: ["plugin:@typescript-eslint/disable-type-checked"],
        },
    ],
    ignorePatterns: ["**/build/**", "**/coverage/**", "**/dist/**"],
    plugins: ["@typescript-eslint", "react"],
    env: {
        browser: true,
        node: true,
        es6: true,
        "jest/globals": true,
    },
    rules: {
        "@typescript-eslint/no-unused-vars": [
            "error",
            { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
        "sort-imports": [
            "error",
            {
                ignoreDeclarationSort: true,
            },
        ],
        "import/order": [
            "error",
            {
                "newlines-between": "never",
                alphabetize: {
                    order: "asc",
                },
            },
        ],
        "react/jsx-sort-props": [
            "error",
            {
                callbacksLast: true,
                shorthandFirst: true,
                reservedFirst: true,
            },
        ],
    },
}
