"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const format_1 = require("../../src/format");
require('dotenv').config();
const Web3 = require('web3');
const Queries = require('../../database/queries');
describe('scanning integration', function () {
    this.timeout(300000);
    it('can scan and save a block', async function () {
        await Queries.reset('blocks');
        const web3 = new Web3(process.env.GETH_URL);
        const block = await web3.eth.getBlock(6000000);
        const formattedBlock = format_1.formatBlock(block);
        await Queries.create('blocks', formattedBlock);
        const databaseBlock = await Queries.list('blocks');
        chai_1.assert.equal(databaseBlock.length, 1, 'There should be one block in the database');
    });
});
//# sourceMappingURL=scanning-test.js.map