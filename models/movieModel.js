const mongoose = require("mongoose");
const { GENRES } = require("../data/genres");

const moviesSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    unique: true
  },
  release: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },
  cast: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true,
    enum: GENRES
  }
});

moviesSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;
