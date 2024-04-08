const { atores } = require('../models'); 
const { HttpRef } = require('../utils/httpstatus');

const getAllAtores = async () => {
  const ator = await atores.findAll({
    attributes: ['id', 'nome', 'data_nascimento', 'nacionalidade']
  });
  return { status: HttpRef('SUCCESS'), data: ator };
};

module.exports = {
  getAllAtores,
};