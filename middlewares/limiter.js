const rateLimit = require('express-rate-limit');
const TooManyRequestsError = require('../ultils/errors/TooManyRequestsError');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  handler: (req, res, next) => {
    next(new TooManyRequestsError('Слишком много запросов'));
  },
});

module.exports = apiLimiter;
