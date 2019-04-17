"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_connection_1 = require("../database/database-connection");
const database = new database_connection_1.Connection().knex();
module.exports = {
    reset(table) {
        return database(table).del();
    },
    list(table) {
        return database(table).orderBy('number', 'desc');
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
    }
};
//# sourceMappingURL=queries.js.map