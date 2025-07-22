// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import TitleBar from './components/TitleBar';
import NavBar from './components/NavBar';
import './styles/titlebar.scss'; // Ensure global style import (optional if not already imported in TitleBar)

function App() {
  return (
    <Router>
      <TitleBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
