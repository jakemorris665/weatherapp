const weatherBtn = document.getElementById("getWeather");
const searchBar = document.getElementById("search");
const place = document.getElementById("location");
const description = document.getElementById("description");
const temp = document.getElementById("temp");
const wind = document.getElementById("wind");
const body = document.querySelector("body");

let searchTerm;
let weatherData;

async function getWeather() {
  weatherBtn.disabled = true;
  searchTerm = searchBar.value;
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&APPID=5bc5b119aff6ffba91bc96547a288038`,
      { mode: "cors" }
    );
    weatherData = await response.json();
    console.log(weatherData);
    let myData = processWeather(weatherData);
    displayWeather(myData);
    weatherBtn.disabled = false;
    searchBar.value = "";
  } catch (error) {
    if (weatherData.cod === "404") {
      alert("city not found");
    } else if (weatherData.cod === "400") {
      alert("please enter a city");
    }
    console.log(error);
    weatherBtn.disabled = false;
    searchBar.value = "";
  }
}

function processWeather(weatherData) {
  let myData = {
    weather: weatherData.weather[0].main,
    description: weatherData.weather[0].description,
    temp: weatherData.main.temp,
    tempFeel: weatherData.main.feels_like,
    city: weatherData.name,
    country: weatherData.sys.country,
    wind: weatherData.wind.speed,
  };
  return myData;
}

function displayWeather(myData) {
  console.log(myData.weather);
  if (myData.weather === "Clouds") {
    body.className = "bg bgClouds";
  } else if (myData.weather === "Clear") {
    body.className = "bg bgClear";
  } else if (myData.weather === "Thunderstorm") {
    body.className = "bg bgThunder";
  } else if (myData.weather === "Rain" || myData.weather === "Drizzle") {
    body.className = "bg bgRain";
  } else if (myData.weather === "Snow") {
    body.className = "bg bgSnow";
  }
  description.textContent = myData.description;
  temp.textContent = myData.temp + " degrees C";
  place.textContent = `${myData.city}, ${myData.country}`;
  wind.textContent = "Wind speed: " + myData.wind + " m/hr";
}

weatherBtn.addEventListener("click", getWeather);
