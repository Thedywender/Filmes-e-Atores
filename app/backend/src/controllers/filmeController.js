const {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  addActorToMovie,
  getMovieById,
} = require('../service/filmeService');

const getAllMoviesController = async (_req, res) => {
  const { status, data } = await getAllMovies();
  return res.status(status).json(data);
};

const getMovieByIdController = async (req, res) => {
  const { status, data } = await getMovieById(req.params.id);
  return res.status(status).json(data);
}

const createMovieController = async (req, res) => {
  const { titulo, ano_lancamento, disponivel } = req.body;
  if (!titulo || !ano_lancamento || disponivel === undefined) {
    return res.status(400).json({ message: 'Adicione: um titulo, ano de lançamento e se está disponivel!' });
  }
  const { status, data } = await createMovie({ titulo, ano_lancamento, disponivel });
  return res.status(200).json(data);
};

const updateMovieController = async (req, res) => {
  try {
    const id = req.params.id;
    const { titulo, ano_lancamento, disponivel } = req.body;

    if (!titulo || !ano_lancamento || disponivel === undefined) {
      return res.status(400).json({ message: 'Dados do filme incompletos' });
    }

    const filmeData = { titulo, ano_lancamento, disponivel };
    const result = await updateMovie(id, filmeData);
    res.status(result.status).json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteMovieController = async (req, res) => {
  const { status, data } = await deleteMovie(req.params.id);
  return res.status(202).json(data);
};

const addActorToMovieController = async (req, res) => {
  try {
    const filmeId = req.params.filmeId;
    const { nome, data_nascimento, nacionalidade } = req.body;

    if (!nome || !data_nascimento || !nacionalidade) {
      return res.status(400).json({ message: 'Os campos nome, data_nascimento e nacionalidade são obrigatórios' });
    }

    const atorData = { nome, data_nascimento, nacionalidade };
    const result = await addActorToMovie(filmeId, atorData);

    res.status(result.status).json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getAllMoviesController,
  createMovieController,
  updateMovieController,
  deleteMovieController,
  addActorToMovieController,
  getMovieByIdController,
};