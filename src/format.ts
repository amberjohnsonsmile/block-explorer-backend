import { EthereumBlock, Web3Block } from './types'

export function formatBlock(block: Web3Block): EthereumBlock {
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
  }
}
