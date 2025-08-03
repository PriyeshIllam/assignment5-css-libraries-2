// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import CitySearch from '../components/CitySearch';

const API_KEY = '4bd7eda4e7f353114375baf342234412'; // Replace with your OpenWeather API key

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [selectedCity, setSelectedCity] = useState<string>('Stockholm');
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    try {
      setError(null);
      setWeatherData(null);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await res.json();
      if (data.cod !== 200) {
        throw new Error(data.message || 'Failed to fetch weather');
      }
      setWeatherData(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    }
  };

  useEffect(() => {
    fetchWeather(selectedCity);
  }, [selectedCity]);

  return (
    <div>
      <CitySearch onCitySelect={(city) => setSelectedCity(city)} />
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
      {weatherData ? (
        <WeatherCard data={weatherData} />
      ) : (
        !error && <p style={{ textAlign: 'center' }}>Loading weather...</p>
      )}
    </div>
  );
};

export { Home };
