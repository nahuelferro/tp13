import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import movies from '../data/movies';

const Catalog = () => {
  const [movieList] = useState(movies);

  return (
    <div>
      <h2>Catálogo de Películas</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {movieList.map(movie => (
          <div key={movie.id} style={{ border: '1px solid #ccc', padding: '1rem' }}>
            <img src={movie.image} alt={movie.title} width="150" />
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <Link to={`/movie/${movie.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
