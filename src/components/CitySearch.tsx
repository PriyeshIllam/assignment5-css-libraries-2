// src/components/CitySearch.tsx
import React, { useState } from 'react';
import { cities } from '../data/cities';
import '../styles/citysearch.scss';


interface Props {
  onCitySelect: (cityName: string) => void;
}

const CitySearch: React.FC<Props> = ({ onCitySelect }) => {
  const [query, setQuery] = useState('');

  const filtered = cities.filter(city =>
    city.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="city-search">
  <div className="search-container">
    <input
      type="text"
      placeholder="Search for a city..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <ul className="city-list">
      {filtered.map((city) => (
        <li key={city.name} onClick={() => onCitySelect(city.name)}>
          {city.name}, {city.country}
        </li>
      ))}
    </ul>
  </div>
</div>

  );
};

export default CitySearch;
