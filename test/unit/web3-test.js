"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require('dotenv').config();
const Web3 = require('web3');
describe('web3', function () {
    it('can get a block from geth', async function () {
        const web3 = new Web3(process.env.GETH_URL);
        const block = await web3.eth.getBlock(6000000);
        chai_1.assert.isNotNull(block, 'A block should be returned from web3');
        chai_1.assert.equal(block.number, 6000000, 'Block 6000000 should be returned from web3');
        chai_1.assert.equal(block.hash, '0xbe847be2bceb74e660daf96b3f0669d58f59dc9101715689a00ef864a5408f43', 'The block hash should be correct');
    });
});
//# sourceMappingURL=web3-test.js.map