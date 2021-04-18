import React from 'react';
import CastCard from '../CastCard';

const CastList = ({ movieCastList }) => {
  return (
    <ul>
      {movieCastList.map(({ id, ...actorInfo }) => (
        <CastCard key={id} actorInfo={actorInfo} />
      ))}
    </ul>
  );
};

export default CastList;
