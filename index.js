/**
 * Individual contracts are available instantiated
 * Also avaialble is initialized web3 object
 */
import { tokenRecipient, MyToken, web3 } from './contract/MyToken.sol';

window.onload = () => {
  latestBlock();
  listAccounts();
};

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

console.log(web3);
console.log(MyToken);
console.log(tokenRecipient);
