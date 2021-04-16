import React, { Component } from 'react';

import TrandingMoviesList from '../components/TrandingMoviesList';

import fetchTrandingMovies from '../servises/themovies-api';

class HomeView extends Component {
  state = { movies: null };

  async componentDidMount() {
    const response = await fetchTrandingMovies();
    console.log('result', response.results);
    this.setState({ movies: response.results });
  }
  render() {
    return (
      <>
        <h1>Tranding today</h1>
        {this.state.movies && (
          <TrandingMoviesList moviesList={this.state.movies} />
        )}
      </>
    );
  }
}

export default HomeView;
