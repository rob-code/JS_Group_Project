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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

var FilterView = function(filterElement){

  this.filterElement = filterElement;

  this.render();
}


FilterView.prototype = {

render: function(){

  var title = document.createElement('div')
  title.innerHTML = "Search ";
  title.className = "filter-title";
  this.filterElement.appendChild(title)

  //make the form
  var form = document.createElement('form')
  form.method = "post";
  form.className = "filter-set";
  form.name = "filter";

  var fieldSet = document.createElement('fieldset')
  fieldSet.className = "filter-field-set"
  form.appendChild(fieldSet)

  //cycle row
  var cycleRow = document.createElement('div')
  cycleRow.className = 'filter-form-row'

  var cycleCheckBox = document.createElement('input')
  cycleCheckBox.type = "checkbox";
  cycleCheckBox.name = "cycle";
  cycleCheckBox.value = "cycle";
  cycleCheckBox.className = "filter-input"

  var cycleLabel = document.createElement('label')
  cycleLabel.innerHTML = "Cycle"
  cycleLabel.className = "filter-label"

  cycleRow.appendChild(cycleLabel)
  cycleRow.appendChild(cycleCheckBox)
  fieldSet.appendChild(cycleRow)

  //walk row
  var walkRow = document.createElement('div')
  walkRow.className = 'filter-form-row'

  var walkCheckBox = document.createElement('input')
  walkCheckBox.type = "checkbox";
  walkCheckBox.name = "walk";
  walkCheckBox.value = "walk";
  walkCheckBox.className = "filter-input"

  var walkLabel = document.createElement('label')
  walkLabel.innerHTML = "Walk"
  walkLabel.className = "filter-label"

  walkRow.appendChild(walkLabel)
  walkRow.appendChild(walkCheckBox)
  fieldSet.appendChild(walkRow)

  //avoid roads row
  var roadsRow = document.createElement('div')
  roadsRow.className = 'filter-form-row'

  var roadsCheckBox = document.createElement('input')
  roadsCheckBox.type = "checkbox";
  roadsCheckBox.name = "avoidRoads";
  roadsCheckBox.value = "avoidRoads";
  roadsCheckBox.className = "filter-input"

  var roadsLabel = document.createElement('label')
  roadsLabel.innerHTML = "Avoid roads"
  roadsLabel.className = "filter-label"

  roadsRow.appendChild(roadsLabel)
  roadsRow.appendChild(roadsCheckBox)
  fieldSet.appendChild(roadsRow)

  //location
  var locationRow = document.createElement('div')
  locationRow.className = 'filter-form-row-textfield'

  var locationLabel = document.createElement('label')
  locationLabel.innerHTML = "Location"
  locationLabel.className = "filter-label"

  var locationInput = document.createElement('input')
  locationInput.type = "text";
  locationInput.name = "location";
  locationInput.className = "filter-input-textfield"

  locationRow.appendChild(locationLabel)
  locationRow.appendChild(locationInput)
  fieldSet.appendChild(locationRow)

  //distance
  var distanceRow = document.createElement('div')
  distanceRow.className = 'filter-form-row-textfield'

  var distanceLabel = document.createElement('label')
  distanceLabel.innerHTML = "Distance (kms)"
  distanceLabel.className = "filter-label"

  var distanceInput = document.createElement('input')
  distanceInput.type = "text";
  distanceInput.name = "distance";
  distanceInput.className = "filter-input-textfield"

  distanceRow.appendChild(distanceLabel)
  distanceRow.appendChild(distanceInput)
  fieldSet.appendChild(distanceRow)







  this.filterElement.appendChild(form)


}







}

module.exports = FilterView

/***/ },
/* 2 */
/***/ function(module, exports) {

var HeaderView = function(headerElement){

  this.headerElement = headerElement
  this.adventureItem = null
  this.wishlistItem = null
  this.render()
}

HeaderView.prototype = {

  render: function(){

    var headerWrapper = document.createElement('div')
    headerWrapper.className = "header-wrapper"

    var headerViewSeparator1 = document.createElement('div')
    headerViewSeparator1.className = "header-view-item"
    headerViewSeparator1.innerHTML = " | "

    this.adventureItem = document.createElement('div')
    this.adventureItem.className = "header-view-item"
    this.adventureItem.innerHTML = "all Adventures"
    this.adventureItem.style = "cursor: pointer"

    var headerViewSeparator2 = document.createElement('div')
    headerViewSeparator2.className = "header-view-item"
    headerViewSeparator2.innerHTML = " | "

    this.wishlistItem = document.createElement('div')
    this.wishlistItem.className = "header-view-item" 
    this.wishlistItem.innerHTML = "my Adventures"
    this.wishlistItem.style = "cursor: pointer"

    var headerViewSeparator3 = document.createElement('div')
    headerViewSeparator3.className = "header-view-item"
    headerViewSeparator3.innerHTML = " | "

    headerWrapper.appendChild(headerViewSeparator1);
    headerWrapper.appendChild(this.adventureItem);
    headerWrapper.appendChild(headerViewSeparator2);
    headerWrapper.appendChild(this.wishlistItem);
    headerWrapper.appendChild(headerViewSeparator3);

    this.headerElement.appendChild(headerWrapper);

  }

}



module.exports = HeaderView

/***/ },
/* 3 */
/***/ function(module, exports) {

var ListScrollerView = function(listElement){
  this.listElement = listElement;
}

ListScrollerView.prototype = {

  renderAdventures: function(adventures){

    this.clearList()

    var title = document.createElement('div')
    title.innerHTML = "Adventure List";
    title.className = "adventure-list-title";
    this.listElement.appendChild(title)

    var scrollableContainer = document.createElement('div')
    scrollableContainer.className = "adventure-scrollable-container";
    this.listElement.appendChild(scrollableContainer)

    adventures.forEach(function(adventure){

      var wrapper = document.createElement('div')
      wrapper.className = "adventure-wrapper";

      var name = document.createElement('div')
      name.innerHTML = adventure.name;
      name.className = "adventure-name";

      var location = document.createElement('div')
      location.innerHTML = "Start at : " + adventure.location;
      location.className = "adventure-location";

      var routeMode = document.createElement('div')
      routeMode.innerHTML = "Route Mode : " + adventure.mode;
      routeMode.className = "adventure-mode";

      scrollableContainer.appendChild(wrapper)
      wrapper.appendChild(name)
      wrapper.appendChild(location)
      wrapper.appendChild(routeMode)
 
    }.bind(this))
  },


renderWishlist: function(adventures){

  this.clearList();
  

  var title = document.createElement('div')
  title.innerHTML = "my wish list";
  title.className = "adventure-list-title";
  this.listElement.appendChild(title)

  var scrollableContainer = document.createElement('div')
  scrollableContainer.className = "adventure-scrollable-container";
  this.listElement.appendChild(scrollableContainer)

  adventures.forEach(function(adventure){

    var wrapper = document.createElement('div')
    wrapper.className = "adventure-wrapper";

    var name = document.createElement('div')
    name.innerHTML = adventure.name;
    name.className = "adventure-name";

    var location = document.createElement('div')
    location.innerHTML = "Start at : " + adventure.location;
    location.className = "adventure-location";

    var routeMode = document.createElement('div')
    routeMode.innerHTML = "Route Mode : " + adventure.mode;
    routeMode.className = "adventure-mode";

    scrollableContainer.appendChild(wrapper)
    wrapper.appendChild(name)
    wrapper.appendChild(location)
    wrapper.appendChild(routeMode)

  }.bind(this))
},

clearList: function(){
  while (this.listElement.hasChildNodes()){
    this.listElement.removeChild(this.listElement.lastChild)
  }

console.log(this.listElement.childNodes)

}

}

module.exports = ListScrollerView




/***/ },
/* 4 */
/***/ function(module, exports) {

var MapWrapper = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })



  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer({
           draggable: true,
           map: this.googleMap,
           panel: document.getElementById('right-panel')
         });
  console.log(this.googleMap)
         directionsDisplay.addListener('directions_changed', function() {
           computeTotalDistance(directionsDisplay.getDirections());
         });

         this.displayRoute('Perth, WA', 'Sydney, NSW', directionsService,
            directionsDisplay);
  }



MapWrapper.prototype = {

  addMarker: function(coords, text){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })


//    currentDirections.routes[0].legs[0].via_waypoint[]. 

    // var infowindow = new google.maps.InfoWindow({
    //   content: text
    // })

    // marker.onLoad = infowindow.open(this.googleMap,marker)

    // marker.addListener('click', function(){
    //   infowindow.open(this.googleMap,marker);
    // })
  },

  displayRoute: function (origin, destination, service, display) {
         service.route({
           origin: origin,
           destination: destination,
           waypoints: [{location: 'Adelaide, SA'}, {location: 'Broken Hill, NSW'}],
           travelMode: 'WALKING',
           avoidTolls: true
         }, function(response, status) {
           if (status === 'OK') {
             display.setDirections(response);
           } else {
             alert('Could not display directions due to: ' + status);
           }
         });
       }

       // function computeTotalDistance(result) {
       //   var total = 0;
       //   var myroute = result.routes[0];
       //   for (var i = 0; i < myroute.legs.length; i++) {
       //     total += myroute.legs[i].distance.value;
       //   }
       //   total = total / 1000;
       //   document.getElementById('total').innerHTML = total + ' km';
       // }



};


module.exports = MapWrapper;





/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var MapWrapper = __webpack_require__(4);
var ListScrollerView = __webpack_require__(3)
var List = __webpack_require__(0);
var FilterView = __webpack_require__(1)
var HeaderView = __webpack_require__(2)



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

  headerView.adventureItem.addEventListener('click', function(){
    console.log('all adventures clicked')
    
    adventureList.getData(function(adventures){
      listScrollerView.renderAdventures(adventures)
      //console.log(listElement.childNodes)
    })
  })

   headerView.wishlistItem.addEventListener('click', function(){
     console.log('wishlist clicked')

     wishList.getData(function(adventures){
       listScrollerView.renderAdventures(adventures)
       //console.log(listElement.childNodes)
     })
  })



   var defaultListEvent = new Event('click');
   headerView.adventureItem.dispatchEvent(defaultListEvent);


   // var defaultListEvent = new Event('click');
   // headerView.wishlistItem.dispatchEvent(defaultListEvent);







}


window.onload = app;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map