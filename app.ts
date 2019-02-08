import express = require('express')
import bodyParser = require('body-parser')
import cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', (request, response) => {
  response.json('hello')
})

app.listen(process.env.PORT || 3000)