
//set my token and initiate map variable for global use;
const mapboxToken = MAPBOX_TOKEN;

mapboxgl.accessToken = mapboxToken

var map;
var marker;
var geocoder = createGeocoder();


// drawMap function: generate and append Mapbox onto the page
drawMap();
function drawMap(){
    map = new mapboxgl.Map( {
        container: "mapHouse",
        center: [-98.493629, 29.424122],
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 9
    })
}

//Create GEOCODER
function createGeocoder(){
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })

}
//adds geocoder to the map by document.id
appendGeocoder(geocoder);
function appendGeocoder(geocoder){
document.getElementById('search-bar').appendChild(geocoder.onAdd(map));
}
geocoderResultEvent(geocoder);
function geocoderResultEvent(geocoder){
    geocoder.on('result', function(e){

        console.log(e.result);
        createMarker(e.result.geometry.coordinates);
        requestWeather(e.result.geometry.coordinates);
    })

}


// add a map click event to log lat and lon on click;
mapClick();
function mapClick(){
    map.on('click', function(e){
        console.log(e.lngLat);
        createMarker(e.lngLat)
        requestWeather(e.lngLat);

    })
}

//  createMarker which generates new marker obj

createMarker([-98.49523561316934, 29.428026803961302]);
function createMarker(point){
    if (map._markers.length !== 0){
        marker.remove();

    }
    marker = new mapboxgl.Marker().setLngLat(point).addTo(map);
}