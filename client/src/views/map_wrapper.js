var MapWrapper = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
}

MapWrapper.prototype = {

  addMarker: function(coords, text){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })




    // var infowindow = new google.maps.InfoWindow({
    //   content: text
    // })

    // marker.onLoad = infowindow.open(this.googleMap,marker)

    // marker.addListener('click', function(){
    //   infowindow.open(this.googleMap,marker);
    // })
  }







};


module.exports = MapWrapper;



