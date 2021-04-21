import React from 'react';
import PropTypes from 'prop-types';

import formatingData from '../../servises/formatinData';

const MovieCard = ({ movieInfo }) => {
  const { imgUrl, title, realese_year } = formatingData(movieInfo);

  return (
    <div className="movie">
      <div className="movie__thumb">
        <img className="movie__img" src={imgUrl} alt="movie poster" />
      </div>
      <p className="movie__text">{`${title}, ${realese_year}`}</p>
    </div>
  );
};

MovieCard.propTypes = {
  movieInfo: PropTypes.object.isRequired,
};

export default MovieCard;
