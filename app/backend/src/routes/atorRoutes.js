const express = require('express');

const atoresRouter = express.Router();
const atorController = require('../controllers/atorController');

atoresRouter.get('/', atorController.getAllAtoresController);
atoresRouter.delete('/:id', atorController.deleteAtorController);

// Adicione as rotas de CRUD aqui

module.exports = atoresRouter;