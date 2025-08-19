// Update with your config settings.

const path = require("node:path")

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/app.db'
    },
    migrations: {
      directory: path.join("./src/database/migrations")
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE,
      user:     process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD
    },
    migrations: {
      directory: path.join("./src/database/migrations")
    }
  }
};
