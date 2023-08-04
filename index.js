const  apiKey = "8fd541c8ca42cf779432ca818250751f";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBtn = document.querySelector("form");
const weatherimg = document.querySelector(".weatherImg");
async function checkWeather(city){
    const response = await fetch(apiURL+ city +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".humidity-value").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind-value").innerHTML = data.wind.speed+" Km/H";

    if(data.weather[0].main == "Clouds")
        weatherimg.src = "images/clouds.png";
    else if(data.weather[0].main == "Clear")
        weatherimg.src = "images/clear.png";
    else if(data.weather[0].main == "Rain")
        weatherimg.src = "images/rain.png";
    else if(data.weather[0].main == "Drizzle")
        weatherimg.src = "images/drizzle.png";
    else if(data.weather[0].main == "Mist")
        weatherimg.src = "images/mist.png";

}
searchBtn.addEventListener("submit", (e)=>{
    e.preventDefault();
    const searchBox = document.querySelector(".search");
    console.log(searchBox.value)
    if(searchBox.value=="")
        alert("Enter the city name");
    else
        checkWeather(searchBox.value);
})
