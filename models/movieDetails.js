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
},{versionKey : false});


var movies = mongoose.model("ombdmovies",movieSchema);


/*


var mongoose=require("mongoose");
var MovieSchema=mongoose.Schema({
     Title:String,
     Year:String,
     Released:String,
     Director:String,
     Actors:String,
     Plot:String,
     Language:String,
     Country:String,
     Awards:String,
     Poster:String,
    imdbRating:String

});
module.exports=mongoose.model('movie',MovieSchema,'movie');
*/
