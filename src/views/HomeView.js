import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import TrandingMoviesList from '../components/TrandingMoviesList';

import fetchTheMovieDb from '../servises/themovies-api';

class HomeView extends Component {
  state = { movies: null };

  async componentDidMount() {
    const response = await fetchTheMovieDb('trading');
    this.setState({ movies: response.results });
  }
  render() {
    return (
      <>
        <h1>Tranding today</h1>
        {this.state.movies && (
          <ul>
            {this.state.movies.map(movie => (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default HomeView;
