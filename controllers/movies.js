const Movie = require('../models/movie');

const NotFoundError = require('../middlewares/errors/NotFoundError');
const ConflictError = require('../middlewares/errors/ConflictError');

const createMovie = async (req, res, next) => {
  const {
    country, director, duration, year, description,
    image, trailer, nameRU, nameEN, thumbnail, movieId,
  } = req.body;
  const owner = req.user.id;
  try {
    const movie = await Movie.findOne({ movieId, owner });
    if (!movie) {
      const newMovie = await Movie
        .create({
          country,
          director,
          duration,
          year,
          description,
          image,
          trailer,
          thumbnail,
          owner,
          nameRU,
          nameEN,
          movieId,
        });
      res.status(200).send(newMovie);
    } else {
      next(new ConflictError('Такой тайтл вы уже рекомендовали'));
    }
  } catch (err) {
    next(err);
  }
};

const getMovies = async (req, res, next) => {
  const owner = req.user.id;
  try {
    const movies = await Movie.find({ owner })
      .orFail(new NotFoundError('Вы еще не рекомедовали тайтлы'));
    res.status(200).send(movies);
  } catch (err) {
    next(err);
  }
};

const deleteMovie = async (req, res, next) => {
  const { movieId } = req.params;
  const owner = req.user.id;
  try {
    const deletedMovie = await Movie.findOneAndDelete({ movieId, owner })
      .orFail(new NotFoundError('Тайтл не найден'));
    res.status(200).send(deletedMovie);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  deleteMovie,
  createMovie,
  getMovies,
};
