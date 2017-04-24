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
         // directionsDisplay.addListener('directions_changed', function() {
         //   computeTotalDistance(directionsDisplay.getDirections());
         // });

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



