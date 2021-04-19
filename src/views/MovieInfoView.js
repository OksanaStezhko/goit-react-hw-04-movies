import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from '../components/Container';
import MovieInfo from '../components/MovieInfo';

import routes from '../routes';
import fetchTheMovieDb from '../servises/themovies-api';

const CastList = lazy(() =>
  import('../components/CastList' /* webpackChunkName: "cast" */),
);
const ReviewList = lazy(() =>
  import('../components/ReviewList' /* webpackChunkName: "reviews" */),
);

class MovieInfoView extends Component {
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

  handleClickButton = event => {
    event.preventDefault();
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(routes.home);
  };

  render() {
    const { id: idFilm, credits, reviews } = this.state.movie;

    return (
      <main>
        {idFilm && (
          <Container>
            <button
              type="button"
              className="button-back"
              onClick={this.handleClickButton}
            >
              Go back
            </button>
            <MovieInfo movie={this.state.movie} />
            <Suspense fallback={<></>}>
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
            </Suspense>
          </Container>
        )}
      </main>
    );
  }
}
export default MovieInfoView;
