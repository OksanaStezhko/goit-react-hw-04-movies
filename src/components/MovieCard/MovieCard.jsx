import React from 'react';
// import { Link } from 'react-router-dom';
// import routes from '../../routes';
import formatingData from '../../servises/formatinData';

const MovieCard = ({ movieInfo }) => {
  const movieInfoUpdate = formatingData(movieInfo);
  return (
    <div>
      <div>
        <img src={movieInfoUpdate.imgUrl} alt="movie poster" />
      </div>
      <p>{movieInfoUpdate.title}</p>
      <p>{movieInfoUpdate.realese_year}</p>
    </div>
  );
};

export default MovieCard;
