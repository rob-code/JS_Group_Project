var MapWrapper = function(container, coords, zoom){


  this.googleMap = new google.maps.Map(container, {center: coords,zoom: zoom});
  this.directionsService = new google.maps.DirectionsService;
  this.directionsDisplay = new google.maps.DirectionsRenderer({ draggable: true, map: this.googleMap});

  this.markersArray = [];
}



MapWrapper.prototype = {


  clearMarkers: function(){

    for (var i = 0; i < this.markersArray.length; i++){
      this.markersArray[i].setMap(null)
    }  
  },


  addMarker: function(adventure){





    var marker = new google.maps.Marker({
      position: adventure.startpoint,
      map: this.googleMap
    })

    this.markersArray.push(marker); 

    var infoWindow = new google.maps.InfoWindow({
      content: adventure.name + "/n" + adventure.mode
    });

    marker.addListener('click', function() {
      infoWindow.open(this.googleMap, marker);
    });

  },

  resetMap: function () {
    this.directionsDisplay.setMap(null);
    //this.directionsDisplay = null;
  },


  showRoute1: function (origin, destination,waypoints, service, display, id, url) {


    this.id = id

    service.route({
      origin: origin,
      destination: destination,
      waypoints: waypoints,
      travelMode: 'WALKING',
      avoidTolls: true
    }, function(response, status) {
      if (status === 'OK') {

         // this.changeView(1,origin)
          this.clearMarkers();
          //// the route is displayed here
          this.directionsDisplay.setMap(this.googleMap);
          this.directionsDisplay.setDirections(response);

          ///////////response is the same as the line under
          //console.log(response.routes[0].legs[0]);
          //console.log(this.directionsDisplay.directions.routes[0].legs[0]);
          ///////////////////////////////////////////////////////

         // console.log(routeData1.via_waypoints);

         this.directionsDisplay.addListener("directions_changed", function(){

          console.log("directions changed - xmlhttprequest");
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
          /////////////////////////// Update route
          var request = new XMLHttpRequest();
          request.open("PUT", url + this.id);

          request.setRequestHeader("Content-Type", "application/json");

          request.onload = function(){console.log("sending");};

          request.send(jsonString);


           //////update end

         }.bind(this))


       } else {
        alert('Could not display directions due to: ' + status);
      }
    }.bind(this));


  }

};



module.exports = MapWrapper;



