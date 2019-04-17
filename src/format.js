"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatBlock(block) {
    return {
        number: block.number,
        extraData: block.extraData,
        gasLimit: block.gasLimit,
        gasUsed: block.gasUsed,
        hash: block.hash,
        logsBloom: block.logsBloom,
        miner: block.miner,
        nonce: block.nonce,
        parentHash: block.parentHash,
        receiptsRoot: block.receiptsRoot,
        sha3Uncles: block.sha3Uncles,
        stateRoot: block.stateRoot,
        timestamp: block.timestamp.toString(),
        transactionsRoot: block.transactionsRoot,
    };
}
exports.formatBlock = formatBlock;
//# sourceMappingURL=format.js.map