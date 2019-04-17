exports.up = (knex, Promise) => {
  return knex.schema.createTable("blocks", table => {
    table
      .integer("number")
      .primary()
      .unique()
    table.text("extraData")
    table.integer("gasLimit")
    table.integer("gasUsed")
    table.string("hash", 255)
    table.text("logsBloom")
    table.text("miner")
    table.text("nonce")
    table.string("parentHash", 255)
    table.string("receiptsRoot", 255)
    table.string("sha3Uncles", 255)
    table.string("stateRoot", 255)
    table.string("timestamp")
    table.string("transactionsRoot", 255)
  })
}

exports.down = (knex, Promise) => knex.schema.dropTableIfExists("blocks")
