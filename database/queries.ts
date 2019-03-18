import { Connection } from '../database/database-connection'
const database = new Connection().knex()

module.exports = {
  list(table: string) {
    return database(table)
  },
  create(table: string, body: any) {
    console.log('creating')
    return database(table)
      .insert(body)
      .returning('*')
      .then((record: any) => record[0])
  }
}
