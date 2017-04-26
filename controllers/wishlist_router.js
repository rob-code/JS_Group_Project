var express = require('express');
var app = express();
var wishlistRouter = express.Router();
var AdventureQuery = require('../db/adventure_query')
var adventureQuery = new AdventureQuery('wishlist')


//SHOW ALL - OK
wishlistRouter.get('/', function(req, res){
  adventureQuery.all(function(docs){
    res.json(docs)
  })
})


//SHOW TRIP BY ID
wishlistRouter.get('/:id', function(req,res){
  adventureQuery.getById(req.params.id,function(docs){
    res.json(docs[0])
  })
})

//UPDATE TRIP BY ID
wishlistRouter.put('/:id', function(req,res){
  adventureQuery.update(req.params.id, req.body, function(docs){
    res.json(docs);
  })
})

//CREATE NEW TRIP
wishlistRouter.post('/', function(req, res){

console.log('posting here ')

//** RB: If this gets tricky when posting from client
//it also works if we build the trip object in the client side as in seeds.js
//send that from the client and pass req.body into adventureQuery 

 var newTrip = {
    name: req.body.name,
    description: req.body.description,
    startpoint: req.body.startpoint,
    endpoint: req.body.endpoint,
    waypoints: req.body.waypoints,
    mode: req.body.mode,
    rating: req.body.rating,
    review: req.body.review
   }



    adventureQuery.add(newTrip, function(docs){
      res.json(docs)
    })

  })

//DELETE TRIP BY ID 
wishlistRouter.delete('/:id', function(req,res){
  
  adventureQuery.delete(req.params.id, function(docs){
    res.json(docs);
  })
})

module.exports = wishlistRouter;