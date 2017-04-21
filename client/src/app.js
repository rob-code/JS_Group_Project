var MapWrapper = require('./views/map_wrapper.js');
var ListScrollerView = require('./views/list_scroller_view')
var List = require('./models/list.js');



var app = function(){

  var adventureList = new List('http://localhost:3000/api/adventures')
  var adventureView = document.querySelector('#list-view')
  var listScrollerView = new ListScrollerView(adventureView)

  adventureList.getData(function(adventures){

  console.log('we are here')
  listScrollerView.renderAdventures(adventures)


  })



  var container = document.getElementById('map-view');
  var coords = {lat: 56.0, lng: -4.0};
  var zoom = 10;
  var map = new MapWrapper(container, coords, zoom);


}


window.onload = app;