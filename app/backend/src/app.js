const express = require('express');

const app = express();

app.get('/movies', (req, res) => res.status(200).json({ movies }));
app.post('/movies', (req, res) => {
 const newMovie = { ...req.body }; 
    movies.push(newMovie); res.status(201).json(newMovie); 
});
app.delete('/movies/:id', (req, res) => {
    const { id } = req.params;
    const index = movies.findIndex((movie) => movie.id === id);
    if (index !== -1) {
        movies.splice(index, 1);
        res.status(200).json({ message: 'Filme deletado com sucesso!' });
    } else {
        res.status(404).json({ message: 'Filme não encontrado!' });
    }
});

app.put('/movies/:id', (req, res) => {
    const { id } = req.params;
    const newMovieData = req.body;
    const index = movies.findIndex((movie) => movie.id === id);
    if (index !== -1) {
        movies[index] = { ...movies[index], ...newMovieData };
        res.status(200).json(movies[index]);
    } else {
        res.status(404).json({ message: 'Filme não encontrado!' });
    }
});
export default app;