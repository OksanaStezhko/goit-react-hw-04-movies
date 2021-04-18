import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CastList from '../components/CastList';
import ReviewList from '../components/ReviewList';
import routes from '../routes';
import fetchTheMovieDb from '../servises/themovies-api';

const pathForLargeImg = 'https://image.tmdb.org/t/p/w342/';
class MovieInfo extends Component {
  state = {
    movie: {},
  };

  async componentDidMount() {
    const response = await fetchTheMovieDb(
      'movieInfo',
      this.props.match.params.movieId,
    );
    this.setState({ movie: { ...response } });
  }

  handleClickButton = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
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
      credits,
      reviews,
    } = this.state.movie;

    const genresList = genres
      ? genres.map(genre => genre.name).join(', ')
      : null;

    const isReview = reviews?.results.length !== 0 ? true : false;

    return (
      <>
        <button type="button" onClick={this.handleClickButton}>
          Go back
        </button>
        {idFilm && (
          <div>
            <h2>{title}</h2>
            <img src={pathForLargeImg + poster_path} alt="" />
            <p>{overview}</p>
            <p>{popularity}</p>
            <p>{release_date}</p>
            <p>{genresList}</p>
            <ul>
              <li>
                <Link to={`${this.props.match.url}/cast`}>Cast</Link>
              </li>
              {isReview ? (
                <li>
                  <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
                </li>
              ) : (
                <p>There are no reviews for this movie!</p>
              )}
            </ul>
            <Switch>
              <Route
                path={`${this.props.match.path}/cast`}
                render={props => {
                  return <CastList movieCastList={credits.cast} />;
                }}
              />
              ;
              <Route
                path={`${this.props.match.path}/reviews`}
                render={props => {
                  return <ReviewList movieReviewList={reviews.results} />;
                }}
              />
              ;
            </Switch>
          </div>
        )}
      </>
    );
  }
}
export default MovieInfo;
