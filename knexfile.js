'use strict';

const dbConfiguration = {
  client: 'sqlite3',
  connection: {
    filename: "./db/jub.sqlite3"
  }
};

module.exports = require('knex')(dbConfiguration);
