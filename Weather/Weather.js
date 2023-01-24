import React, { useEffect, useState } from "react";
import "./Style.css";
import { Card } from "./Card";

export const Weather = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [info, setInfo] = useState("");

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=446892b43d98962cfe931037134dbd43`;

      //   units=metric   , to conver tempreture from feronoid to celcius

      const res = await fetch(url);
      const data = await res.json({});

      // const temp = data.main.temp;
      // const temp = data.main.humidity;
      // const temp = data.main.pressure;
      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      // creating a object and storing all data in this object..

      const myData = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      };

      setInfo(myData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="searchBox">
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
          />
          <button onClick={getWeatherInfo}>Search</button>
        </div>
        <Card info={info} />
      </div>
    </>
  );
};
