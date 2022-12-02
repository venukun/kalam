import React, { useEffect, useState } from "react";

const getWeatherData = (city) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8dee0dbf17f272e4fefa8df470a7aa56&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      const { temp, temp_max, temp_min } = data.main;
      const { description } = data.weather[0];
      return {
<<<<<<< HEAD
        city,
=======
>>>>>>> 5ea5581c5dd5dffab32e437d3f96c0d820c81733
        temp,
        temp_max,
        temp_min,
        description,
      };
    });
};
const cities = ["Hyderabad", "Rajahmundry", "Lucknow", "Raipur"];

function Weather() {
  const [weather, setWeather] = useState({});
  const handleChanges = (e) => {
    getWeatherData(e.target.value).then((res) => {
      console.log(res);
      setWeather(res);
    });
  };

  useEffect(() => {
    getWeatherData(cities[0]).then((res) => {
      setWeather(res);
    });
  }, []);
  return (
    <div>
      <select onChange={handleChanges}>
        {cities.map((city, i) => (
          <option key={i}>{city}</option>
        ))}
      </select>
      <p>
        {weather.description &&
          `${weather.city}, ${weather.description}, ${weather.temp}°C (Max ${weather.temp_max}, Min ${weather.temp_min})`}
      </p>
    </div>
  );
}

export default Weather;
