var Route = function(url){
  this.url = url;
}

Route.prototype = {

  makePost: function(callback){
    var request = new XMLHttpRequest();  
    request.open("POST", this.url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = callback
    request.send(payload);  
  }
}

module.exports = Route;
