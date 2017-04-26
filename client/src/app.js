var MapWrapper = require('./views/map_wrapper.js');
var ListScrollerView = require('./views/list_scroller_view')
var List = require('./models/list.js');
var FilterView = require('./views/filter_view')
var HeaderView = require('./views/header_view')

var app = function(){

  //load list_scroller_view of adventures
  var listElement = document.querySelector('#list-view')
  var listScrollerView = new ListScrollerView(listElement)

  var adventureList = new List('http://localhost:3000/api/adventures')
  var wishList = new List('http://localhost:3000/api/wishlist')

  //load header_view
  var headerViewElement = document.querySelector('#header-view')
  var headerView = new HeaderView(headerViewElement)

  //load filter_view
  var filterViewElement = document.querySelector('#filter-view')
  var filterView = new FilterView(filterViewElement)
  filterView.render(function(adventures){
    console.log("adventures:",adventures[0])
   
    listScrollerView.renderAdventures(adventures,function(adventure){

        adventureList.getDataById(adventure._id,function(item){         
        renderListRoute(item,'http://localhost:3000/api/adventures/' );
    });
   


    })








  })
  
  ///////////////////////////////////////////////////////
  //////////////////////////MAP/////////////////////////////
  ///////////////////////////////////////////////////////

  var populateMarkers = function(adventures){

      adventures.forEach(function(adventure){
        map.addMarker(adventure)
      })

  }


  var renderListRoute = function(adventure,url){
    var origin = new google.maps.LatLng(adventure.startpoint.lat,adventure.startpoint.lng);
    var destination = new google.maps.LatLng(adventure.endpoint.lat,adventure.endpoint.lng);
    var wp = [];
        for(var i=0;i<adventure.waypoints.length;i++)
            wp[i] = {'location': new google.maps.LatLng(adventure.waypoints[i][0], adventure.waypoints[i][1]),'stopover':false }

      console.log(adventure._id)

    map.showRoute1(origin, destination, wp, map.directionsService, map.directionsDisplay,adventure._id,url)

  }
  //load map
  var container = document.getElementById('map-view');
  var coords = {lat: 55.953252, lng: -3.188267};
  var zoom = 10;
  var map = new MapWrapper(container, coords, zoom);
  //
  // var mockRoute = {"startpoint":{"lat":55.9423957,"lng":-3.20640149999997},"endpoint":{"lat":55.9608186,"lng":-3.199936799999932},"waypoints":[[55.9472594,-3.1973686000000043],[55.9539001,-3.185916300000031],[55.9569345,-3.201127700000029]]};


  // var wp = [];
  //     for(var i=0;i<mockRoute.waypoints.length;i++)
  //         wp[i] = {'location': new google.maps.LatLng(mockRoute.waypoints[i][0], mockRoute.waypoints[i][1]),'stopover':false }
         
  // var ori = new google.maps.LatLng(mockRoute.startpoint.lat,mockRoute.startpoint.lng);

  // var desti = new google.maps.LatLng(mockRoute.endpoint.lat,mockRoute.endpoint.lng);

  // map.showRoute1(ori,desti,wp, map.directionsService, map.directionsDisplay )

  /////////////////////////////////////////////////////////
  ////////////////////MAP END/////////////////////
  /////////////////////////////////////////////////////////





  //these eventlisteners toggle which scrollable list to display 
  headerView.adventureItem.addEventListener('click', function(){

    adventureList.getData(function(adventures){
      map.googleMap.setZoom(10);
      map.resetMap()
      map.clearMarkers();
      populateMarkers(adventures)
      //add map.method for rendering start points

      listScrollerView.renderAdventures(adventures,function(adventure){
          adventureList.getDataById(adventure._id,function(item){         
          renderListRoute(item,'http://localhost:3000/api/adventures/' );
      });
      })

    })
  });


   headerView.wishlistItem.addEventListener('click', function(){
     wishList.getData(function(adventures){
      
       map.resetMap()
       map.googleMap.setZoom(10);
       map.clearMarkers();
       //add map.method for rendering start points
       populateMarkers(adventures)

       listScrollerView.renderWishlist(
        //arg1
        adventures, 
        //arg2
        function(adventure){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "DELETE", 'http://localhost:3000/api/wishlist/'+ adventure._id, false );
        xmlHttp.send( null );
        ///// 
        var defaultListEvent = new Event('click');
        headerView.wishlistItem.dispatchEvent(defaultListEvent);
       },
       //arg3
        function(adventure){
            wishList.getDataById(adventure._id,function(item){         
            renderListRoute(item,'http://localhost:3000/api/wishlist/');
       });

      })
     })
  });



  //list view on startup is all the adventures 
  var defaultListEvent = new Event('click');
  headerView.adventureItem.dispatchEvent(defaultListEvent);
}


window.onload = app;

