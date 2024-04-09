const { atores } = require('../models'); 
const { HttpRef } = require('../utils/httpstatus');

const getAllAtores = async () => {
  const ator = await atores.findAll({
    attributes: ['id', 'nome', 'data_nascimento', 'nacionalidade']
  });
  return { status: HttpRef('SUCCESS'), data: ator };
};

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
  deleteAtor,
};