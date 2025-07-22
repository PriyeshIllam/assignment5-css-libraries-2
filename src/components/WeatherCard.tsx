// src/components/WeatherCard.tsx
import React from 'react';
import '../styles/weather.scss';

interface WeatherData {
  name: string;
  sys: { country: string };
  weather: { main: string; description: string; icon: string }[];
  main: { temp: number; feels_like: number; humidity: number; pressure: number };
  wind: { speed: number };
  dt: number;
  timezone: number;
}

interface Props {
  data: WeatherData;
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  const { name, sys, weather, main, wind, dt, timezone } = data;

  // Calculate local time
  const localTime = new Date((dt + timezone) * 1000);
  const formattedTime = localTime.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <div className="weather-card">
      <h2>{name}, {sys.country}</h2>
      <p className="local-time">Local Time: {formattedTime}</p>

      <div className="weather-info">
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
        <div>
          <p className="temp">{(main.temp - 273.15).toFixed(1)}°C</p>
          <p className="desc">{weather[0].main} – {weather[0].description}</p>
        </div>
      </div>

      <div className="extra-info">
        <p><strong>Feels like:</strong> {(main.feels_like - 273.15).toFixed(1)}°C</p>
        <p><strong>Humidity:</strong> {main.humidity}%</p>
        <p><strong>Pressure:</strong> {main.pressure} hPa</p>
        <p><strong>Wind speed:</strong> {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
