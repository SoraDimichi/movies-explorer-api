const router = require('express').Router();

const {
  validMovie,
  validMovieId,
} = require('../middlewares/validators');

const {
  deleteMovie,
  createMovie,
  getMovies,
} = require('../controllers/movies');

router.get('/movies', getMovies);
router.post('/movies', validMovie, createMovie);
router.delete('/movies/:movieId', validMovieId, deleteMovie);

module.exports = router;
