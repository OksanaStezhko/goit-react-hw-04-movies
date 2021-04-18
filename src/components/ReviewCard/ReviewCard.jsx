import React from 'react';

const ReviewCard = ({ reviewInfo }) => {
  return (
    <li>
      <h2>{reviewInfo.author}</h2>
    </li>
  );
};

export default ReviewCard;
