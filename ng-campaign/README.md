# ng-campaign

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Getting started for developers

- [Install NodeJS](https://nodejs.org/). Hint: eventually install and use [nvm](https://medium.com/@Joachim8675309/installing-node-js-with-nvm-4dc469c977d9) for easy installing and/or switching between node versions
- Clone this repository: `git clone https://github.com/JosVermoesen/blockchain-lottery`.
- Run `npm install` inside 'every' project root.
- Run `ng serve` or `npm start` in a terminal from the project root of the Angular project.
- Profit. :tada:

## Development Tools used for this app

- [NodeJS](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Angular CLI](https://www.npmjs.com/package/@angular/cli): `npm i -g @angular/cli`
- [Remix for ethereum](https://remix.ethereum.org/)
- [Metamask](https://metamask.io/)

## NPM packages used for this app

### 1. bootstrap and bootswatch

`npm i bootstrap bootswatch` to install bootstrap and the open source bootswatch themes

#### set in file styles.scss your prefered theme:

```scss
@import "~bootswatch/dist/sandstone/bootstrap.min.css";

// Or use variables, e.g.:
// $h1-font-size: 3rem;
// @import "~bootswatch/dist/[theme]/variables";
// @import "~bootstrap/scss/bootstrap";
// @import "~bootswatch/dist/[theme]/bootswatch";
```

### 2. ngx-bootrap tabs

`ng add ngx-bootstrap --component tabs` to install

### 3. Web3

`npm i web3 web3-eth-contract` to install the [web3 ethereum](https://github.com/topics/ethereum?q=ethereum%2Fweb3) service component and the web3 contract package.

#### add in file polyfill.ts:

```ts
import "zone.js"; // Included with Angular CLI.

import * as process from "process";
import { Buffer } from "buffer";

window.process = process;
(window as any).global = window;
global.Buffer = global.Buffer || Buffer;
```

#### add in file angular.json extra options;

```json
"allowedCommonJsDependencies": [
    "hash.js",
    "web3-utils"
],
```

#### for building, increase budgets in angular.json;

```json
"budgets": [
  {
    "type": "initial",
    "maximumWarning": "3mb",
    "maximumError": "4mb"
  },
  {
    "type": "anyComponentStyle",
    "maximumWarning": "2kb",
    "maximumError": "4kb"
  }
],
```

### 4. Angular 12+

- `npm i stream-browserify`
- `npm i assert`
- `npm i crypto-browserify`
- `npm i stream-http`
- `npm i https-browserify`
- `npm i os-browserify`
- `npm i url`: see [node-url on github](https://github.com/defunctzombie/node-url#readme), [nodejs documentation](https://nodejs.org/api/url.html)

- or just install all in one command stroke:
  `npm i stream-browserify assert crypto-browserify stream-http https-browserify os-browserify url`

#### add in tsconfig.json:

```json
"compilerOptions": {
    "paths": {
      "stream": [
        "./node_modules/stream-browserify"
      ],
      "assert": [
        "./node_modules/assert"
      ],
      "crypto": [
        "./node_modules/crypto-browserify"
      ],
      "http": [
        "./node_modules/stream-http"
      ],
      "https": [
        "./node_modules/https-browserify"
      ],
      "os": [
        "./node_modules/os-browserify"
      ],
      "url": [
        "./node_modules/url"
      ],
    },
```

## Angular Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
