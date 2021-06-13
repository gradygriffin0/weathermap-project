// to get weather off of wheere we start, just calling request weather on San Antonio's coords.
requestWeather({
    lng: -98.493629,
    lat: 29.424122
});

//function for getting and returning our data;
function requestWeather(lngLat) {
    let lat, lon;
    if (!Array.isArray(lngLat)){
         lat = lngLat.lat;
         lon = lngLat.lng;
    }
    else {
         lon = lngLat[0]
         lat = lngLat[1]
    }


    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            lat: lat,
            lon: lon,
            units: "imperial",
        },
        success: function (data) {
            console.log(data)
            $('#forecastOuter').innerHTML = "";
            appendWeather(sortData(data));



        },
        error: function (request, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    })
}

// function to be called in the success of our request;
function sortData(data) {
    let forecastList = data.list;
    let forecast = [forecastList[0], forecastList[8], forecastList[16], forecastList[24], forecastList[32]];
    let weatherObject = {
        name: data.city.name,
        country: data.city.country,
        // forecast: data.list,
        forecast: forecast,

    }
    console.log(weatherObject);
    return weatherObject;

}


function daySort(day){
    console.log(day);
     let date = day.split(" ")[0] + "T00:00:00";


return new Date(date).toDateString();
}
