'use strict';

const logger = (req, res, next) => {
  if(!req.query.name){
    throw new Error('no name');
  }else{
    next();
  }
};

module.exports = logger;
