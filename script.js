const apiKey = "e7a2c374a87d87239f7740d886c7582c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.querySelector(".inputcity");
const sear = document.querySelector(".search-btn");
const imgdisplay = document.querySelector(".imgdis");

async function getWeather(cityname) {
    const response = await fetch(apiUrl + cityname + `&appid=${apiKey}`);

    if (response.status == 404) {
        imgdisplay.src = "Images/3737258-removebg-preview.png";
        document.getElementById("temp").style.display = "none";
        document.getElementById("loc-name").style.display = "none";
        document.querySelector(".wind-hum").style.display = "none";
    }
    else {
        var data = await response.json();

        console.log(data);

        document.getElementById("loc-name").innerHTML = data.name;
        document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "&deg;" + "C";
        document.getElementById("humidity").innerHTML = data.main.humidity + " " + "%";
        document.getElementById("wind").innerHTML = data.wind.speed + " " + "km/h";

        if (data.weather[0].main == "Clear") {
            imgdisplay.src = "Images/Sunny.png";
        }
        else if (data.weather[0].main == "Rain") {
            imgdisplay.src = "Images/Rainy.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            imgdisplay.src = "Images/Drizzle.png";
        }
        else if (data.weather[0].main == "Clouds") {
            imgdisplay.src = "Images/cloudwithsun.png";
        }
        else if (data.weather[0].main == "Mist") {
            imgdisplay.src = "Images/Mist.png";
        }
        else if (data.weather[0].main == "Snowy") {
            imgdisplay.src = "Images/Snowy.png";
        }

        document.getElementById("temp").style.display = "block";
        document.getElementById("loc-name").style.display = "block";
        document.querySelector(".wind-hum").style.display = "flex";

    }

}
sear.addEventListener("click", () => {
    getWeather(city.value);
})