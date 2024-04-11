const { filmes, atores, FilmesAtores } = require('../models');
const { HttpRef } = require('../utils/httpstatus');

const getAllMovies = async () => {
  const filme = await filmes.findAll();
  return { status: HttpRef('SUCCESS'), data: filme };
};

const createMovie = async (filme) => {
  const { titulo, ano_lancamento, disponivel } = filme;
  const newMovie = await filmes.create({ titulo, ano_lancamento, disponivel });
  return { status: 201, data: newMovie };
}

const updateMovie = async (id, filmeData) => {
  await filmes.update(filmeData, { where: { id } });
  const updatedMovie = await filmes.findByPk(id);
  return { status: HttpRef('SUCCESS'), data: updatedMovie };
}

const deleteMovie = async (id) => {
  const filme = await filmes.findByPk(id);
  if (!filme) {
    throw new Error('Filme não encontrado');
  }
  await filmes.destroy({ where: { id } });
  return { status: HttpRef('SUCCESS'), data: filme };
}

const addActorToMovie = async (filmeId, atorData) => {
  const filme = await filmes.findByPk(filmeId);
  if (!filme) {
    return {status: HttpRef('NOT_FOUND'), data: {message: 'Filme não encontrado'}};
  }

  const ator = await atores.create(atorData);
  await FilmesAtores.create({ filmeId, atorId: ator.id });

  const updatedFilme = await filmes.findByPk(filmeId, { include: atores });

  return { status: HttpRef('SUCCESS'), data: updatedFilme };
};

module.exports = {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  addActorToMovie,
};