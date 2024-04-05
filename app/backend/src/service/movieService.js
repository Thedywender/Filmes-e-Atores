const { Movie, Actor } = require('../models');

// Adicione os métodos de CRUD aqui

exports.addActorToMovie = async (movieId, actorId) => {
  const movie = await Movie.findByPk(movieId);
  const actor = await Actor.findByPk(actorId);
  await movie.addActor(actor);
};