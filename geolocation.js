jQuery(document).ready(function(){

function show_map(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  $("#support").text("Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude);
    var cloudmade = new CM.Tiles.CloudMade.Web({key: '8ee2a50541944fb9bcedded5165f09d9'});
    var map = new CM.Map('map', cloudmade);
    map.setCenter(new CM.LatLng(position.coords.latitude, position.coords.longitude), 15);
}

  $("#support").ready(function(){
    if(Modernizr.geolocation){
      navigator.geolocation.getCurrentPosition(show_map);
    }else{
      $(this).text(" No Support");
    }
  });

});
