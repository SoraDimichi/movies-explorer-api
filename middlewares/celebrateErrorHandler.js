const { isCelebrateError } = require('celebrate');
const BadRequestError = require('./errors/BadRequestError');

const celebrateErrorHandler = (err, req, res, next) => {
  if (isCelebrateError(err)) {
    const errorMessage = err.details.get('body') || err.details.get('params');
    throw new BadRequestError(
      errorMessage.details.map((error) => error.message.replace(/[^а-яёa-z0-9\s]/gi, '')).join(', '),
    );
  }
  return next(err);
};

module.exports = celebrateErrorHandler;
