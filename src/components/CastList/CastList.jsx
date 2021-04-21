import React from 'react';
import CastCard from '../CastCard';
import PropTypes from 'prop-types';

const CastList = ({ movieCastList }) => {
  return (
    <ul className="cast-list">
      {movieCastList.map(({ id, ...actorInfo }) => (
        <CastCard key={id} actorInfo={actorInfo} />
      ))}
    </ul>
  );
};

CastList.propTypes = {
  movieCastList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CastList;
