"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_connection_1 = require("../database/database-connection");
const database = new database_connection_1.Connection().knex();
module.exports = {
    reset(table) {
        return database(table).del();
    },
    list(table) {
        return database(table).orderBy('number', 'desc').limit(30);
    },
    create(table, body) {
        return database(table)
            .insert(body)
            .returning('*')
            .then((record) => record[0]);
    },
    getHighest(table) {
        return database(table)
            .max('number')
            .returning('number')
            .then((record) => record[0].max);
    },
    deleteOldBlocks(table) {
        return database(table)
            .orderBy('number')
            .limit(10)
            .del();
    }
};
//# sourceMappingURL=queries.js.map