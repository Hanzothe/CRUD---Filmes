require('dotenv').config()
const { getAllMovies, createMovie } = require('./controllers/controller')

const express = require('express')
const path = require('path')
const mongoose = require('mongoose');


const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)

app.get('/movies', getAllMovies)

app.post('/movies', createMovie)

app.post('/movies', createMovie)

app.get('/assets/:fileDir', (req, res) => {
  console.warn(`request for ${req.params.fileDir}`)
  res.sendFile(path.join(__dirname, `/view/assets/${req.params.fileDir}`))
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/view/index.html"))
})


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})