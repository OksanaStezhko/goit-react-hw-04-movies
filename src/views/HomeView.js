import React, { Component } from 'react';

import MovieList from '../components/MovieList';

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
        {this.state.movies && <MovieList movies={this.state.movies} />}
      </>
    );
  }
}

export default HomeView;
