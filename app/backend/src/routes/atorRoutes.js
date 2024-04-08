const express = require('express');

const atoresRouter = express.Router();
const atorController = require('../controllers/atorController');

atoresRouter.get('/', atorController.getAllAtoresController);

// Adicione as rotas de CRUD aqui

module.exports = atoresRouter;