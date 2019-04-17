"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const scanner_1 = require("./scanner");
const queries = require('../database/queries');
const Web3 = require('web3');
require('dotenv').config();
const web3 = new Web3(process.env.GETH_URL);
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/', async (request, response) => {
    try {
        const blocks = await queries.list('blocks');
        response.json(blocks);
    }
    catch (_a) {
        response.status(500);
        response.json({
            error: {
                message: 'Database error'
            }
        });
    }
});
scanner_1.scan();
app.listen(process.env.PORT || 3001);
//# sourceMappingURL=app.js.map