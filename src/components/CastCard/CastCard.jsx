import React from 'react';
import defaultImg from '../../images/no-photo.jpg';
const pathBaseUrl = 'https://image.tmdb.org/t/p/w342';

const CastCard = ({ actorInfo }) => {
  const urlImg = actorInfo.profile_path
    ? pathBaseUrl + actorInfo.profile_path
    : defaultImg;
  return (
    <li className="cast-list__item">
      <div className="cast-list__box">
        <img className="cast-list__img" src={urlImg} alt="foto actor" />
      </div>
      <div className="cast-list__box-text">
        <h2 className="cast-list__title">{actorInfo.name}</h2>
        <p className="cast-list__text">character: {actorInfo.character}</p>
      </div>
    </li>
  );
};

export default CastCard;
