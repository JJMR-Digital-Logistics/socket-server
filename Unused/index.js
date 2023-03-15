'use strict';

require('dotenv').config();
const { db } = require('./Express-Server/Models/index.js');
const server = require('./Express-Server/server.js');
const PORT = process.env.PORT || 3002;

db.sync().then(() => {
  server.start(PORT);
});
