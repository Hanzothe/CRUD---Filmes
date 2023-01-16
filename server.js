require('dotenv').config()

const { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } = require('./controllers/movieController')

// Configurations
const express = require('express')
require('express-async-errors');
const path = require('path')
const mongoose = require('mongoose');
const errorHandler = require('./middlewares/errorHandler');

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)

// Routes
app.get('/', (req, res, next) => { res.sendFile(path.join(__dirname, "/view/index.html")) })
app.use(express.static("public"))

app.get('/movies', getAllMovies);
app.get('/movies/:id', getMovieById);
app.post('/movies', createMovie);
app.delete('/movies/:id', deleteMovie);
app.put('/movies/:id', updateMovie);

app.use(errorHandler)

// Make app listen
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})