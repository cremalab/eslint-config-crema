"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  configs: {
    recommended: {
      parser: "@typescript-eslint/parser",
      settings: {
        react: {
          version: "detect",
        },
      },
      parserOptions: {
        ecmaVersion: "latest", // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports,
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "prettier",
      ],
      overrides: [
        // Test files.
        {
          files: ["./**/*.test.*"],
          extends: ["plugin:testing-library/react"],
        },
        // Storybook
        {
          files: ["./**/*.stories.*"],
          extends: ["plugin:storybook/recommended"],
        },
      ],
      ignorePatterns: ["**/build/**", "**/coverage/**"],
      plugins: ["@typescript-eslint", "react"],
      env: {
        browser: true,
        node: true,
      },
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_" },
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
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
      },
    },
  },
  rules: {},
};
