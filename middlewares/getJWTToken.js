const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const getJWTToken = (data) => jwt.sign(
  data, JWT_SECRET, { expiresIn: '7d' },
);

module.exports = { getJWTToken };
