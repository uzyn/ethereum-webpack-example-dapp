/**
 * Individual contracts are available instantiated
 * Also avaialble is initialized web3 object
 */
import { tokenRecipient, MyToken, web3 } from './contract/MyToken.sol';

console.log(tokenRecipient);
console.log(MyToken);
console.log(web3);
console.log(web3.eth.blockNumber);
