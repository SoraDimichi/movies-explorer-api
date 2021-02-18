const router = require('express').Router();

const {
  validEmailName,
} = require('../middlewares/validators');

const {
  updateMyProfile,
  getMyProfile,
} = require('../controllers/users');

router.get('/users/me', getMyProfile);
router.patch('/users/me', validEmailName, updateMyProfile);

module.exports = router;
