import express = require('express')
import bodyParser = require('body-parser')
import cors = require('cors')
import { Block } from 'web3/eth/types'
const Web3 = require('web3')
require('dotenv').config()

const web3 = new Web3(process.env.GETH_URL)
const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', (request, response) => {
  const blocks: Block[] = []

  web3.eth.getBlockNumber().then((blockNumber: Number) => {
    web3.eth.getBlock(blockNumber).then((block: Block) => {
      blocks.push(block)
      response.json(blocks)
    })
  })
})

app.listen(process.env.PORT || 3001)
