![ethereum plus webpack](ethereum-plus-webpack.png)

# Ethereum Webpack Example Dapp [![Build Status](https://travis-ci.org/uzyn/ethereum-webpack-example-dapp.svg?branch=master)](https://travis-ci.org/uzyn/ethereum-webpack-example-dapp)

Example Ethereum (Solidity) smart contract decentralized app with Webpack, demonstrating the following features and behaviors:

- Simple Ethereum decentralized app (dapp) with:
  - Smart contract written in Solidity
  - A simple viewer written in Vanilla JavaScript.
- Minimal reinvention. Using only tools that are already familiar for front-end JavaScript developers.
- Smart contract is based on The Coin [from a tutorial on ethereum.org](https://www.ethereum.org/token).
- Direct importing of Solidity code and instantiation of smart contract via [Webpack](https://webpack.github.io) through [solc-loader](https://github.com/uzyn/solc-loader) and [web3-loader](https://github.com/uzyn/web3-loader).
  - Interfacing with smart contracts is as simple as `import { MyToken } from './contract/MyToken.sol'`.
  - See [`index.js`](https://github.com/uzyn/ethereum-webpack-example-dapp/blob/master/index.js) for more details.
- Be a simple starter kit for creating Ethereum decentralized apps.


## How to run

1. Run a local Ethereum node with JSON-RPC listening at port 8545 _(default)_. [testrpc](https://github.com/ethereumjs/testrpc) would be the most straight-forward method.

  ```bash
  # Using testrpc (recommended)
  testrpc

  # If you are running Geth, 
  # make sure to run in testnet or private net and enable rpc
  geth --testnet --rpc
  ```

1. Install dependencies

  ```bash
  npm install
  ```

1. Run, during development

  ```bash
  npm start
  ```

  Once webpack build is done, open `index.html` in your favorite web browser.

  Webpack is now started in `--watch` mode, any changes done at JavaScript or Solidity files would automatically rebuild the affected modules.

1. Build, for deployment

  ```bash
  npm run build
  ```

  Only the `static` directory is required to be hosted and served.

1. Run tests

  ```bash
  npm test
  ```

## Additional notes

1. web3-loader can be further configured, for example to reuse a deployed contract instead of redeploying at every build. See [web3-loader's README](https://github.com/uzyn/web3-loader) for more details.

1. Similarly for [solc-loader](https://github.com/uzyn/solc-loader).

## Comments, bugs & collaborations

Pull requests, bug reports are welcomed.

This example dapp is put together by [U-Zyn Chua](http://uzyn.com). Say hi to me at Twitter ([@uzyn](http://twitter.com/uzyn)) or Freenode IRC (my handle: uzyn, usually at #ethereum).

Tips: `0xFfA57D3e88A24311565C9929F180739E43FBD0aA`
