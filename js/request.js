

// to get weather off of wheere we start, just calling request weather on San Antonio's coords.
requestWeather({
    lng: -98.493629,
    lat: 29.424122
});
//function for getting and returning our data;
function requestWeather(lngLat){
    let lat = lngLat.lat;
    let lon = lngLat.lng;

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast",
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

// function to be called in the success of our request;
function sortData(data){

    let weatherObject = {
        name: data.city.name,
        country: data.city.country,
        forecast: data.list,
        today: this.forecast[0],
        day2: this.forecast[8],
        day3: this.forecast[16],
        day4: this.forecast[24],
        day5: this.forecast[32],

    }


}