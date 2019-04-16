import { Connection } from '../database/database-connection'
const database = new Connection().knex()

module.exports = {
  reset(table: string) {
    return database(table).del()
  },
  list(table: string) {
    return database(table).orderBy('number', 'desc')
  },
  create(table: string, body: any) {
    return database(table)
      .insert(body)
      .returning('*')
      .then((record: any) => record[0])
  },
  getHighest(table: string) {
    return database(table)
      .max('number')
      .returning('number')
      .then((record: any) => record[0].max)
  }
}
