import React, { useEffect, useState } from "react";

export const Card = ({ info }) => {
  const [weatherState, setWeatherState] = useState("");

  const {
    temp,
    humidity,
    pressure,
    weatherMood,
    name,
    speed,
    country,
    sunset,
  } = info;

  let time = sunset;

  let date = new Date(time * 1000);

  let dateStr = `${date.getHours()}:${date.getMinutes()}`;

  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-showers");
          break;

        default:
          setWeatherState("wi-day-sunny");
      }
    }
  }, [weatherMood]);

  return (
    <>
      <article>
        <div className="Icon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="Section">
          <div className="temp">
            <h3>
              {temp}
              <span>&#176;</span>
            </h3>

            <span className="location">
              <b>{weatherMood}</b>
              <br></br>
              <i>
                {name},{country}
              </i>
            </span>
          </div>

          <div className="date">
            <h3>{new Date().toLocaleString()}</h3>
          </div>
        </div>

        <div className="extra-info">
          <div className="footer">
            <div className="topFooter">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
            </div>

            <div className="bottomFooter">
              <p>{dateStr} PM</p>
              <span>Sunny</span>
            </div>
          </div>
          <div className="footer">
            <div className="topFooter">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
            </div>

            <div className="bottomFooter">
              <p>{humidity}</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="footer">
            <div className="topFooter">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
            </div>

            <div className="bottomFooter">
              <p>{pressure}</p>
              <span>Pressure</span>
            </div>
          </div>
          <div className="footer">
            <div className="topFooter">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
            </div>

            <div className="bottomFooter">
              <p>{speed}</p>
              <span>Speed</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
