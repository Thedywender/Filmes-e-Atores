const express = require('express');
const filmesRouter = require('./routes/filmeRoutes');
const db = require('./config/database');

const app = express();

app.use(express.json());
app.use('/filmes', filmesRouter);



module.exports = app;