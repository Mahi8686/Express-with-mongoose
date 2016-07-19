var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test");

var movieSchema = new mongoose.Schema({
  Title:String,
  Year:Number,
  Rated:String,
  Released:Date,
  Runtime:String,
  Genre:String,
  Director:String,
  Writer:String,
  Actors:String,
  Plot:String,
  Language:String,
  Country:String,
  Awards:String,
  Poster:String,
  Metascore:String,
  imdbRating:Number,
  imdbVotes:String,
  imdbID:String,
  Type:String,
  Response:Boolean
});
,{versionKey : false}

var movies = mongoose.model("ombdmovies",movieSchema);

app.post("/add",function(req,res) {
    var movieData = new movies(req.body);
    movieData.save(function (err,data) {
      if (err) {
        console.error(err);
        res.response(500).send("Error while saving");
      }
      res.send("saving of "+req.body.Title+" success");
    });
});


app.get("/getmovie/:movieid",function (req,res) {
    var id = req.params.movieid;
    if(id == "all"){
      movies.find({},function (err,data) {
        if (err) {
          console.error(err);
          res.response(500).send("Error while retreiveing all data");
        }
        if(!data){
          res.send("No records found");
        }
        else{
          res.json(data);
        }
      });
    }
    else {
      movies.find({imdbID:id},function (err,data) {
        if (err) {
          console.error(err);
          res.response(500).send("Error while retreiveing data by id");
        }
        if(!data){
          res.send("That Id doesn't exist");
        }
        else{
          res.json(data);
        }
      });
    }
});

app.put("/updatemovie/:movieid",function (req,res) {
  var id = req.params.movieid;
  movies.update({imdbID:id},req.body,{ multi: false },function (err,num) {
      if(err){
        console.error(err);
        res.response(500).send("Error while updating data");
      }
      if(!num){
        res.send("That Id doesn't exist");
      }
      else {
        res.send("successfully updated");
      }

  });
​
});

​

app.delete("/deletemovie/:movieid",function (req,res) {
  var id = req.params.movieid;
  movies.remove({imdbID:id},function (err) {
    if (err) {
      console.error(err);
      res.response(500).send("Error while retreiveing data by id");
    }
    if(!data){
      res.send("That Id doesn't exist");
    }
    else{
      res.send("successfully removed "+id);
    }
  });
​
});
​

​
module.exports = app;
