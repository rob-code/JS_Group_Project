var MapWrapper = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {center: coords,zoom: zoom});
  this.directionsService = new google.maps.DirectionsService;
  this.directionsDisplay = new google.maps.DirectionsRenderer({ draggable: true, map: this.googleMap});
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

    showRoute1: function (origin, destination,waypoints, service, display) {

      service.route({
        origin: origin,
        destination: destination,
        waypoints: waypoints,
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

          this.directionsDisplay.addListener("directions_changed", function(){

            console.log("directions changed");
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
          /////////////////////////// post
             var request = new XMLHttpRequest();
             request.open("POST", "http://localhost:3000/api/adventures");
             request.setRequestHeader("Content-Type", "application/json");
             request.onload = function(){console.log("sending");};
             request.send(jsonString);
           

           //////post end

          }.bind(this))


        } else {
          alert('Could not display directions due to: ' + status);
        }
      }.bind(this));
            

    }

  };



module.exports = MapWrapper;



