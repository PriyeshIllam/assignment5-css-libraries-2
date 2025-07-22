// src/components/TitleBar.tsx
import React from 'react';
import logo from '../assets/logo.png';
import '../styles/titlebar.scss';

const TitleBar: React.FC = () => {
  return (
    <header className="title-bar">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="title">Weather Today</h1>
    </header>
  );
};

export default TitleBar;
