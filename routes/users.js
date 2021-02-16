const router = require('express').Router();
const { userLimiter } = require('../middlewares/limiter');

const {
  validEmailName,
} = require('../middlewares/validators');

const {
  updateMyProfile,
  getMyProfile,
} = require('../controllers/users');

router.get('/users/me', getMyProfile);
router.put('/users/me', validEmailName, userLimiter, updateMyProfile);

module.exports = router;
