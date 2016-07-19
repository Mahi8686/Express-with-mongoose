var express = require('express');
var router = express.Router();
var body=require('body-parser');
var jsonfile = require('jsonfile');
var MovieSchema=require('../models/movieDetails');
var mongoose=require('mongoose');
var db=mongoose.connection;

router.post('/', function (req, res) {
  var Title=req.body.titleDelete;
      db.open('open',function(){
      MovieSchema.find({'Title':Title}).remove().exec(function(err,data){
        if(err){console.log(err);}
        res.redirect('/');
      });
    });
});

module.exports = router;
