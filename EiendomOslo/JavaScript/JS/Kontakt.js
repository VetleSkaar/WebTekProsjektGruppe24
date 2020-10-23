


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: 51.508742, lng: -0.120850 },
    zoom: 5,
  });
}

initMap();