const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'значение country обязательно'],
  },
  director: {
    type: String,
    required: [true, 'значение director обязательно'],
  },
  duration: {
    type: Number,
    required: [true, 'значение duration обязательно'],
  },
  year: {
    type: String,
    required: [true, 'значение year обязательно'],
  },
  description: {
    type: String,
    required: [true, 'значение description обязательно'],
  },
  image: {
    type: String,
    required: [true, 'значение image обязательно'],
    validate: {
      validator: (link) => /^https?:\/\/(www\.)?[a-z0-9._~:/?#[\]@!$&'()*+,;=-]+#?$/i.test(link),
      message: 'значение image неправильное',
    },
  },
  trailer: {
    type: String,
    required: [true, 'значение trailer обязательно'],
    validate: {
      validator: (link) => /^https?:\/\/(www\.)?[a-z0-9._~:/?#[\]@!$&'()*+,;=-]+#?$/i.test(link),
      message: 'значение trailer неправильное',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'значение thumbnail обязательно'],
    validate: {
      validator: (link) => /^https?:\/\/(www\.)?[a-z0-9._~:/?#[\]@!$&'()*+,;=-]+#?$/i.test(link),
      message: 'значение thumbnail неправильное',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'значение owner обязательно'],
  },
  nameRU: {
    type: String,
    required: [true, 'значение nameRU обязательно'],
  },
  nameEN: {
    type: String,
    required: [true, 'значение nameEN обязательно'],
  },
  movieId: {
    type: Number,
    required: [true, 'значение movieId обязательно'],
  },
}, { versionKey: false });

const movie = mongoose.model('movie', movieSchema);
module.exports = movie;
