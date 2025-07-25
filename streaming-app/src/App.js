import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import MovieDetail from './components/MovieDetail';
import './App.css';


const App = () => (
  <Router>
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#FD6E2D' }}>
      <Link to="/">Inicio</Link>
      <Link to="/catalog">Catálogo</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  </Router>
);

export default App;
