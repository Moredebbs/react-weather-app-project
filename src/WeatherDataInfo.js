import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherDataInfo(props) {
  return (
    <div className="WeatherDataInfo">
      <div className="Weather-info mt-3 ">
        <div>
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="float-left"
          />
          <WeatherTemperature celsius={props.data.temperature} />

          <div className="row weather-features">
            <div className="col-6">Humidity:{props.data.humidity}%</div>
            <div className="col-7">Wind: {props.data.wind} km/h</div>
          </div>
        </div>
        <div>
          <h1>{props.data.city}</h1>
          <ul className="weather-description">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
