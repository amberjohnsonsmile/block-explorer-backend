import { assert } from 'chai'
import { formatBlock } from '../../src/format'
import { EthereumBlock } from '../../src/types'
require('dotenv').config()
const Web3 = require('web3')
const Queries = require('../../database/queries')

describe('database', function() {
  this.timeout(300000)

  it('can save and load a block', async function() {
    await Queries.reset('blocks')
    await Queries.create('blocks', block)
    const databaseBlocks = await Queries.list('blocks')

    assert.equal(
      databaseBlocks.length,
      1,
      'There should be one block in the database'
    )
    assert.equal(
      databaseBlocks[0].hash,
      '0xbe847be2bceb74e660daf96b3f0669d58f59dc9101715689a00ef864a5408f43',
      'The block should have the correct hash'
    )
  })

  it('can get highest block in db', async function() {
    await Queries.reset('blocks')
    await Queries.create('blocks', block)
    const highestBlock = await Queries.getHighest('blocks')

    assert.equal(highestBlock, 6000000, 'The highest block should be 6000000')
  })
})

const block: EthereumBlock = {
  extraData: '0xe4b883e5bda9e7a59ee4bb99e9b1bc',
  gasLimit: 8003919,
  gasUsed: 7994033,
  hash: '0xbe847be2bceb74e660daf96b3f0669d58f59dc9101715689a00ef864a5408f43',
  logsBloom:
    '0x800b000004742018800113013800401243200020280a002206a2210000080300000c0088440401102010100202412c0302002804490118901200404d01040020000000449800241984c2120c4000200005482604c00480a021934009d8202802802000484214310003104450040009042062002200840048080001522008200281500001002421048282158006ac00488000098162a1000002068064040221108080082000484000280408014082810601100d00201000225200800810042420240008060840010042980010200440400000401082c8080420500003004670231400200d0020010000000082804aa02402088080505408580040508000800200',
  miner: '0x829BD824B016326A401d083B33D092293333A830',
  nonce: '0xb38c11380f0b72c3',
  number: 6000000,
  parentHash:
    '0x5d85a965cd1c00cbb7affb25371aeb2d7f610fda7207eb081c1ea2cb23254d5a',
  receiptsRoot:
    '0xd7adcb6c39b2aa65a8aa739e8638bdde4b3e01cd0ff1d0024fdca745ba3e6ea5',
  sha3Uncles:
    '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
  stateRoot:
    '0xecd323023ea0c000b6370e884ecd16cbe37244102688fc5c2e8c8a73bc1b18e1',
  timestamp: '1532118564',
  transactionsRoot:
    '0x50115fbf29591a3505eabfac5c5a6a8585e1d1c064a04348f00af02ddf79b58e'
}
