import { BlockHeader } from 'web3/eth/types'

export interface EthereumBlock {
  number: number
  extraData: string
  gasLimit: number
  gasUsed: number
  hash: string
  logsBloom: string
  miner: string
  nonce: string
  parentHash: string
  receiptsRoot: string
  sha3Uncles: string
  stateRoot: string
  timestamp: string
  transactionsRoot: string
}

export interface Web3Block extends BlockHeader {
  receiptsRoot: string
  transactionsRoot: string
}
