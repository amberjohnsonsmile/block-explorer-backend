"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const format_1 = require("../src/format");
const Web3 = require('web3');
const queries = require('../database/queries');
require('dotenv').config();
const web3 = new Web3(process.env.GETH_URL);
async function scan() {
    const highestDatabaseBlock = await queries.getHighest('blocks');
    let current = highestDatabaseBlock ? highestDatabaseBlock + 1 : 7000000;
    const highestEthBlock = await web3.eth.getBlockNumber();
    while (current < highestEthBlock) {
        const blocks = [];
        for (let i = 0; i < 10; i++) {
            const block = await web3.eth.getBlock(current);
            blocks.push(format_1.formatBlock(block));
            current++;
        }
        await queries.create('blocks', blocks);
        console.log(`Saved blocks ${blocks.map(b => b.number).join(', ')}`);
    }
}
exports.scan = scan;
scan();
//# sourceMappingURL=scanner.js.map