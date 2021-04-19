import React from 'react';
import CastCard from '../CastCard';

const CastList = ({ movieCastList }) => {
  return (
    <ul className="cast-list">
      {movieCastList.map(({ id, ...actorInfo }) => (
        <CastCard key={id} actorInfo={actorInfo} />
      ))}
    </ul>
  );
};

export default CastList;
