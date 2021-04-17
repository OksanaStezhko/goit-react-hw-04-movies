import React, { Component } from 'react';
import fetchTheMovieDb from '../servises/themovies-api';
const pathForLargeImg = 'https://image.tmdb.org/t/p/w342/';
class MovieInfo extends Component {
  state = {
    id: null,
    title: null,
    poster_path: null,
    popularity: null,
    genres: null,
    release_date: null,
  };

  async componentDidMount() {
    const response = await fetchTheMovieDb(
      'movieInfo',
      this.props.match.params.movieId,
    );
    this.setState({ ...response });
  }
  handleClickButton = () => {
    const { location, history } = this.props;

    //     if (location.state && location.state.from) {
    //       return history.push(location.state.from);
    //  }

    // history.push(routes.books);
  };
  render() {
    const {
      id: idFilm,
      title,
      poster_path,
      overview,
      popularity,
      release_date,
      genres,
    } = this.state;

    const genresList = genres
      ? genres.map(genre => genre.name).join(', ')
      : null;

    return (
      idFilm && (
        <>
          <button type="button" onClick={this.handleClickButton}>
            Go back
          </button>
          <img src={pathForLargeImg + poster_path} alt="" />
          <h2>{title}</h2>
          <p>{overview}</p>
          <p>{genresList}</p>
          <p>{popularity}</p>
          <p>{release_date}</p>
        </>
      )
    );
  }
}
export default MovieInfo;
