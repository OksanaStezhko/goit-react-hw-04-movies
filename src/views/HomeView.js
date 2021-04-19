import React, { Component } from 'react';

import Container from '../components/Container';
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
      <main>
        <Container>
          <h1 className="view-title">Tranding today</h1>
          {this.state.movies && <MovieList movies={this.state.movies} />}
        </Container>
      </main>
    );
  }
}

export default HomeView;
