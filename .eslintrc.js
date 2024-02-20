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
}
