const { 
    getAllAtores,
    deleteAtor,
    createAtor,
    updateAtor,
 } = require('../service/atorService');

const getAllAtoresController = async (_req, res) => {
    const { status, data } = await getAllAtores();
    return res.status(status).json(data);
    };

const createAtorController = async (req, res) => {
    const { nome, data_nascimento, nacionalidade } = req.body;
    if (!nome || !data_nascimento || !nacionalidade) {
        return res.status(400).json({ message: 'Adicione: um nome, data de nascimento e nacionalidade!' });
    }
    const { status, data } = await createAtor({ nome, data_nascimento, nacionalidade });
    return res.status(status).json(data);
    };

const updateAtorController = async (req, res) => {
    try {
        const id = req.params.id;
        const { nome, data_nascimento, nacionalidade } = req.body;
        if (!nome || !data_nascimento || !nacionalidade) {
            return res.status(400).json({ message: 'Dados do ator incompletos' });
        }
        const atorData = { nome, data_nascimento, nacionalidade };
        const result = await updateAtor(id, atorData);
        res.status(result.status).json(result.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
        }
    };


const deleteAtorController = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteAtor(id);
        res.status(200).json({ message: 'Ator deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error });
        }
    };


module.exports = {
    getAllAtoresController,
    createAtorController,
    deleteAtorController,
    updateAtorController,
};