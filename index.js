/**
 * Individual contracts are available instantiated
 * Also avaialble is initialized web3 object
 */
import { tokenRecipient, MyToken, web3 } from './contract/MyToken.sol';

window.onload = () => {
  provider();
  latestBlock();
  listAccounts();

  initialSupply();
};

function provider() {
  document.getElementById('provider').innerHTML = web3.currentProvider.host;
}

function latestBlock() {
  document.getElementById('latest-block').innerHTML = web3.eth.blockNumber;
}

function listAccounts() {
  const accounts = web3.eth.accounts;
  let html = '';
  for (let account of web3.eth.accounts) {
    html += `${account}<br>\n`;
  }
  document.getElementById('list-accounts').innerHTML = html;
}

function initialSupply() {
  document.getElementById('initial-supply').innerHTML = MyToken.totalSupply();
}

console.log(web3);
console.log(MyToken);
console.log(tokenRecipient);
