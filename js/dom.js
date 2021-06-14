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
                            <img style="width:50px; height: 50px; margin: 10px auto;" src="assets/weather/${day.weather[0].icon}.svg">
                            <ul class="card-body list-unstyled">
                            <li class="currentTemp">${(day.main.temp).toFixed(0)}&deg;</li>
                                <li>High: ${parseFloat(day.main.temp_max).toFixed(0)}&deg; </li>
                                <li>Low: ${parseFloat(day.main.temp_min).toFixed(0)}&deg; </li>
                                <li>Humidity: ${parseFloat(day.main.humidity).toFixed(0)}&deg; </li>
                            </ul>
                            <div class="card-footer bg-primary text-white">${day.weather[0].description}</div>
                        </div>
                        </div>`)
    })


}
