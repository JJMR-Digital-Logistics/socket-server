'use strict';

const express = require('express');
const cors = require('cors');

const errorHandler = require('./Error-Handlers/500.js');
const notFound = require('./Error-Handlers/404.js');
const authRoutes = require('./Auth/routes.js');
// const logger = require('./middleware/logger');

const v1Routes = require('./Routes/v1');
const v2Routes = require('./Routes/v2');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//app.use(logger);

// Routes
app.use(authRoutes);

// assuming you are on port 3001:
// http://localhost:3001/api/v1/food
// app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

// Catchalls
app.use('*', notFound);
app.use(errorHandler);



module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
