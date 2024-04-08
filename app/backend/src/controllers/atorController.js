const { getAllAtores } = require('../service/atorService');

const getAllAtoresController = async (_req, res) => {
    const { status, data } = await getAllAtores();
    return res.status(200).json(data);
    };



module.exports = {
    getAllAtoresController,
};
// Adicione os métodos de CRUD aqui