function appendWeather(obj) {
    let house = $('#forecastOuter');
    house.html("");
    if ((obj.name === "") || (obj.country === "")) {
        alert("Oops, Couldn't find that area's name");
        house.append(`<h1>Weather for that area:</h1> <div class="row row-cols-5" id="forecastInner">
            </div>`);
    } else {
        house.append(`<h1>Weather in: ${obj.name}, ${obj.country}</h1><div class="row row-cols-5" id="forecastInner">
            </div>`);
    }
    let inner = $('#forecastInner');
    obj.forecast.forEach(function (day, index) {
        inner.append(`<div class="col" id="day-${index}"><div class="card"> <h5 class="card-header py-2">${day.dt_txt}</h5>
                <p class="card-body">temp: ${day.main.temp}, high: ${day.main.temp_max}, low: ${day.main.temp_min}, humidity: ${day.main.humidity}</p></div>
</div>`)
    })

}
