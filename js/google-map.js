// координаты
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('cabinet-map'), {
        center: {lat: 46.280, lng: 30.43},
        zoom: 8
    });
}