var express = require('express');
var app = express();
var apiRouter = express.Router();
var AdventureQuery = require('../db/adventure_query')
var adventureQuery = new AdventureQuery('route_data')


//SHOW ALL
apiRouter.get('/', function(req, res){
  adventureQuery.all(function(docs){
    res.json(docs)
  })
})

//SHOW TRIP BY ID
apiRouter.get('/:id', function(req,res){
  adventureQuery.all(function(docs){
    res.json(docs[req.params.id])
  })
})

//UPDATE TRIP BY ID
apiRouter.put('/:id', function(req,res){
  adventureQuery.update(req.params.id, req.body, function(docs){
    res.json(docs);
  })
})

//CREATE NEW TRIP
apiRouter.post('/', function(req, res){

console.log('posting here ')

var newTrip = {
   name: res.body.name ,
   origin_lat: res.body.origin_lat,
   origin_lng: res.body.origin_lng,
   destination_lat: res.body.destination_lat,
   destination_lng: res.body.destination_lng,
   mode: res.body.mode,
   waypoint: [
   {
     wp_name:res.body.waypoint.wp_name,
     wp_ref:res.body.waypoint.wp_ref,
     wp_lng: res.body.waypoint.wp_lng,
     wp_lat: res.body.waypoint.wp_lat
   }
   ]
  }

    adventureQuery.add(newTrip, function(docs){
      res.json(docs)
    })

  })

//DELETE TRIP BY ID 
apiRouter.delete('/:id', function(req,res){
  
  adventureQuery.delete(req.params.id, function(docs){
    res.json(docs);
  })
})

module.exports = apiRouter;