import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import formatingData from '../../servises/formatinData';

const MovieInfo = ({ movie, match }) => {
  const dataUpdate = formatingData(movie);
  const {
    title,
    imgUrl,
    overview,
    score,
    realese_year,
    genresList,
    reviews,
  } = dataUpdate;

  const isReview = reviews?.results.length !== 0 ? true : false;

  return (
    <div className="movie-info">
      <div className="movie-info__box">
        <img className="movie-info__image" src={imgUrl} alt="" />
        <div className="movie-info__text">
          <h2 className="movie-info__title">
            {title + ' (' + realese_year + ')'}
          </h2>
          <p className="movie-info__overview">
            <span className="movie-info__paragraf">Overview: </span>
            {overview}
          </p>
          <p className="movie-info__score ">
            <span className="movie-info__paragraf">User score: </span>
            {score}
          </p>

          <p className="movie-info__genres">
            <span className="movie-info__paragraf">Genres: </span>
            {genresList}
          </p>
        </div>
      </div>
      <ul className="addInfo">
        <li className="addInfo__item" key="cast">
          <Link className="addInfo__link" to={`${match.url}/cast`}>
            Cast
          </Link>
        </li>
        {isReview ? (
          <li className="addInfo__item" key="reviews">
            <Link className="addInfo__link" to={`${match.url}/reviews`}>
              Reviews
            </Link>
          </li>
        ) : (
          <p className="movie-info__message">
            There are no reviews for this movie!
          </p>
        )}
      </ul>
    </div>
  );
};

export default withRouter(MovieInfo);
