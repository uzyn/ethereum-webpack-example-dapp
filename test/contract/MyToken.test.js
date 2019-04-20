import { MyToken, web3 } from '../../contract/MyToken.sol';

var assert = require('chai').assert;

describe('MyToken', function () {
  describe('totalSupply()', function () {
    it('should return the correct value', function () {
      assert.equal(MyToken.totalSupply().toNumber(), 250000);
    });
  });

  describe('transfer()', function () {
    it('should successfully transfer tokens', function () {
      this.timeout(10000);

      const account1 = web3.eth.accounts[0];
      const account2 = web3.eth.accounts[1];
      MyToken.transfer(account2, 100, {from: account1, gas: 100000});

      assert.equal(MyToken.balanceOf(account2).toNumber(), 100);
      assert.equal(MyToken.balanceOf(account1).toNumber(), 250000 - 100);
    });
  });
});
