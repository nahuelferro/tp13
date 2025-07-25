import React from 'react';
import { useParams } from 'react-router-dom';
import movies from '../data/movies';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <p>Película no encontrada.</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} width="200" />
      <p><strong>Género:</strong> {movie.genre}</p>
      <p><strong>Duración:</strong> {movie.duration}</p>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetail;
