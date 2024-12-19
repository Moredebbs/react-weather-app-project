import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
export default function WeatherDataInfo(props) {
  return (
    <div className="WeatherDataInfo">
      <div className="Weather-info mt-3 ">
        <div>
          <div className="float-left">
            <WeatherIcon code={props.data.icon} size={52} />
          </div>

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
