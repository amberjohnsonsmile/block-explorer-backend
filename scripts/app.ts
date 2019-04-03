import express = require('express')
import bodyParser = require('body-parser')
import cors = require('cors')
import { formatBlock } from '../src/format'
import { Web3Block, EthereumBlock } from '../src/types'
const Web3 = require('web3')
require('dotenv').config()

const web3 = new Web3(process.env.GETH_URL)
const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', (request, response) => {
  const blocks: EthereumBlock[] = []

  web3.eth.getBlockNumber().then((blockNumber: Number) => {
    web3.eth.getBlock(blockNumber).then((block: Web3Block) => {
      blocks.push(formatBlock(block))
      response.json(blocks)
    })
  })
})

app.listen(process.env.PORT || 3001)
