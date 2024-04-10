const express = require('express');
const { filmes, atores } = require('../models');
const { getAllMovies } = require('../service/filmeService');

const filmesRouter = express.Router();
const filmeController = require('../controllers/filmeController');

filmesRouter.get('/', async (_req, res) => {
  const addfilmes = await filmes.findAll(
    { 
      include: [
        { model: atores, as: 'atores', 
        through: { attributes: [] },
        attributes: { exclude: ['id'] }
      },
      ],
    },
  );

  return res.status(200).json(addfilmes);
});
filmesRouter.post('/', filmeController.createMovieController);
filmesRouter.put('/:id', filmeController.updateMovieController);
filmesRouter.delete('/:id', filmeController.deleteMovieController);
filmesRouter.post('/:filmeId/atores/:atorId', filmeController.addActorToMovieController);

module.exports = filmesRouter;