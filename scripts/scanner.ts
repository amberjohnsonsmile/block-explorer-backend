import { EthereumBlock } from '../src/types'
import { formatBlock } from '../src/format'

const Web3 = require('web3')
const queries = require('../database/queries')
require('dotenv').config()
const web3 = new Web3(process.env.GETH_URL)

export async function scan() {
  const highestDatabaseBlock = await queries.getHighest('blocks')

  let current = highestDatabaseBlock ? highestDatabaseBlock + 1 : 7000000
  const highestEthBlock = await web3.eth.getBlockNumber()

  while (current < highestEthBlock) {
    const blocks: EthereumBlock[] = []
    for (let i = 0; i < 10; i++) {
      const block = await web3.eth.getBlock(current)
      blocks.push(formatBlock(block))
      current++
    }

    const blockCount = await queries.getBlockCount('blocks')
    if (blockCount >= 8000) {
      await queries.deleteOldBlocks('blocks')
    }
    await queries.create('blocks', blocks)
    console.log(`Saved blocks ${blocks.map(b => b.number).join(', ')}`)
  }
}

scan()
