const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

/*

import { useEffect, useState } from "react";
import axios from "axios";
import search_icon from "./assets/search.png";  // Ensure paths are correct
import clear_icon from "./assets/clear.png";
import humidity_icon from "./assets/humidity.png";
import wind_icon from "./assets/wind.png";

function Weather() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("London");
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    async function Search(cityName) {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
            const response = await axios.get(url);
            setWeather(response.data);
        } catch (error) {
            console.error("Error fetching weather data", error);
        }
    }

    useEffect(() => {
        Search(city);
    }, []);

    return (
        <div className="bgImg">
            <div className="weather">
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <img 
                        src={search_icon} 
                        onClick={() => Search(city)} 
                        alt="Search"
                        style={{ cursor: "pointer" }} 
                    />
                </div>

                {weather ? (
                    <>
                        <img src={clear_icon} alt="Weather Icon" />
                        <p className="temp">{weather.main.temp}°C</p>
                        <p className="locate">{weather.name}</p>

                        <div className="weather-data">
                            <div className="col">
                                <img src={humidity_icon} alt="Humidity" />
                                <div>
                                    <p>{weather.main.humidity}%</p>
                                    <span>Humidity</span>
                                </div>
                            </div>
                            <div className="col">
                                <img src={wind_icon} alt="Wind Speed" />
                                <div>
                                    <p>{weather.wind.speed} km/h</p>
                                    <span>Wind Speed</span>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Loading weather...</p>
                )}
            </div>
        </div>
    );
}

export default Weather;
*/