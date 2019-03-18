import { EthereumBlock } from './types'
import { Block } from 'web3/eth/types'

function formatBlock(block: Block): EthereumBlock {
  return {
    number: block.number,
    difficulty: block.difficulty,
    extraData: block.extraData,
    gasLimit: block.gasLimit,
    gasUsed: block.gasUsed,
    hash: block.hash,
    logsBloom: block.logsBloom,
    miner: block.miner,
    nonce: block.nonce,
    parentHash: block.parentHash,
    receiptsRoot: block.receiptRoot,
    sha3Uncles: block.sha3Uncles,
    size: block.size,
    stateRoot: block.stateRoot,
    timestamp: block.timestamp,
    totalDifficulty: block.totalDifficulty,
    transactionsRoot: block.transactionRoot,
    uncles: block.uncles
  }
}
