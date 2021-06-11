

function requestWeather(lngLat){
    let lat = lngLat.lat;
    let lon = lngLat.lon;
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        type: "GET",
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            lat: lat,
            lon: lon,
            units: "imperial",
        },
        success: function(data){
            console.log(data)
        },
        error: function(request, textStatus, errorThrown){
            alert("Status: " + textStatus); alert("Error: " + errorThrown);
        }
    })
}