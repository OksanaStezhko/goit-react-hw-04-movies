import React, { Component } from 'react';
import Container from '../components/Container';
import SearchBar from '../components/Searchbar';
import MovieList from '../components/MovieList';
import fetchTheMovieDb from '../servises/themovies-api';
// import routes from '../routes'; //
//import queryString from 'query-string'; вариант с библиотекой

class MovieView extends Component {
  state = {
    movies: null,
    searchQuery: '',
  };

  componentDidMount() {
    if (this.props.location.search !== '') {
      let paramsSearch = new URLSearchParams(this.props.location.search).get(
        'query',
      );
      // let paramsSearch = queryString.parse(this.props.location.search).query; //вариант с библиотекой
      this.setState({ searchQuery: paramsSearch });
    }
  }

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
    const { history, location } = this.props;
    this.setState({
      searchQuery: query,
    });
    history.push({
      ...location,
      search: `query=${query}`,
    });
    // history.push(`${routes.movies}?query=${query}`);//тоже рабочий вариант
  };

  render() {
    return (
      <main>
        <Container>
          <SearchBar onSubmit={this.handleChangeQuery} />
          {this.state.movies && <MovieList movies={this.state.movies} />}
        </Container>
      </main>
    );
  }
}

export default MovieView;
