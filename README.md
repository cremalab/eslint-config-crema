# eslint-config-crema

Shared ESLint config for React Typescript Projects.

## Installation

```sh
npm install --save-dev eslint-config-crema
```

You will also need to install `eslint`:

```sh
npm install --save-dev eslint
```

## Usage

Import this config into your own ESLint configuration using the `extends` option. ESLint checks both `package.json` and `.eslintrc.*` files for its configuration:

### package.json

```js
{
  "eslintConfig": {
    "extends": ["crema"]
  }
}
```

### .eslintrc.js

```js
module.exports = {
    extends: ["crema"],
}
```

## What's Included

This ESLint config includes a selection of useful plugins, this is what you get out of the box:

| Plugin                          | Presets                       |
| ------------------------------- | ----------------------------- |
| `eslint`                        | `recommended`                 |
| `@typescript-eslint`            | `recommended`                 |
| `import`                        | `recommended` + `typescript`  |
| `jsx-a11y`                      | `recommended`                 |
| `react`                         | `recommended` + `jsx-runtime` |
| `react-hooks`                   | `recommended`                 |
| `storybook`                     | `recommended`                 |
| `testing-library`               | `react`                       |
| `@tanstack/eslint-plugin-query` | `recommended`                 |
| `prettier`                      | -                             |

Note: Storybook and Testing Library plugins only run on select files. (Stories and Tests)

## Customizing Prettier

Create a file named `.prettierrc.json` in your project directory. An example of Prettier configuration file:

```json
{
    "trailingComma": "all",
    "tabWidth": 4,
    "semi": false,
    "singleQuote": false
}
```

Read more about [configuring `prettier`](https://prettier.io/docs/en/configuration.html) and [all of the available options](https://prettier.io/docs/en/options.html).

### Setting Prettier as the default formatter for the workspace in VSCode

Install the `Prettier` extension and create a file named `/.vscode/settings.json` with the following configuration:

```json
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
}
```
