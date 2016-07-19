var express = require('express');
var router = express.Router();
var body=require('body-parser');
var mongoose=require('mongoose');
var MovieSchema=require('../models/movieDetails');

router.post('/', function (req, res) {

  var title = req.body.title;

  var movie=new MovieSchema({
    Title:req.body.title,
    Year:req.body.year,
    Released:req.body.released,
    Director:req.body.director,
    Actors:req.body.actors,
    Plot:req.body.plot,
    Language:req.body.language,
    Country:req.body.country,
    Awards:req.body.awards,
    Poster:req.body.poster,
    imdbRating:req.body.imdbRating
  });

  movie.save(function(err){
        if(err) console.log("Error :"+err);
        res.redirect('/');
      })
    });

module.exports = router;
