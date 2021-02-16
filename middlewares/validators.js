const { celebrate, Joi } = require('celebrate');

const validEmailPasswordName = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .email()
      .min(5)
      .max(30),
    password: Joi.string()
      .required()
      .regex(RegExp(/^\S*$/))
      .min(6)
      .messages({
        'string.pattern.base': 'значение {#label} не должно содержать пробелов',
      }),
    name: Joi.string()
      .min(2)
      .max(30),
  }).messages({
    'string.base': 'значение {#label} должно быть строкой',
    'string.empty': 'значение {#label} не должно быть пустым',
    'string.min': 'значение {#label} должно быть не меньше {#limit}',
    'string.max': 'значение {#label} должно быть не больше {#limit}',
    'string.required': 'значение {#label} обязательно',
    'string.email': 'значение {#label} неправильное',
  }).options({ abortEarly: false }),
});

const validEmailName = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .email()
      .min(5)
      .max(30),
    name: Joi.string()
      .min(2)
      .max(30),
  }).messages({
    'string.base': 'значение {#label} должно быть строкой',
    'string.empty': 'значение {#label} не должно быть пустым',
    'string.min': 'значение {#label} должно быть не меньше {#limit}',
    'string.max': 'значение {#label} должно быть не больше {#limit}',
    'string.required': 'значение {#label} обязательно',
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
    'number.required': 'значение {#label} обязательно',
    'number.empty': 'Имя тайтла на английском не должно быть пустой',
    'string.base': 'значение {#label} должно быть строкой',
    'string.empty': 'значение {#label} не должно быть пустым',
    'string.required': 'значение {#label} обязательно',
    'string.email': 'значение {#label} неправильное',
  }).options({ abortEarly: false }),
});

const validMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.number()
      .required(),
  }),
});

module.exports = {
  validEmailPasswordName,
  validEmailName,
  validMovie,
  validMovieId,
};
