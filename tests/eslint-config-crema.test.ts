import { ESLint } from "eslint"

import { describe, it, expect } from "vitest"

const plugin = new ESLint({
    overrideConfigFile: "../crema-lint/lib/recommended.js",
    overrideConfig: {
        settings: {
            react: {
                //https://github.com/DRD4-7R/eslint-config-7r-building/issues/1#issuecomment-473031376
                //without this there is a stderr cluttering the test logs
                version: "999.999.999",
            },
        },
    },
})

describe("eslint-config-crema", () => {
    it("should prefer object shorthand", async () => {
        const code = `
            const test = 1;
            const _obj = { test: test };
        `

        const result = await plugin.lintText(code, { filePath: "test.js" })
        const messages = result[0].messages
        expect(messages.length).toBe(1)
        expect(messages[0].message.includes("shorthand")).toBe(true)
    })

    it("should disallow a non-blank line after a block", async () => {
        const code = `
            function doSomething() {
                console.log("test");
            }
            doSomething();
        `

        const result = await plugin.lintText(code, { filePath: "test.js" })
        const messages = result[0].messages
        expect(messages.length).toBe(1)
        expect(messages[0].message.includes("blank line")).toBe(true)
    })

    it("should allow a blank line after a block", async () => {
        const code = `
            function doSomething() {
                console.log("test");
            }

            doSomething();
        `

        const result = await plugin.lintText(code, { filePath: "test.js" })
        const messages = result[0].messages
        expect(messages.length).toBe(0)
    })
})
