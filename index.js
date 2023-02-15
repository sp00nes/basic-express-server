'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3002;
const { start } = require('./src/server.js');

start(PORT);
