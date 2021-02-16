const router = require('express').Router();
const { createUpdateLimiter } = require('../middlewares/limiter');

const {
  validEmail,
  validName,
} = require('../middlewares/validators');

const {
  updateMyProfile,
  getMyProfile,
} = require('../controllers/users');

router.get('/users/me', getMyProfile);
router.put('/users/me', validEmail, validName, createUpdateLimiter, updateMyProfile);

module.exports = router;
