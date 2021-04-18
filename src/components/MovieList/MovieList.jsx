import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MovieCard from '../MovieCard';
import routes from '../../routes';

const MovieList = ({ movies, location, match }) => {
  console.log(match.url);
  return (
    <ul>
      {movies.map(({ id, ...movieInfo }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `${routes.movieInfo}`,
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

export default withRouter(MovieList);
