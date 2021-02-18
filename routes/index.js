const router = require('express').Router();
const auth = require('../middlewares/auth');
const BadRequestError = require('../constants/errors/BadRequestError');
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
router.use(auth);
router.use('/', usersRouter);
router.use('/', moviesRouter);
router.use('*', () => {
  throw new BadRequestError('Запрашиваемый ресурс не найден');
});

module.exports = router;
