function appendWeather(obj) {
    let house = $('#forecastOuter');
    house.html("");
    if ((obj.name === "") || (obj.country === "")) {
        alert("Oops, Couldn't find that area's name");
        house.append(`<span class="display-4 rounded bg-primary text-white">Weather for that area:</span> <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 justify-content-md-center" id="forecastInner">
            </div>`);
    } else {
        house.append(`<span class="display-4 rounded bg-primary text-white px-3" >${obj.name}, ${obj.country}:</span><div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 justify-content-md-center" id="forecastInner">
            </div>`);
    }
    let inner = $('#forecastInner');
    obj.forecast.forEach(function (day, index) {
        inner.append(`<div class="col" id="day-${index}">
                        <div class="card rounded mt-5"> 
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

//push

// console.log(Math.floor(Date.now() / 1000))

// console.log(timeStamp)
setInterval(function(){
    let timeStamp = new Date(Date.now());
    $("#timeTop").text(`${(timeStamp)
    .toLocaleString("en-US", { 
    hour: "numeric",
    minute: "numeric",
    
})}`)}, 100);

$('*').css({
    "font-family": "'Hammersmith One', sans-serif;",
    }
)

