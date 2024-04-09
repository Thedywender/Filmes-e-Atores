const { atores } = require('../models'); 
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

const deleteAtor = async (id) => {
  const ator = await atores.findByPk(id);
  if (!ator) {
    throw new Error('Ator não encontrado');
  }
  await atores.destroy({ where: { id } });
  return { status: HttpRef('SUCCESS'), data: ator };
}

module.exports = {
  getAllAtores,
  createAtor,
  deleteAtor,
};