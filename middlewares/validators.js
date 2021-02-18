const { celebrate, Joi } = require('celebrate');

const validEmailPasswordName = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().regex(RegExp(/^\S*$/))
      .messages({
        'string.pattern.base': 'значение {#label} не должно содержать пробелов',
      }),
    name: Joi.string().required().min(2).max(30),
  }).messages({
    'string.base': 'значение {#label} должно быть строкой',
    'string.empty': 'значение {#label} не должно быть пустым',
    'string.min': 'значение {#label} должно быть не меньше {#limit}',
    'string.max': 'значение {#label} должно быть не больше {#limit}',
    'any.required': 'значение {#label} обязательно',
    'string.email': 'значение {#label} неправильное',
  }).options({ abortEarly: false }),
});

const validEmailName = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required().min(2).max(30),
  }).messages({
    'string.base': 'значение {#label} должно быть строкой',
    'string.empty': 'значение {#label} не должно быть пустым',
    'any.required': 'значение {#label} обязательно',
    'string.email': 'значение {#label} неправильное',
  }).options({ abortEarly: false }),
});

const validEmailPassword = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().regex(RegExp(/^\S*$/))
      .messages({
        'string.pattern.base': 'значение {#label} не должно содержать пробелов',
      }),
  }).messages({
    'string.base': 'значение {#label} должно быть строкой',
    'string.empty': 'значение {#label} не должно быть пустым',
    'string.min': 'значение {#label} должно быть не меньше {#limit}',
    'string.max': 'значение {#label} должно быть не больше {#limit}',
    'any.required': 'значение {#label} обязательно',
    'string.email': 'значение {#label} неправильное',
  }).options({ abortEarly: false }),
});

const validMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required()
      .regex(RegExp(/^https?:\/\/(www\.)?[a-z0-9._~:/?#[\]@!$&'()*+,;=-]+#?$/i)),
    trailer: Joi.string().required()
      .regex(RegExp(/^https?:\/\/(www\.)?[a-z0-9._~:/?#[\]@!$&'()*+,;=-]+#?$/i)),
    thumbnail: Joi.string().required()
      .regex(RegExp(/^https?:\/\/(www\.)?[a-z0-9._~:/?#[\]@!$&'()*+,;=-]+#?$/i)),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    movieId: Joi.number().required(),
  }).messages({
    'string.pattern.base': 'значение {#label} неправильное',
    'number.base': 'значение {#label} должено быть числом',
    'number.empty': 'значение {#label} не должно быть пустым',
    'string.base': 'значение {#label} должно быть строкой',
    'string.empty': 'значение {#label} не должно быть пустым',
    'any.required': 'значение {#label} обязательно',
    'string.email': 'значение {#label} неправильное',
  }).options({ abortEarly: false }),
});

const validMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().length(24).hex(),
  }).messages({
    'string.base': 'значение {#label} должено быть строкой',
    'any.required': 'значение {#label} обязательно',
    'string.hex': 'значение {#label} должно быть шестнадцатеричным числом',
    'string.length': 'значение {#label} должно быть {#limit} длинной',
  }).options({ abortEarly: false }),
});

module.exports = {
  validEmailPasswordName,
  validEmailPassword,
  validEmailName,
  validMovie,
  validMovieId,
};
