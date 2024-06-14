"use strict"

module.exports = {
    root: true,
    extends: ["eslint:recommended", "prettier"],
    env: {
        node: true,
    },
    overrides: [
        {
            files: ["tests/**/*.js"],
            env: { mocha: true },
        },
    ],
    parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
    },
}
