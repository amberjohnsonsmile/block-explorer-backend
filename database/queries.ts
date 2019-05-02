import { Connection } from '../database/database-connection'
const database = new Connection().knex()

module.exports = {
  reset(table: string) {
    return database(table).del()
  },
  list(table: string) {
    return database(table).orderBy('number', 'desc').limit(30)
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
  },
  getBlockCount(table: string) {
    return database(table)
      .count('number')
      .then((record: any) => record[0].count)
  },
  deleteOldBlocks(table: string) {
    return database(table)
      .orderBy('number')
      .limit(10)
      .del()
  }
}
