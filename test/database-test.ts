import { assert } from 'chai'
import { formatBlock } from '../src/format'
require('dotenv').config()
const Web3 = require('web3')
const Queries = require('../database/queries')

describe('database', function() {
  this.timeout(300000)

  it('can save and load a block', async function() {
    // TODO - hard code block data

    const web3 = new Web3(process.env.GETH_URL)
    const block = await web3.eth.getBlock(6000000)
    const formattedBlock = formatBlock(block)

    await Queries.create('blocks', formattedBlock)
  })
})
