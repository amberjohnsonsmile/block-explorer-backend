const Web3 = require('web3')
require('dotenv').config()

const web3 = new Web3(process.env.GETH_URL)
console.log(web3)
