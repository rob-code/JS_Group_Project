var List = function(url){
  this.url = url;
  this.itemList = [];
  this.item = "";
}

List.prototype = {

  getData: function(callback){

    var request = new XMLHttpRequest();  
      request.open("GET", this.url);
    
      request.onload = function(){    
        if (request.status === 200){
            var jsonString = request.responseText; 
            this.itemList = JSON.parse(jsonString);
            callback(this.itemList);
          }
        }.bind(this); 
        
        request.send();  
  },

  getDataById: function(id,callback){

    var request = new XMLHttpRequest();  
      request.open("GET", this.url + "/"+id);
      
      console.log(this.url)
      console.log(this.url +"/"+id)



      request.onload = function(){    
        if (request.status === 200){

            console.log("Here?",request.responseText)

            var jsonString = request.responseText; 

            console.log(jsonString)

            this.item = JSON.parse(jsonString);

            console.log(this.item)
            callback(this.item);
          }
        }.bind(this); 
        
        request.send();  
  }




}

module.exports = List;