const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const bodyParser = require('body-parser');

require('./db/config');

const app = express();

app.use(cors());
app.use(logger('dev'));

app.use(bodyParser.json());

app.use(mongoSanitize());

app.use('/clientes', require('./routes/clientes'));

module.exports = app;