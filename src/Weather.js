import React from "react";
import "./Weather.css";
export default function Weather() {
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
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
            className="float-left"
          />

          <span className="temperature">14</span>
          <span className="units">°C</span>
          <div className="row weather-features">
            <div className="col-4">Precipitation:0%</div>
            <div className="col-4">Humidity:79%</div>
            <div className="col-4">Wind: 6mph</div>
          </div>
        </div>
        <div>
          <h1>London</h1>
          <ul className="weather-description">
            <li>Wednesday 13:07 </li>
            <li>Mostly cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
