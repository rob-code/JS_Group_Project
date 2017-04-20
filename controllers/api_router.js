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

// //SHOW TRIP BY ID
// tripsRouter.get('/:id', function(req,res){
//   tripsQuery.all(function(docs){
//     res.json(docs[req.params.id])
//   })
// })

// //UPDATE TRIP BY ID
// tripsRouter.put('/:id', function(req,res){
//   tripsQuery.update(req.params.id, req.body, function(docs){
//     res.json(docs);
//   })
// })

// //CREATE NEW TRIP
// tripsRouter.post('/', function(req, res){

// console.log('posting here ')

//   var newTrip = {
//     country: req.body.country,
//     visitByDate: req.body.visitByDate,
//     places: [
//     {location: req.body.location,
//       landmarks: [req.body.landmarks],
//       lat: req.body.lat,
//       lng: req.body.lng}
//       ]
//     }

//     tripsQuery.add(newTrip, function(docs){
//       res.json(docs)
//     })

//   })

// //DELETE TRIP BY ID 
// tripsRouter.delete('/:id', function(req,res){
  
//   tripsQuery.delete(req.params.id, function(docs){
//     res.json(docs);
//   })
// })

module.exports = apiRouter;