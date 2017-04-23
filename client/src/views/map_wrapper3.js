var MapWrapper = function(container, coords, zoom){
  var self = this
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })

  this.googleMap.addListener('click', function(e) {
   console.log(e.latLng)
    
     // var marker = new google.maps.Marker({
     //           position: e.latLng,
     //           map: self.googleMap
     //         });
        this.panTo(e.latLng)
   });

  var directionsRequest = {
             origin: "brooklyn",
             destination: "queens",
             travelMode: google.maps.DirectionsTravelMode.DRIVING,
             unitSystem: google.maps.UnitSystem.METRIC
         };


  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer({
           draggable: true,
           map: this.googleMap,
           panel: document.getElementById('right-panel')
         });

         directionsDisplay.addListener('directions_changed', function() {
           this.computeTotalDistance(directionsDisplay.getDirections());
         });

         this.displayRoute('Perth, WA', 'Sydney, NSW', directionsService,
            directionsDisplay);

         directionsService.route(directionsRequest, function (response, status) {
                     if (status == google.maps.DirectionsStatus.OK) {                    
                     console.log("Loged this:",response.routes[0].legs[0].end_location.lat())}
                    });

         var infowindow = new google.maps.InfoWindow({
               content: text
             })

       

  }



MapWrapper.prototype = {

  addMarker: function(coords, text){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
  },

    // marker.onLoad = infowindow.open(this.googleMap,marker)

    // marker.addListener('click', function(){
    //   infowindow.open(this.googleMap,marker);
    // })

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
       },

        computeTotalDistance: function (result) {
         var total = 0;
         var myroute = result.routes[0];
         for (var i = 0; i < myroute.legs.length; i++) {
           total += myroute.legs[i].distance.value;
         }
         total = total / 1000;
         document.getElementById('total').innerHTML = total + ' km';
       }



};


// module.exports = MapWrapper;



