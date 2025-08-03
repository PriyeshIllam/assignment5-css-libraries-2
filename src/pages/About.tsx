import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', padding: '1rem' }}>
      <h1>About This Weather App</h1>
      <p>
        This application provides real-time weather updates using the OpenWeather API.
        Users can search for cities around the world and view current weather conditions,
        including temperature, humidity, wind speed, and more.
      </p>
      <p>
        The app is built with <strong>React</strong> and styled using <strong>Sass</strong>,
        demonstrating usage of <code>useState</code>, <code>useEffect</code>, and <code>localStorage</code> 
        for state and persistence.
      </p>
      <p>
        Designed to be responsive and lightweight, the app aims to provide a simple and elegant
        experience on both desktop and mobile devices.
      </p>
    </div>
  );
};

export {About};
