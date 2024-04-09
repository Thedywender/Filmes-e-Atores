const express = require('express');

const filmesRouter = express.Router();
const filmeController = require('../controllers/filmeController');

filmesRouter.get('/', filmeController.getAllMoviesController);
filmesRouter.post('/', filmeController.createMovieController);
filmesRouter.put('/:id', filmeController.updateMovieController);
filmesRouter.delete('/:id', filmeController.deleteMovieController);
filmesRouter.post('/:filmeId/atores/:atorId', filmeController.addActorToMovieController);

module.exports = filmesRouter;