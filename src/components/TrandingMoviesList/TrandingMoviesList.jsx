import React from 'react';
import { Link } from 'react-router-dom';
// import MovieCard from '../MovieCard';

const TrandingMovies = ({ moviesList }) => {
  return (
    <ul>
      {moviesList.map(movie => (
        <li>
          <Link to={`movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TrandingMovies;
