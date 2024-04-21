const express = require('express');
const filmesRouter = require('./routes/filmeRoutes');
const atoresRouter = require('./routes/atorRoutes');
const db = require('./config/database');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/filmes', filmesRouter);
app.use('/atores', atoresRouter);
app.get("/ping", (req, res) => {
    res.send("pong");
});

module.exports = app;