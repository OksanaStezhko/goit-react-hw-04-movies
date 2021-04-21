import React from 'react';
import PropTypes from 'prop-types';

import ReviewCard from '../ReviewCard';

const ReviewList = ({ movieReviewList }) => {
  return (
    <ul className="review-list">
      {movieReviewList.map(({ id, ...reviewInfo }) => (
        <ReviewCard key={id} reviewInfo={reviewInfo} />
      ))}
    </ul>
  );
};

ReviewList.propTypes = {
  movieReviewList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default ReviewList;
