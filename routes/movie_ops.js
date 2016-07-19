var express = require('express');
var app= express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


var movieSchema = new mongoose.Schema({
  Title: String,
  Year : Number,
  Rated : String,
  Released : Date,
  Runtime : String,
  Genre : String,
  Director : String,
  Writer : String,
  Actors : String,
  Plot : String,
  Language : String,
  Country : String,
  Awards : String,
  Poster : String,
  Metascore : String,
  imdbRating : Number,
  imdbVotes : String,
  imdbID : String,
  Type : String,
  Response : Boolean
});


var movies = mongoose.model("moviemazaa",movieSchema);


app.post('/add',function(req,res){
  var movieData = new movies(req.body);
  console.log(req.body);
  movieData.save(function (err,data) {
    if(err){
      console.error(err);
      res.send("error");
    }

    //res.send(req.body.Title +  " " +"is added");
    console.log('Your data is added');
    res.send(data);


  });
});






app.get("/getmovie/:Moviename",function(req,res){

  var id=req.params.Moviename;
  console.log(id);

    movies.find({Title:id},function(err,data){
      if(err){
        console.error(err);
        res.send("some error!!!Check it");
      }
      if(!data){ // != id){
        res.send("No record found");
      }
      else{
        res.json(data);
      }
    });

});



app.put("/update/:id",function(req,res) {

movies.findOneAndUpdate( {imdbID:req.params.id},
    {$set : {Title : req.body.Title}},
    {upsert:true},
    function(err,data){
      if(err){
        console.log(err);
        res.send('Errorrrrrrr!!!!');
      }
      else{
        res.send("Movie title is updated");
      }
    }
  )

});




app.delete("/delete/:movieid",function(req,res){
  var id =req.params.movieid;
  movies.remove({imdbID : id},function(err){
    if(err){
      console.error(err);
      res.send("error");
    }
    else{
      res.send("successfully removed" + " " +  id);
    }
  });
});





module.exports = app;
