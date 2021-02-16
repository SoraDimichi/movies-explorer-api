const router = require('express').Router();
const { createUpdateLimiter, apiLimiter } = require('../middlewares/limiter');
const auth = require('../middlewares/auth');
const BadRequestError = require('../middlewares/errors/BadRequestError');
const usersRouter = require('./users');
const moviesRouter = require('./movies');

const {
  login,
  createUser,
} = require('../controllers/users');

const {
  validEmail,
  validPassword,
  validName,
} = require('../middlewares/validators');

router.use(apiLimiter);
router.post('/signin', validEmail, validPassword, login);
router.post('/signup', validEmail, validName, validPassword, createUpdateLimiter, createUser);
router.use(auth);
router.use('/', usersRouter);
router.use('/', moviesRouter);
router.use('*', () => {
  throw new BadRequestError('Запрашиваемый ресурс не найден');
});

module.exports = router;
