const { filmes } = require('../models');
const { HttpRef } = require('../utils/httpstatus');

const getAllMovies = async () => {
  const filme = await filmes.findAll({
    attributes: ['id', 'titulo', 'ano_lancamento', 'disponivel']
  });
  return { status: HttpRef('SUCCESS'), data: filme };
};

// const getMovieById = async (id) => {
//   const filme = await Filmes.findByPk(id, { include: { model: Atores, as: 'atores' } });
//   return { status: HttpRef('SUCCESS'), data: filme };
// }

// const createMovie = async (filme) => {
//   const newMovie = await Filmes.create(filme);
//   return { status: HttpRef('CREATED'), data: newMovie };
// }

// const updateMovie = async (id, filme) => {
//   const updatedMovie = await Filmes.update(filme, { where: { id } });
//   return { status: HttpRef('SUCCESS'), data: updatedMovie };
// }

// const deleteMovie = async (id) => {
//   const deletedMovie = await Filmes.destroy({ where: { id } });
//   return { status: HttpRef('SUCCESS'), data: deletedMovie };
// }

// const addActorToMovie = async (filmeId, atorId) => {
//   const filme = await Filmes.findByPk(filmeId);
//   const ator = await Atores.findByPk(atorId);
//   await filme.addAtores(ator);

//   const updatedFilme = await Filmes.findByPk(filmeId, { include: Atores });

//   return { status: HttpRef('SUCCESS'), data: updatedFilme };
// };

module.exports = {
  getAllMovies,
//   getMovieById,
//   createMovie,
//   updateMovie,
//   deleteMovie,
//   addActorToMovie,
};