import React from 'react';
import PropTypes from 'prop-types';

import defaultImg from '../../images/no-photo.jpg';
const pathBaseUrl = 'https://image.tmdb.org/t/p/w342';

const ReviewCard = ({ reviewInfo: { author_details, author, content } }) => {
  const avatar = author_details.avatar_path;

  const urlImg = !avatar
    ? defaultImg
    : avatar.slice(1, 6) === 'https'
    ? avatar.slice(1)
    : pathBaseUrl + avatar;

  return (
    <li className="review-list__item">
      <div className="review-list__box">
        <img className="review-list__img" src={urlImg} alt="author avatar" />
      </div>
      <div className="review-list__box-text">
        <h2 className="review-list__title">{author}</h2>
        <p className="review-list__context">{content}</p>
      </div>
    </li>
  );
};

ReviewCard.defaultProps = {
  author: '',
  content: '',
  avatar_path: '',
};

ReviewCard.propTypes = {
  author_detail: PropTypes.objectOf(
    PropTypes.shape({
      avatar_path: PropTypes.string,
    }),
  ),
};

export default ReviewCard;
