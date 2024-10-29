import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9 ">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>

            <div className="col-3 ">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <div className="Weather-info mt-3 ">
          <div>
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            />

            <span className="temperature">{weatherData.temperature}</span>
            <span className="units">°C</span>
            <div className="row weather-features">
              <div className="col-6">Humidity:{weatherData.humidity}%</div>
              <div className="col-7">Wind: {weatherData.wind}km/h</div>
            </div>
          </div>
          <div>
            <h1>{weatherData.city}</h1>
            <ul className="weather-description">
              <li>Wednesday 13:07 </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apikey = "cabdbda40038ba7d1165b953b1c7bd6c";

    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apikey}&units=metric`;
    axios.get(apiurl).then(handleResponse);

    return "Loading.....";
  }
}
