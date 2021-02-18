const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');
const UnauthorizedError = require('../constants/errors/UnauthorizedError');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnauthorizedError('Необходима авторизация'));
  } else {
    const token = authorization.replace('Bearer ', '');
    let payload;
    try {
      payload = jwt.verify(token, JWT_SECRET);
    } catch (error) {
      next(new UnauthorizedError('Необходима авторизация'));
    }
    req.user = payload;
    next();
  }
};

module.exports = auth;
