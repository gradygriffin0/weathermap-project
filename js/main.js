
//set my token and initiate map variable for global use;
const mapboxToken = MAPBOX_TOKEN;

mapboxgl.accessToken = mapboxToken

var map;
let geocoder = createGeocoder();


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


// add a map click event to log lat and lon on click;
mapClick();
function mapClick(){
    map.on('click', function(e){
        console.log(e.lngLat);
        requestWeather(e.lngLat);
    })
}
