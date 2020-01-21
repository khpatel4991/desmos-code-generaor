# Desmos Code Generator - Kashyap Patel

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes.

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

## Usage

This module exports a factory, that accepts an optional argument that allows you to customize disallowed character and disallowed words.

### API Reference


| Param           | Required      | Default                   |
| --------------- |:-------------:| -------------------------:|
| disallowedChars | NO            | ['I', 'L', 'O', '0', '1'] |
| disallowedWords | NO            |   ['darn', 'rats', 'egg', 'fuzzy', 'kthx', 'haha' 'ugh', '777', 'cheese'] |


### Code Reference

```js
import { codeGeneratorFactory } from 'desmos-random-code-generator';

const generator = codeGeneratorFactory();

const rand1 = generator();
const rand2 = generator();
const rand3 = generator();
// and more

const generator2 = codeGenerator({
  disallowedChars: ['K', 'U', '5'],
  disallowedWords: ['yahoo', 'GOOG', 'bIng', '432']
});

```
