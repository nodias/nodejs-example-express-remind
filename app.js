const express = require('express');
const session = require('express-session');
const logger = require('morgan');

const app = express();
app.use(logger('dev'));
app.use(express.json());

require('./server/routers')(app);

module.exports = app;