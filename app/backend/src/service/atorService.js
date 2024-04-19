const { atores, filmes, FilmesAtores } = require('../models'); 
const { HttpRef } = require('../utils/httpstatus');

const getAllAtores = async () => {
  const ator = await atores.findAll();
  return { status: HttpRef('SUCCESS'), data: ator };
};

const createAtor = async (ator) => {
  const { nome, data_nascimento, nacionalidade } = ator;
  const newAtor = await atores.create({ nome, data_nascimento, nacionalidade });
  return { status: 201, data: newAtor };
}

const updateAtor = async (id, atorData) => {
  await atores.update(atorData, { where: { id } });
  const updatedAtor = await atores.findByPk(id);
  return { status: HttpRef('SUCCESS'), data: updatedAtor };
}

const deleteAtor = async (id) => {
  const ator = await atores.findByPk(id);
  if (!ator) {
    throw new Error('Ator não encontrado');
  }
  await atores.destroy({ where: { id } });
  return { status: HttpRef('SUCCESS'), data: ator };
}

const addMovieToAtor = async (atorId, filmeData) => {
  const ator = await atores.findByPk(atorId);
  if (!ator) {
    return {status: HttpRef('NOT_FOUND'), data: {message: 'Ator não encontrado'}};
  }

  const filme = await filmes.create(filmeData);
  await FilmesAtores.create({ atorId, filmeId: filme.id });

  const updatedAtor = await atores.findByPk(atorId, {include: [{model: filmes, as : 'filmes'}]});

  return { status: HttpRef('SUCCESS'), data: updatedAtor };

}

module.exports = {
  getAllAtores,
  createAtor,
  updateAtor,
  deleteAtor,
  addMovieToAtor,
};