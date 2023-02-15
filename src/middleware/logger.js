'use strict';

const logger = (req, res, next) => {
  console.log({path: req.url, method: req.method});
  next();
};

module.exports = logger;
