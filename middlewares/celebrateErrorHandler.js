const { isCelebrateError } = require('celebrate');
const BadRequestError = require('./errors/BadRequestError');

const celebrateErrorHandler = (err, req, res, next) => {
  if (isCelebrateError(err)) {
    throw new BadRequestError(err.details.get('body').message);
  }
  return next(err);
};

module.exports = celebrateErrorHandler;
