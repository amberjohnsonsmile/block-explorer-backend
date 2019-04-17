"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require("knex");
class Connection {
    knex() {
        return knex(exportConfig());
    }
}
exports.Connection = Connection;
function exportConfig() {
    return require('./knexfile')[process.env.NODE_ENV || 'development'];
}
//# sourceMappingURL=database-connection.js.map