const rateLimit = require('express-rate-limit');
const TooManyRequestsError = require('./errors/TooManyRequestsError');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  handler: (req, res, next) => {
    next(new TooManyRequestsError('Слишком много запросов'));
  },
});

const userLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20,
  handler: (req, res, next) => {
    next(new TooManyRequestsError('Слишком много запросов, попробуйте через час'));
  },
});

module.exports = {
  apiLimiter,
  userLimiter,
};
