const Movies = require("../models/movieModel")

const getAllMovies = async (req, res, next) => {
  const movies = await Movies.find({})
  res.send(movies)
}

const getMovieById = async (req, res, next) => {
  const movie = await Movies.findById(req.params.id)
  res.send(movie)
}

const createMovie = async (req, res, next) => {
  const newMovie = new Movies(req.body)
  const savedMovie = await newMovie.save()
  res.send(savedMovie)
}

const deleteMovie = async (req, res, next) => {
  const deletedMovie = await Movies.findByIdAndDelete(req.params.id)
  res.send(deletedMovie)
}

const updateMovie = async (req, res) => {
  const updatedMovie = await Movies.findByIdAndUpdate(req.params.id, req.body,  { new: true })
  res.send(updatedMovie)
}

module.exports = { createMovie, getAllMovies, getMovieById, deleteMovie, updateMovie }