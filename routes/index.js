const router = require('express').Router();
const auth = require('../middlewares/auth');
const NotFoundError = require('../ultils/errors/NotFoundError');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const {
  login,
  createUser,
} = require('../controllers/users');
const {
  validEmailPasswordName,
  validEmailPassword,
} = require('../middlewares/validators');

router.post('/signin', validEmailPassword, login);
router.post('/signup', validEmailPasswordName, createUser);
router.use('/', auth, usersRouter);
router.use('/', auth, moviesRouter);

router.use('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

module.exports = router;
