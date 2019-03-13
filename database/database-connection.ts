import * as knex from 'knex'

export class Connection {
  public knex(): knex {
    return knex(exportConfig())
  }
}

function exportConfig(): knex.Config {
  return require('./knexfile')[process.env.NODE_ENV || 'development']
}
