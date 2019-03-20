import { Connection } from '../database/database-connection'
const database = new Connection().knex()

module.exports = {
  list(table: string) {
    return database(table)
  },
  create(table: string, body: any) {
    return database(table)
      .insert(body)
      .returning('*')
      .then((record: any) => record[0])
  }
}
