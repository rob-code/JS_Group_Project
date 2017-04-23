var express = require('express');
var app = express();
var apiRouter = express.Router();
var AdventureQuery = require('../db/adventure_query')
var adventureQuery = new AdventureQuery('route_data')


//SHOW ALL - OK
apiRouter.get('/', function(req, res){
  adventureQuery.all(function(docs){
    res.json(docs)
  })
})

//SHOW TRIP BY ID - OK
apiRouter.get('/:id', function(req,res){
  adventureQuery.all(function(docs){
    res.json(docs[req.params.id])
  })
})

//UPDATE TRIP BY ID - OK
apiRouter.put('/:id', function(req,res){
  adventureQuery.update(req.params.id, req.body, function(docs){
    res.json(docs);
  })
})

//CREATE NEW TRIP - OK 
apiRouter.post('/', function(req, res){

console.log(res.responseText, req.responseText)

var newTrip = {
   name: req.body.name,
   location: req.body.location,
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

//DELETE TRIP BY ID - OK
apiRouter.delete('/:id', function(req,res){
  
  adventureQuery.delete(req.params.id, function(docs){
    res.json(docs);
  })
})

module.exports = apiRouter;