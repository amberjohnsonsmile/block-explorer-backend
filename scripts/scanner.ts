const Web3 = require('web3')
const queries = require('../database/queries')
require('dotenv').config()
const web3 = new Web3(process.env.GETH_URL)

async function main() {
  const latestBlock = await web3.eth.getBlockNumber()
  const block = await web3.eth.getBlock(latestBlock)

  await queries.create('blocks', block)
}

main()
