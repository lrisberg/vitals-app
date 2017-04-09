'use strict';

module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://localhost/vitalsdb'
    },
    test: {
      client: 'pg',
      connection: 'postgres://localhost/vitalsdb-test'
    }
  }
