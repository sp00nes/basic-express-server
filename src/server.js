'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const notFound = require('./error-handlers/404.js');
const errHandler = require('./error-handlers/500.js');

//express singleton
const app = express();

//__MIDDLEWARE__//

//log path and method
app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send('server online');
});

app.get('/person', validator, (req, res, next) => {
  let name = req.query.name;
  let output = {name: name};
  res.status(200).json(output);
});

//path not found
app.use('*', notFound);
//catch errors
app.use(errHandler);

// export start to index
const start = (PORT) => {
  app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
};

module.exports= {start, app};
