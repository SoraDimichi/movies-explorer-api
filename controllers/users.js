const bcrypt = require('bcryptjs');
const User = require('../models/user');

const { SALT_ROUNDS } = require('../config');
const { getJWTToken } = require('../middlewares/getJWTToken');

const UnauthorizedError = require('../constants/errors/UnauthorizedError');
const NotFoundError = require('../constants/errors/NotFoundError');
const ConflictError = require('../constants/errors/ConflictError');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User
      .findOne({ email })
      .select('+password')
      .orFail(new UnauthorizedError('Неправильный логин'));
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      const token = getJWTToken({ id: user._id });
      res.send({ token });
    } else {
      next(new UnauthorizedError('Неправильный пароль'));
    }
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  const { email, password, name } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      const cryptedPassword = await bcrypt.hash(password, Number(SALT_ROUNDS));
      const createdUser = await User.create({ email, password: cryptedPassword, name });
      const { _id } = createdUser;
      res.send({ _id, email });
    } else {
      next(new UnauthorizedError('Такой пользователь существует'));
    }
  } catch (err) {
    next(err);
  }
};

const getMyProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)
      .orFail(new NotFoundError('Пользователь не найден'));
    res.send(user);
  } catch (err) {
    next(err);
  }
};

const updateMyProfile = async (req, res, next) => {
  const { email, name } = req.body;
  try {
    const user = (await User.findOne({ email })) || { _id: '' };
    if (user._id === '' || user._id.toString() === req.user.id.toString()) {
      await User.findByIdAndUpdate(
        { _id: req.user.id },
        { email, name },
        { new: true, runValidators: true },
      ).orFail(new NotFoundError('Пользователь не найден'));
      res.send({ email, name });
    } else {
      next(new ConflictError('Пользователь с таким email уже существует'));
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
  createUser,
  getMyProfile,
  updateMyProfile,
};
