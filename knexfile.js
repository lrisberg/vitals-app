'use strict';

module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://localhost/vitalsdb'
    },
    test: {
      client: 'pg',
      connection: 'postgres://localhost/vitalsdb-test'
    },
    "production": {
    "client": 'pg',
    "connection": process.env.DATABASE_URL
  }
}
