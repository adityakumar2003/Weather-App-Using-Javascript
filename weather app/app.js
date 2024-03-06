// $(document).ready(function () {
function weatherdetails() {
    var name = document.getElementById("i-city").value;
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        method: "GET",
        data: { "q": name, "appid": "a2cdfdc4f0dde6667c7bbeddec55f6f3", "units": "metric" },
        success: function (responce) {
            document.getElementById("m-temp").innerHTML = (responce.main.temp) + "°c";
            document.getElementById("humid").innerHTML = (responce.main.humidity) + "%";
            document.getElementById("w-speed").innerHTML = (responce.wind.speed) + "km/h";
            document.getElementById("nme").innerHTML = (responce.name);
            var var1 = responce.weather[0].main
            if (var1 == "Mist") {
                document.getElementById("weather-icon").src = "./asset/mist.png"
            }
            else if (var1 == "Clear") {
                document.getElementById("weather-icon").src = "./asset/clear.png"
            }
            else if (var1 == "Clouds") {
                document.getElementById("weather-icon").src = "./asset/clouds.png"
            }
            else if (var1 == "Drizzle") {
                document.getElementById("weather-icon").src = "./asset/drizzle.png"
            }
            else if (var1 == "Rain") {
                document.getElementById("weather-icon").src = "./asset/rain.png"
            }
            else if (var1 == "Snow") {
                document.getElementById("weather-icon").src = "./asset/snow.png"
            }
            else if (var1 == "Smoke") {
                document.getElementById("weather-icon").src = "./asset/blue-clouds.png"
            }
            else {
                document.getElementById("weather-icon").innerHTML = var1;
            }
        }
    })
}
//});



