/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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

/***/ },
/* 1 */
/***/ function(module, exports) {

var ListScrollerView = function(scrollerElement){

this.scrollerElement = scrollerElement;

}


ListScrollerView.prototype = {

renderAdventures: function(adventures){
console.log('lets render the adventure')

// adventures.forEach(function(adventure, index){
// var option = document.createElement('option')
// // //content here 
// // option.??
// // option.??

// this.scrollerElement.addChild(option)
// }.bind(this))



}


/*renderWishList: function(wishlist){
  // wishlist.forEach(function(adventure, index){
  // var option = document.createElement('option')
  // // //content here 
  // // option.??
  // // option.??

  // this.scrollerElement.addChild(option)
  // }.bind(this))

}
*/

}

module.exports = ListScrollerView




/***/ },
/* 2 */
/***/ function(module, exports) {

var MapWrapper = function(container, coords, zoom){

 this.googleMap = new google.maps.Map(container, {center: coords,zoom: zoom});
 this.directionsService = new google.maps.DirectionsService;
 this.directionsDisplay = new google.maps.DirectionsRenderer({ draggable: true, map: this.googleMap});
}
 

MapWrapper.prototype = {

 showRoute1: function (origin, destination, service, display) {

   service.route({
     origin: origin,
     destination: destination,
     waypoints: [],
     travelMode: 'WALKING',
     avoidTolls: true
   }, function(response, status) {
     if (status === 'OK') {

       //// the route is displayed here
       this.directionsDisplay.setDirections(response);

       ///////////response is the same as the line under
       //console.log(response.routes[0].legs[0]);
       //console.log(this.directionsDisplay.directions.routes[0].legs[0]);
       ///////////////////////////////////////////////////////

      // console.log(routeData1.via_waypoints);

       this.directionsDisplay.addListener('directions_changed', function(){

         console.log('directions changed');
         console.log(this.directionsDisplay.directions.routes[0].legs[0]);

         //// create object from directions
       var routeData = {};

       var routeDirections = this.directionsDisplay.directions.routes[0].legs[0]

       var routeWaypoints = [];

       routeData.startpoint = {'lat': routeDirections.start_location.lat(), 'lng':routeDirections.start_location.lng()}

       routeData.endpoint = {'lat': routeDirections.end_location.lat(), 'lng':routeDirections.end_location.lng()}

       var viawp = routeDirections.via_waypoints
       for(var i=0;i<viawp.length;i++){
         routeWaypoints[i] = [viawp[i].lat(),viawp[i].lng()]
       }
       routeData.waypoints = routeWaypoints;
           
       var jsonString = JSON.stringify(routeData)
       console.log(jsonString);


       }.bind(this))


     } else {
       alert('Could not display directions due to: ' + status);
     }
   }.bind(this));
         

 }

};


module.exports = MapWrapper;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var MapWrapper = __webpack_require__(2);
var ListScrollerView = __webpack_require__(1)
var List = __webpack_require__(0);



var app = function(){

  var adventureList = new List('http://localhost:3000/api/adventures')
  var adventureView = document.querySelector('#list-view')
  var listScrollerView = new ListScrollerView(adventureView)

  adventureList.getData(function(adventures){

  listScrollerView.renderAdventures(adventures)

  })



  var container = document.getElementById('map-view');
  var coords = {lat: 56.0, lng: -4.0};
  var zoom = 10;
  var map = new MapWrapper(container, coords, zoom);

       
  }

      



window.onload = app;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map