import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import SearchBar from '../components/Searchbar';
import MovieList from '../components/MovieList';
import fetchTheMovieDb from '../servises/themovies-api';
import routes from '../routes';
class MovieView extends Component {
  state = {
    movies: null,
    searchQuery: '',
  };

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      const response = await fetchTheMovieDb(
        'search',
        '',
        this.state.searchQuery,
      );

      this.setState({ movies: response.results });
    }
  }

  handleChangeQuery = query => {
    this.setState({
      searchQuery: query,
    });
    console.log(this.props.match);
    this.props.history.push(`${routes.movies}?query=${query}`);
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleChangeQuery} />
        {this.state.movies && <MovieList movies={this.state.movies} />}
      </>
    );
  }
}

export default MovieView;
