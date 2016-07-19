var express = require('express');
var MovieSchema=require('../models/movieDetails');
//var mongoose=require('mongoose');
var router = express.Router();

router.get('/', function (req, res) {
console.log('-------inside getjson--------');

    MovieSchema.find(function(err,data){
      if(err) console.log("Error :"+err);
      //console.log(data);
      res.json(data);
    })
});
module.exports = router;







/*var express = require('express');
var router = express.Router();
//var fs=require('fs');

var mongoose = require("mongoose");
var UserSchema = mongoose.Schema({

});
var User = mongoose.model("movie", UserSchema, "movie")

mongoose.connect('mongodb://localhost:27017/moviedatabase')
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));

router.get('/', function (req, res) {
//  var content=fs.readFileSync('./json/movies.json');
//  res.send(content);
//  res.json(content.toString());
//  console.log("Res::"+res);
db.open('open', function(){
  User.find(function(err, data){
  //  console.log(data);
  res.json(data);
  });
});
});

module.exports = router;*/
