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
  
  ///////////////////////////////////////////////////////
  //////////////////////////MAP/////////////////////////////
  ///////////////////////////////////////////////////////
  var renderListRoute = function(mongoCoords){
    var origin = new google.maps.LatLng(mongoCoords.startpoint.lat,mongoCoords.startpoint.lng);
    var destination = new google.maps.LatLng(mongoCoords.endpoint.lat,mongoCoords.endpoint.lng);
    var wp = [];
        for(var i=0;i<mongoCoords.waypoints.length;i++)
            wp[i] = {'location': new google.maps.LatLng(mongoCoords.waypoints[i][0], mongoCoords.waypoints[i][1]),'stopover':false }

    map.showRoute1(origin, destination, wp, map.directionsService, map.directionsDisplay)

  }
  //load map
  var container = document.getElementById('map-view');
  var coords = {lat: 55.953252, lng: -3.188267};
  var zoom = 10;
  var map = new MapWrapper(container, coords, zoom);
  //
  var mockRoute = {"startpoint":{"lat":55.9423957,"lng":-3.20640149999997},"endpoint":{"lat":55.9608186,"lng":-3.199936799999932},"waypoints":[[55.9472594,-3.1973686000000043],[55.9539001,-3.185916300000031],[55.9569345,-3.201127700000029]]};


  var wp = [];
      for(var i=0;i<mockRoute.waypoints.length;i++)
          wp[i] = {'location': new google.maps.LatLng(mockRoute.waypoints[i][0], mockRoute.waypoints[i][1]),'stopover':false }
         
  var ori = new google.maps.LatLng(mockRoute.startpoint.lat,mockRoute.startpoint.lng);

  var desti = new google.maps.LatLng(mockRoute.endpoint.lat,mockRoute.endpoint.lng);

  map.showRoute1(ori,desti,wp, map.directionsService, map.directionsDisplay )

  /////////////////////////////////////////////////////////
  ////////////////////MAP END/////////////////////
  /////////////////////////////////////////////////////////

  //load list_scroller_view of adventures
  var listElement = document.querySelector('#list-view')
  var listScrollerView = new ListScrollerView(listElement)

  var adventureList = new List('http://localhost:3000/api/adventures')
  var wishList = new List('http://localhost:3000/api/wishlist')



  //these eventlisteners toggle which scrollable list to display 
  headerView.adventureItem.addEventListener('click', function(){
    adventureList.getData(function(adventures){
      listScrollerView.renderAdventures(adventures, function(adventure){
        renderListRoute(adventure);
      })
    
    })
  })

   headerView.wishlistItem.addEventListener('click', function(){
     wishList.getData(function(adventures){
       listScrollerView.renderWishlist(adventures, function(adventure){
        renderListRoute(adventure);
      })
       
     })
  })

  //
  // headerView.CyoView.addEventListener('click', function(){
  //      console.log('wishlist clicked')

       
  //        CyoView.renderCYO()
  //        //console.log(listElement.childNodes)
       
  // })


  //list view on startup is all the adventures 
  var defaultListEvent = new Event('click');
  headerView.adventureItem.dispatchEvent(defaultListEvent);

}


window.onload = app;

