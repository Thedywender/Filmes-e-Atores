const express = require('express');
const filmesRouter = require('./routes/filmesRouter');

const app = express();

app.use(express.json());
app.use('/filmes', filmesRouter);

module.exports = app;