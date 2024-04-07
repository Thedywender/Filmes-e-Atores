const { HttpRef } = require('../utils/httpstatus');
const {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  addActorToMovie,
} = require('../service/filmeService');

const getAllMoviesController = async (req, res) => {
  const { status, data } = await getAllMovies();
  return res.status(HttpRef(status)).json(data);
};

const getMovieByIdController = async (req, res) => {
  const { status, data } = await getMovieById(req.params.id);
  return res.status(HttpRef(status)).json(data);
};

const createMovieController = async (req, res) => {
  const { status, data } = await createMovie(req.body);
  return res.status(HttpRef(status)).json(data);
};

const updateMovieController = async (req, res) => {
  const { status, data } = await updateMovie(req.params.id, req.body);
  res.status(HttpRef(status)).json(data);
};

const deleteMovieController = async (req, res) => {
  const { status, data } = await deleteMovie(req.params.id);
  return res.status(HttpRef(status)).json(data);
};

const addActorToMovieController = async (req, res) => {
  const { status, data } = await addActorToMovie(req.params.filmeId, req.params.atorId);
  return res.status(HttpRef(status)).json(data);
};

module.exports = {
  getAllMoviesController,
  getMovieByIdController,
  createMovieController,
  updateMovieController,
  deleteMovieController,
  addActorToMovieController,
};