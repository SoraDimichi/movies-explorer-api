const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'значение email обязательно'],
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'значение email неправильное',
    },
  },
  password: {
    type: String,
    required: [true, 'значение password обязательно'],
    select: false,
  },
  name: {
    type: String,
    required: [true, 'значение name обязательно'],
    minlength: [2, 'значение name должно быть не меньше 2'],
    maxlength: [30, 'значение name должно быть больше 30'],
  },
}, { versionKey: false });

const user = mongoose.model('user', userSchema);
module.exports = user;
