var MapWrapper = require('./models/map_wrapper_model.js');

var app = function(){

  var container = document.getElementById('map-view');
  var coords = {lat: 56.0, lng: -4.0};
  var zoom = 10;
  var map = new MapWrapper(container, coords, zoom);


}


window.onload = app;