import { ESLint } from "eslint"

import { describe, it, expect } from "vitest"

describe("eslint-config-crema recommended config", () => {
    const plugin = new ESLint({
        overrideConfigFile: "./lib/recommended.js",
        overrideConfig: {
            settings: {
                react: {
                    //https://github.com/DRD4-7R/eslint-config-7r-building/issues/1#issuecomment-473031376
                    //without this there is a stderr cluttering the test logs
                    version: "999.999.999",
                },
            },
        },
        fix: true,
    })

    it("should prefer object shorthand", async () => {
        const code = `
            const test = 1;
            const _obj = { test: test };
        `

        const result = await plugin.lintText(code, { filePath: "test.js" })
        expect(result[0].output).toBe(`
            const test = 1;
            const _obj = { test };
        `)
    })

    it("should disallow a non-blank line after a block", async () => {
        const code = `
            function doSomething() {
                console.log("test");
            }
            doSomething();
        `

        const result = await plugin.lintText(code, { filePath: "test.js" })
        expect(result[0].output).toBe(`
            function doSomething() {
                console.log("test");
            }

            doSomething();
        `)
    })

    it("should disallow index as keys", async () => {
        const incorrectCode = `
            function Hello() {
                return <div>Hello</div>;
            }

            const things = [{ id: 1 }, { id: 2 }];
            things.map((thing, index) => (
                <Hello key={index} />
            ));
        `

        const result = await plugin.lintText(incorrectCode, {
            filePath: "test.js",
        })
        expect(result[0].errorCount).toBe(1)

        const correctCode = `
            function Hello() {
                return <div>Hello</div>;
            }

            const things = [{ id: 1 }, { id: 2 }];
            things.map((thing) => (
                <Hello key={thing.id} />
            ));
        `

        const result2 = await plugin.lintText(correctCode, {
            filePath: "test.js",
        })

        expect(result2[0].errorCount).toBe(0)
    })
})
