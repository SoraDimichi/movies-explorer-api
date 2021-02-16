const { celebrate, Joi } = require('celebrate');

const validPassword = celebrate({
  body: Joi.object().keys({
    password: Joi.string()
      .required()
      .regex(RegExp(/^\S*$/))
      .min(6)
      .messages({
        'string.base': 'Пароль должен быть строкой',
        'string.empty': 'Пароль не должен быть пустым',
        'string.min': 'Пароль должен быть не меньше 6ти символов',
        'string.required': 'Поле пароль обязательно для заполнения',
        'string.pattern.base': 'Пароль не должен содержать пробелов',
      }),
  }).unknown(true),
});

const validEmail = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .email()
      .min(5)
      .max(30)
      .messages({
        'string.base': 'Email должен быть строкой',
        'string.empty': 'Email не должен быть пустым',
        'string.min': 'Email должен быть не меньше 5ти символов',
        'string.max': 'Email должен быть не больше 30ти символов',
        'string.required': 'Поле Email обязательно для заполнения',
        'string.email': 'Неправильный email',
      }),
  }).unknown(true),
});

const validName = celebrate({
  body: Joi.object().keys({
    name: Joi.string()
      .min(2)
      .max(30)
      .messages({
        'string.base': 'Имя должно быть строкой',
        'string.empty': 'Имя не должно быть пустым',
        'string.min': 'Имя должено быть не меньше 2х символов',
        'string.man': 'Имя должно быть не больше 30ти символов',
      }),
  }).unknown(true),
});

const validMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().messages({
      'string.base': 'Страна тайтла должна быть строкой',
      'string.empty': 'Страна тайтла должна быть пустым',
      'string.required': 'Страна тайтла обязательна',
    }),
    director: Joi.string().required().messages({
      'string.base': 'Режиссер тайтла должен быть строкой',
      'string.empty': 'Режиссер тайтла не должен быть пустым',
      'string.required': 'Режиссер тайтла обязателен',
    }),
    duration: Joi.number().required().messages({
      'number.base': 'Продолжительность тайтла должна быть числом',
      'number.required': 'Продолжительность тайтла обязательна',
    }),
    year: Joi.string().required().messages({
      'string.base': 'Год выпуска тайтла должен быть строкой',
      'string.empty': 'Год выпуска тайтла не должен быть пустым',
      'string.required': 'Год выпуска тайтла обязателен',
    }),
    description: Joi.string().required().messages({
      'string.base': 'Описание тайтла должно быть строкой',
      'string.required': 'Описание тайтла обязательно',
    }),
    image: Joi.string().required()
      .regex(RegExp(/^https?:\/\/(www\.)?[a-z0-9._~:/?#[\]@!$&'()*+,;=-]+#?$/i))
      .messages({
        'string.base': 'Ссылка на картинку тайтла должна быть строкой',
        'string.empty': 'Ссылка на картинку тайтла не должна быть пустой',
        'string.required': 'Ссылка на картинку тайтла обязательна',
        'string.pattern.base': 'Неправильная ссылка на картинку',
      }),
    trailer: Joi.string().required()
      .regex(RegExp(/^https?:\/\/(www\.)?[a-z0-9._~:/?#[\]@!$&'()*+,;=-]+#?$/i))
      .messages({
        'string.base': 'Ссылка на трейлер тайтла должна быть строкой',
        'string.empty': 'Ссылка на трейлер тайтла не должна быть пустой',
        'string.required': 'Ссылка на трейлер тайтла обязательна',
        'string.pattern.base': 'Неправильная ссылка на трейлер',
      }),
    thumbnail: Joi.string().required()
      .regex(RegExp(/^https?:\/\/(www\.)?[a-z0-9._~:/?#[\]@!$&'()*+,;=-]+#?$/i))
      .messages({
        'string.base': 'Ссылка на самбнейл тайтла должно быть строкой',
        'string.empty': 'Ссылка на самбнейл тайтла не должна быть пустой',
        'string.required': 'Ссылка на самбнейл тайтла обязательна',
        'string.pattern.base': 'Неправильная ссылка на самбнейл',
      }),
    nameRU: Joi.string().required().messages({
      'string.base': 'Имя тайтла на русском должно быть строкой',
      'string.empty': 'Имя тайтла на русском не должно быть пустой',
      'string.required': 'Имя тайтла на русском обязательно',
    }),
    nameEN: Joi.string().required().messages({
      'string.base': 'Имя тайтла на английском должно быть строкой',
      'string.empty': 'Имя тайтла на английском не должно быть пустой',
      'string.required': 'Имя тайтла на английском обязательно',
    }),
    movieId: Joi.number().required().messages({
      'number.base': 'Индификатор тайтла тайтла должен быть числом',
      'number.required': 'Индификатор тайтла обязателен',
    }),
  }),
});

const validMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.number()
      .required(),
  }),
});

module.exports = {
  validEmail,
  validPassword,
  validName,
  validMovie,
  validMovieId,
};
