module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql:///eth_dev'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
