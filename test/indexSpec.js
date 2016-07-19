var should=require("chai").should(),
expect = require("chai").expect,
assert = require("chai").assert,
supertest = require("supertest"),
app= require("../bin/www");

var url=supertest("http://localhost:8080");

describe.only("Testing Moviename using Post",function(err){
  it("should handle the request",function(done){
    url
      .post("/moviedata/add/")
      .send({"Title":"RamayyaVasthavayya","Year":"2005","Rated":"R","Released":"14 Oct 1994","Runtime":"142 min","Genre":"Crime, Drama","Director":"shankar","Writer":"Stephen King (short story \"Rita Hayworth and Shawshank Redemption\"), Frank Darabont (screenplay)","Actors":"Ntr","Plot":"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.","Language":"Telugu","Country":"India","Awards":"No Nominations","Poster":"http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg","Metascore":"80","imdbRating":"6.3","imdbVotes":"2,656,352","imdbID":"tRamayya2001","Type":"movie","Response":"False"})
      .expect(200)
      .expect("content-type",/json/)
      .end(function(err,res){
        if(err){
          throw err;
        }
        expect(res.text).to.be.a('string');
      //  res.body.error.should.equal(false);
        done();
      });
    });
  });


describe.only("Testing the data by taking from DB with moviename as keyword (get))",function(err){
    it("should handle the request",function(done){
      url
        .get("/moviedata/getmovie/Simha")
        .expect(200)
        .end(function(err,res){
          if(err){
            throw err;
          }
          //expect(res.text).to.be.a('string');   Check length
          expect(res.text).to.be.a('string');
          done();
        });
      });
    });

describe("Testing the data by taking from DB and updating(put))",function(err){
      it("should handle the request",function(done){
        url
          .put("/moviedata/update/tt0111121")
          .expect(200)
          .end(function(err,res){
            if(err){
              throw err;
            }
            expect(res.text).to.be.a('string');
            done();
          });
        });
      });
