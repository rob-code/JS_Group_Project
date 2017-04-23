var MapWrapper = require('./views/map_wrapper.js');
var ListScrollerView = require('./views/list_scroller_view')
var List = require('./models/list.js');
var FilterView = require('./views/filter_view')
var HeaderView = require('./views/header_view')

var app = function(){

  //load header_view
  var headerViewElement = document.querySelector('#header-view')
  var headerView = new HeaderView(headerViewElement)

  //load filter_view
  var filterViewElement = document.querySelector('#filter-view')
  var filterView = new FilterView(filterViewElement)
  
  //load map
  var container = document.getElementById('map-view');
  var coords = {lat: 56.0, lng: -4.0};
  var zoom = 10;
  var map = new MapWrapper(container, coords, zoom);


  //load list_scroller_view of adventures
  var listElement = document.querySelector('#list-view')
  var listScrollerView = new ListScrollerView(listElement)

  var adventureList = new List('http://localhost:3000/api/adventures')
  var wishList = new List('http://localhost:3000/api/wishlist')


  //these eventlisteners toggle which scrollable list to display 
  headerView.adventureItem.addEventListener('click', function(){
    adventureList.getData(function(adventures){
      listScrollerView.renderAdventures(adventures)
    
    })
  })

   headerView.wishlistItem.addEventListener('click', function(){
     wishList.getData(function(adventures){
       listScrollerView.renderWishlist(adventures)
      
     })
  })

  //list view on startup is all the adventures 
  var defaultListEvent = new Event('click');
  headerView.adventureItem.dispatchEvent(defaultListEvent);

}


window.onload = app;