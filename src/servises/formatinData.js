const pathForLargeImg = 'https://image.tmdb.org/t/p/w342';
const formatingData = ({
  poster_path,
  release_date,
  genres,
  vote_average,
  ...otherInfo
}) => {
  return {
    ...otherInfo,
    imgUrl: poster_path ? pathForLargeImg + poster_path : false,
    realese_year: release_date ? release_date.slice(0, 4) : 'N/A',
    genres: genres ? genres.map(elem => elem.name).join(', ') : '',
    score: vote_average * 10 + '%',
  };
};

export default formatingData;
