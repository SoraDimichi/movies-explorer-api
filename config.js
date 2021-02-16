require('dotenv').config();

const { PORT = 3333 } = process.env;
const { MONGO_URL = 'mongodb://localhost:27017/explorertestdb' } = process.env;
const { JWT_SECRET = 'JWT_SECRET' } = process.env;
const { SALT_ROUNDS = 1 } = process.env;

module.exports = {
  PORT,
  MONGO_URL,
  JWT_SECRET,
  SALT_ROUNDS,
};
