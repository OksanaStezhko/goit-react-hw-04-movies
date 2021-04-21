import React from 'react';
import PropTypes from 'prop-types';

import defaultImg from '../../images/no-photo.jpg';
const pathBaseUrl = 'https://image.tmdb.org/t/p/w342';

const CastCard = ({ actorInfo: { profile_path, name, character } }) => {
  const urlImg = profile_path ? pathBaseUrl + profile_path : defaultImg;
  return (
    <li className="cast-list__item">
      <div className="cast-list__box">
        <img className="cast-list__img" src={urlImg} alt="foto actor" />
      </div>
      <div className="cast-list__box-text">
        <h2 className="cast-list__title">{name}</h2>
        <p className="cast-list__text">character: {character}</p>
      </div>
    </li>
  );
};

CastCard.defaultProps = {
  profile_path: null,
  name: '',
  character: '',
};

CastCard.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};

export default CastCard;
