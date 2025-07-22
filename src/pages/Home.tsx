// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import WeatherCard from '../components/WeatherCard';

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    // For now, we use static data — you can replace this with a fetch() call later
    const mockData = {
      coord: { lon: 18.0649, lat: 59.3326 },
      weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" }],
      base: "stations",
      main: {
        temp: 295.64,
        feels_like: 295.75,
        temp_min: 295.43,
        temp_max: 296.07,
        pressure: 1007,
        humidity: 69,
        sea_level: 1007,
        grnd_level: 1003,
      },
      visibility: 10000,
      wind: { speed: 1.34, deg: 45, gust: 4.02 },
      clouds: { all: 33 },
      dt: 1753203492,
      sys: { type: 2, id: 2012100, country: "SE", sunrise: 1753150267, sunset: 1753213014 },
      timezone: 7200,
      id: 2673730,
      name: "Stockholm",
      cod: 200,
    };

    setWeatherData(mockData);
  }, []);

  return (
    <div>
      {weatherData ? <WeatherCard data={weatherData} /> : <p>Loading weather...</p>}
    </div>
  );
};

export { Home };
