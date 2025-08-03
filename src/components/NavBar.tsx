// src/components/NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

const NavBar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
