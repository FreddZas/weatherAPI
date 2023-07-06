import React from "react";
import { useState } from "react";
import "./styles/weatherStyleCard.css";

const WeatherCard = ({ weather, temp }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleChangeTemp = () => {
    return setIsCelsius(!isCelsius);
  };

  return (
    <article className="weather">
      <header className="weather__header">
        <h1 className="weather__title">{weather?.name}, {weather?.sys.country}</h1>
      </header>

      <section className="weather__body">
        <div className="weather__img-container">
          <img
            src={
              weather &&
              `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`
            } alt=""
          />
        </div>

        <div className="weather__info">
          <h3 className="weather__info-title">
            {weather?.weather[0].description}
          </h3>
          <ul className="weather__list">
            <li className="weather__list-item">
              <span className="weather__list-label">WIND</span>
              <span className="weather__list-value">
                {weather?.wind.speed} m/s
              </span>
            </li>
            <li className="weather__list-item">
              <span className="weather__list-label">CLOUDS</span>
              <span className="weather__list-value">
                {weather?.clouds.all} %
              </span>
            </li>
            <li className="weather__list-item">
              <span className="weather__list-label">PRESSURE</span>
              <span className="weather__list-value">
                {weather?.main.pressure} hPa
              </span>
            </li>
          </ul>
        </div>
      </section>
      <footer className="weather__footer">
        <h2 className="weather__temp">
          {isCelsius ? `${temp?.celsius}°` : `${temp?.farenheit}°`}
        </h2>
        <button className="weather__btn" onClick={handleChangeTemp}>
          {isCelsius ? "Cambiar a F°" : "Cambiar a C°"}
        </button>
      </footer>
    </article>
  );
};

export default WeatherCard;