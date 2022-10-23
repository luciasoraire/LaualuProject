function iniciarMap(){
    var coord = {lat:-34.6037389 ,lng: -58.3815704};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 13,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}