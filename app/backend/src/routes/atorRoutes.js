const express = require('express');

const atoresRouter = express.Router();
const atorController = require('../controllers/atorController');

atoresRouter.get('/', atorController.getAllAtoresController);
atoresRouter.get('/:id', atorController.getAtorByIdController);
atoresRouter.delete('/:id', atorController.deleteAtorController);
atoresRouter.post('/', atorController.createAtorController);
atoresRouter.put('/:id', atorController.updateAtorController);
atoresRouter.post('/:atorId/filmes', atorController.addMovieToAtorController);

module.exports = atoresRouter;