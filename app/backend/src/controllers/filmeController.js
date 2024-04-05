const movieService = require('../services/movieService');

// Adicione os métodos de CRUD aqui

exports.addActorToMovie = async (req, res) => {
  const { movieId, actorId } = req.params;
  await movieService.addActorToMovie(movieId, actorId);
  res.status(200).json({ message: 'Ator adicionado ao filme com sucesso!' });
};