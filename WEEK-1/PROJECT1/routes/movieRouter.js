const express = require('express')
const movieRouter = express.Router()
const Movie = require("../models/movie")

// Get All
movieRouter.get("/", (req, res, next) => {
  Movie.find((err, movies) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(movies)
  })
})


// Post One
movieRouter.post("/", (req, res, next) => {
  const newMovie = new Movie(req.body)
  newMovie.save((err, savedMovie) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedMovie)
  })
})


// Delete One
movieRouter.delete("/:movieId", (req, res, next) => {
  Movie.findOneAndDelete(
    {_id: req.params.movieId}, 
    (err, deletedItem) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
    }
  )
})


// Update One
movieRouter.put("/:movieId", (req, res, next) => {
  Movie.findOneAndUpdate(
    { _id: req.params.movieId},
    req.body,
    {new: true},
    (err, updatedMovie) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedMovie)
    }
  )  
})


module.exports = movieRouter