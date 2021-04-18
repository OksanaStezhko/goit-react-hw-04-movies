import React from 'react';
import ReviewCard from '../ReviewCard';

const ReviewList = ({ movieReviewList }) => {
  return (
    <ul>
      {movieReviewList.map(({ id, ...reviewInfo }) => (
        <ReviewCard key={id} reviewInfo={reviewInfo} />
      ))}
    </ul>
  );
};

export default ReviewList;
