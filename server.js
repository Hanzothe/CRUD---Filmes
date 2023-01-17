require('dotenv').config()

const { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } = require('./controllers/movieController')

// Configurations
const express = require('express')
require('express-async-errors');
const mongoose = require('mongoose');
const errorHandler = require('./middlewares/errorHandler');

var cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
/*var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}*/

mongoose.connect(process.env.MONGODB_URI)

// Static Routes
app.use(express.static("public"))
app.use(express.static("view"))

// API routes
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