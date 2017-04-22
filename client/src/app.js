var MapWrapper = require('./views/map_wrapper.js');
var ListScrollerView = require('./views/list_scroller_view')
var List = require('./models/list.js');
var FilterView = require('./views/filter_view')
var HeaderView = require('./views/header_view')



var app = function(){

  var adventureList = new List('http://localhost:3000/api/adventures')

  var adventureListElement = document.querySelector('#list-view')
  var listScrollerView = new ListScrollerView(adventureListElement)

  var headerViewElement = document.querySelector('#header-view')
  var headerView = new HeaderView(headerViewElement)

  var filterViewElement = document.querySelector('#filter-view')
  var filterView = new FilterView(filterViewElement)






  adventureList.getData(function(adventures){

    listScrollerView.renderAdventures(adventures)

  headerView.adventureItem.addEventListener('click', function(){
    console.log('all adventures clicked')
  })

  headerView.wishlistItem.addEventListener('click', function(){
    console.log('my adventures clicked')
  })


  })



  var container = document.getElementById('map-view');
  var coords = {lat: 56.0, lng: -4.0};
  var zoom = 10;
  var map = new MapWrapper(container, coords, zoom);


}


window.onload = app;