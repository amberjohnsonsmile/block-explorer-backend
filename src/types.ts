export interface EthereumBlock {
  number: number
  difficulty: number
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
  size: number
  stateRoot: string
  timestamp: string
  totalDifficulty: BigInteger
  transactionsRoot: string
  uncles: string
}
