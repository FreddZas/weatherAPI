import { useEffect, useState } from "react";
import "./App.css";
import "./index.css"
import axios from "axios"
import getApikey from "./apiKey/getApiKey";
import WeatherCard from "./components/WeatherCard";
import Loading from "./components/Loader";

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,

        lon: pos.coords.longitude,
      };
      setCoords(obj);
    };

    const error = () => {
      setError("La ubicacion no esta disponible");
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  useEffect(() => {
    if (coords) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${getApikey()}`

      axios
        .get(url)
        .then((resp) => {
          setWeather(resp.data);
          const objTemp = {
            celsius: +(resp.data.main.temp - 273.15).toFixed(1),
            farenheit: +(((resp.data.main.temp - 273.15) * 9) / 5 + 32).toFixed(1)
          };
          setTemp(objTemp);
        })
        .catch((err) => console.log(err));
    }
  }, [coords]);

  return (
    <div className="app">
      
      {
      error 
        ? 
        (
          <div className="error">{error} </div>
        ) 
        : 
        weather 
        ? 
        (
          <WeatherCard weather={weather} temp={temp} />
        ) 
        : 
        (
          <Loading />
        )
      }
    </div>
  );
}

export default App;