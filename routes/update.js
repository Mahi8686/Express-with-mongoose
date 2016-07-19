var express = require('express');
var router = express.Router();
var body=require('body-parser');
var mongoose=require('mongoose');
var MovieSchema=require('../models/movieDetails');

var db=mongoose.connection;

router.post('/', function (req, res) {
var title=req.body.title;

var newObj={};
newObj.Title = req.body.title;
newObj.Year = req.body.year;
newObj.Actors = req.body.actors;
newObj.Director = req.body.director;
newObj.Plot = req.body.plot;
newObj.Language = req.body.language;
newObj.Country = req.body.country;
newObj.Released = req.body.released;
newObj.imdbRating = req.body.imdbRating;
newObj.Awards = req.body.awards;
newObj.Poster = req.body.poster;


  //db.open('open',function(){
    MovieSchema.findOneAndUpdate(req.body.title,newObj,function(err){
      console.log("------im in side-------");
      if(err) console.log("Error :"+err);
      res.redirect('/');
    })
  });

module.exports = router;
