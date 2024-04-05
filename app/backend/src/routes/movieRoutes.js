const express = require('express');

const router = express.Router();
const movieController = require('../controllers/movieController');

// Adicione as rotas de CRUD aqui

router.post('/movies/:movieId/actors/:actorId', movieController.addActorToMovie);

export default router;