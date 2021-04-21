import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieCard from '../MovieCard';
import routes from '../../routes';

const MovieList = ({ movies, location }) => {
  return (
    <ul className="movie-list">
      {movies.map(({ id, ...movieInfo }) => (
        <li key={id} className="movie-list__item">
          <Link
            className="movie-list__link"
            to={{
              pathname: `${routes.movies}/${id}`,
              state: {
                from: location,
              },
            }}
          >
            <MovieCard movieInfo={movieInfo} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default withRouter(MovieList);
