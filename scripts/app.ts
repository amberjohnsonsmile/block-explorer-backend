import express = require('express')
import bodyParser = require('body-parser')
import cors = require('cors')
import { formatBlock } from '../src/format'
import { Web3Block, EthereumBlock } from '../src/types'
const queries = require('../database/queries')
const Web3 = require('web3')
require('dotenv').config()

const web3 = new Web3(process.env.GETH_URL)
const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', async (request, response) => {
  try {
    const blocks: EthereumBlock[] = await queries.list('blocks')
    response.json(blocks)
  } catch {
    response.status(500)
    response.json({
      error: {
        message: 'Database error'
      }
    })
  }
})

app.listen(process.env.PORT || 3001)
