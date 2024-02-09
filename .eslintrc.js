"use strict";

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:node/recommended",
  ],
  env: {
    node: true,
  },
  rules: {
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: [
          "multiline-block-like",
          "multiline-expression",
          "multiline-const",
        ],
        next: "*",
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],
    eqeqeq: "error",
    "object-shorthand": "error",
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "no-implicit-coercion": "error",
    "no-debugger": "error",
    "prefer-template": "error",
    "no-shadow": "warn",
    "no-void": ["error", { allowAsStatement: true }],
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
};
