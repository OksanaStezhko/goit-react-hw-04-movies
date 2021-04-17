import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../components/Searchbar';
import fetchTheMovieDb from '../servises/themovies-api';

class MovieView extends Component {
  state = {
    movies: null,
    searchQuery: '',
    error: null,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      console.log('ищу:', this.state.searchQuery);
      const response = await fetchTheMovieDb(
        'search',
        '',
        this.state.searchQuery,
      );
      console.log('нашла:', response);
      this.setState({ movies: response.results });
    }
  }

  handleChangeQuery = query => {
    this.setState({
      searchQuery: query,
      movies: [],
      error: null,
      isLoading: false,
    });
  };

  render() {
    console.log();
    return (
      <>
        <SearchBar onSubmit={this.handleChangeQuery} />

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

export default MovieView;
