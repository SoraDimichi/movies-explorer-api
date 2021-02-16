const router = require('express').Router();
const { userLimiter, apiLimiter } = require('../middlewares/limiter');
const auth = require('../middlewares/auth');
const BadRequestError = require('../middlewares/errors/BadRequestError');
const usersRouter = require('./users');
const moviesRouter = require('./movies');

const {
  login,
  createUser,
} = require('../controllers/users');

const {
  validUser,
} = require('../middlewares/validators');

router.use(apiLimiter);
router.post('/signin', validUser, login);
router.post('/signup', validUser, userLimiter, createUser);
router.use(auth);
router.use('/', usersRouter);
router.use('/', moviesRouter);
router.use('*', () => {
  throw new BadRequestError('Запрашиваемый ресурс не найден');
});

module.exports = router;
