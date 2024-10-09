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
            />
          </div>
          <div className="col-3 ">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6 ">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
          />
          14°C
          <ul>
            <li>Precipitation:0% </li>
            <li>Humidity: 79%</li>
            <li>Wind: 6mph</li>
          </ul>
        </div>
        <div className="col-6">
          <h1>London</h1>
          <ul>
            <li>Wednesday 13:07 </li>
            <li>Mostly cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
