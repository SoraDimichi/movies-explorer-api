const BadRequestError = require('../../constants/errors/BadRequestError');
const NotFoundError = require('../../constants/errors/NotFoundError');

const mongooseErrorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    const errorMessages = [];
    Object.keys(err.errors).forEach((key) => {
      errorMessages.push(err.errors[key].message);
    });
    throw new BadRequestError(errorMessages.join(', '));
  }
  if (err.name === 'CastError') {
    throw new NotFoundError('ресурс не был найден');
  }
  next(err);
};

module.exports = mongooseErrorHandler;
