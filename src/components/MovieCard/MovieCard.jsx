import React from 'react';
import formatingData from '../../servises/formatinData';

const MovieCard = ({ movieInfo }) => {
  const movieInfoUpdate = formatingData(movieInfo);

  return (
    <div className="movie">
      <div className="movie__thumb">
        <img
          className="movie__img"
          src={movieInfoUpdate.imgUrl}
          alt="movie poster"
        />
      </div>
      <p className="movie__text">
        {movieInfoUpdate.title + ', ' + movieInfoUpdate.realese_year}
      </p>
    </div>
  );
};

export default MovieCard;
