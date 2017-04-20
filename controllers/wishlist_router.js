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
  adventureQuery.all(function(docs){
    res.json(docs[req.params.id])
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

 var newTrip = {
    name: req.body.name,
    origin_lat: req.body.origin_lat,
    origin_lng: req.body.origin_lng,
    destination_lat: req.body.destination_lat,
    destination_lng: req.body.destination_lng,
    mode: req.body.mode,
    waypoint: [
    {
      wp_name:req.body.waypoint[0].wp_name,
      wp_ref:req.body.waypoint[0].wp_ref,
      wp_lng: req.body.waypoint[0].wp_lng,
      wp_lat: req.body.waypoint[0].wp_lat
    }
    ]
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