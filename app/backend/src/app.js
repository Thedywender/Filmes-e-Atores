const express = require('express');
const filmesRouter = require('./routes/filmeRoutes');
const db = require('./config/database');

const app = express();

app.use(express.json());
app.use('/filmes', filmesRouter);

// db.sequelize.sync()
//   .then(() => console.log('Tabelas criadas com sucesso.'))
//   .catch(error => console.log('Erro ao criar as tabelas: ', error));

module.exports = app;