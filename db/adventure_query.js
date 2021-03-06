var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;

var AdventureQuery = function(collectionName){
  this.url = 'mongodb://localhost:27017/adventures'
  this.collectionName = collectionName
}

AdventureQuery.prototype = {

  all: function(onQueryFinished){
  
    MongoClient.connect(this.url, function(err, db){

      if (db){
        var collection = db.collection(this.collectionName);
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
          db.close();
        })
      }
    }.bind(this))
  },

  filter: function(params, onQueryFinished){
    MongoClient.connect(this.url, function(err, db){

      if (db){
        var collection = db.collection(this.collectionName);

        console.log(params)

        //{"name" : /.*eorge*/}

        collection.find(params).toArray(function(err, docs){
          onQueryFinished(docs);
          db.close();
        })
      }
    }.bind(this))
  },

  getById: function(id,onQueryFinished){
  
    MongoClient.connect(this.url, function(err, db){

      if (db){
        var collection = db.collection(this.collectionName);
        collection.find({ "_id":ObjectID(id) }).toArray(function(err, docs){
          onQueryFinished(docs);
          db.close();
        })
      }
    }.bind(this))
  },

  update: function(id, newData, onQueryFinished){
    console.log("newData:", newData);

    MongoClient.connect(this.url, function(err, db){
      if (db){
        var collection = db.collection(this.collectionName);  
        collection.updateOne({ _id: ObjectID(id) }, { $set: newData } );
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
          db.close();
        })
      }
    }.bind(this))
  },

  add: function(newTrip, onQueryFinished){

    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection(this.collectionName);
        collection.insert(newTrip);
        collection.find().toArray(function(err,docs){
          onQueryFinished(docs);
          db.close();
        })
      }
    }.bind(this));
  },

  delete: function(id, onQueryFinished){

    MongoClient.connect(this.url, function(err, db){
      if (db){
        var collection = db.collection(this.collectionName);   
        collection.remove( { _id:ObjectID(id) } )
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
          db.close();
        })
      }
    }.bind(this))
  }

}


module.exports = AdventureQuery