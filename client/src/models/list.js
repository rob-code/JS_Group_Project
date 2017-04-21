var List = function(url){
  this.url = url;
  this.itemList = [];
}

List.prototype = {

  getData: function(callback){

    var request = new XMLHttpRequest();  
      request.open("GET", this.url);
    
      request.onload = function(){    
        if (request.status === 200){
            var jsonString = request.responseText; 
            this.itemList = JSON.parse(jsonString);
            console.log(this.itemList)
            callback(this.itemList);
          }
        }.bind(this); 
        
        request.send();  
  }
}

module.exports = List;