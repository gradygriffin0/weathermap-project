function appendWeather(obj) {
    let house = $('#forecastOuter');
    house.html("");
    if ((obj.name === "") || (obj.country === "")) {
        alert("Oops, Couldn't find that area's name");
        house.append(`<h1 class="display-4">Weather for that area:</h1> <div class="row row-cols-5" id="forecastInner">
            </div>`);
    } else {
        house.append(`<h1 class="display-4 m-4 " >${obj.name}, ${obj.country}</h1><div class="row row-cols-5" id="forecastInner">
            </div>`);
    }
    let inner = $('#forecastInner');
    obj.forecast.forEach(function (day, index) {
        inner.append(`<div class="col" id="day-${index}">
                        <div class="card rounded"> 
                            <h5 class="card-header bg-primary text-white py-2">${daySort(day.dt_txt)}</h5>
                            <img style="width:100px; height: 100px; margin: auto;" src="http://openweathermap.org/img/w/${day.weather[0].icon}.png">
                            <ul class="card-body list-unstyled">
                            <li class="currentTemp">${day.main.temp}&deg;</li>
                                <li>High: ${day.main.temp_max}&deg; </li>
                                <li>Low: ${day.main.temp_min}&deg; </li>
                                <li>Humidity: ${day.main.humidity}&deg; </li>
                            </ul>
                        </div>
                        </div>`)
    })


}
