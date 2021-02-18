const Movie = require('../models/movie');

const NotFoundError = require('../constants/errors/NotFoundError');
const ConflictError = require('../constants/errors/ConflictError');
const ForbiddenError = require('../constants/errors/ForbiddenError');

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
      res.send(newMovie);
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
    res.send(movies);
  } catch (err) {
    next(err);
  }
};

const deleteMovie = async (req, res, next) => {
  const { movieId } = req.params;
  try {
    const movie = await Movie.findById(movieId)
      .orFail(new NotFoundError('Тайтл не найден'));
    if (req.user.id.toString() === movie.owner.toString()) {
      const deletedMovie = await Movie.findByIdAndDelete(movieId);
      res.send(deletedMovie);
    } else {
      next(new ForbiddenError('Не вы рекомендовали этот тайтл'));
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  deleteMovie,
  createMovie,
  getMovies,
};
