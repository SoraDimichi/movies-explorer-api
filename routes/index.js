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
  validEmailPasswordName,
} = require('../middlewares/validators');

router.use(apiLimiter);
router.post('/signin', validEmailPasswordName, login);
router.post('/signup', validEmailPasswordName, userLimiter, createUser);
router.use(auth);
router.use('/', usersRouter);
router.use('/', moviesRouter);
router.use('*', () => {
  throw new BadRequestError('Запрашиваемый ресурс не найден');
});

module.exports = router;
