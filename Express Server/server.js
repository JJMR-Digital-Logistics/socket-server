'use strict';

const express = require('express');
const cors = require('cors');

const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404');
const authRoutes = require('./auth/routes');
const logger = require('./middleware/logger');

const v1Routes = require('./routes/v1');
const v2Routes = require('./routes/v2');

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
app.use('/api/v1', v1Routes);
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
