"use strict";
let serchBar = document.getElementById("searchBar");
let btn = document.getElementById("btn");
// fetch the items from the https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} API
const API_KEY = "4e8cd9086c203073ae22e947828e3add";
const COORDS = "coords";
const temp = document.querySelector(".weather__name");
const city = document.querySelector(".weather__region");
const feels = document.querySelector(".weather__feels");
const clouds = document.querySelector(".weather__clouds");
const pressure = document.querySelector(".weather__pressure");
const humidity = document.querySelector(".weather__humidity");
const img = document.querySelector("img");

btn.addEventListener("click", () => {
  getResults(serchBar.value);
  console.log(serchBar.value);
});

function getResults(region) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const temperature = Math.round(data.main.temp - 273.15);
      const loc = data.name;
      const cloud = data.weather[0].description;
      const press = data.main.pressure;
      const humid = data.main.humidity;
      const feel = Math.round(data.main.feels_like - 273.15);
      const sys = data.sys.country;
      const icon = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

      img.src = iconUrl;
      temp.innerText = `${temperature} °C `;
      city.innerText = `${loc}, ${sys}`;
      clouds.innerText = `${cloud}`;
      pressure.innerText = `Pressure: ${press} hPa`;
      humidity.innerText = `Humidity: ${humid} %`;
      feels.innerText = `Feels like ${feel} °C`;
    });
}
