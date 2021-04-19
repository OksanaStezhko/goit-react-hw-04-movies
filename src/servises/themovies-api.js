import axios from 'axios';

const keyApi = '0e6eebd27dfd68a7c4ec96f04756cc6c';

const requestMovieDetals = movieId => {
  const requestString = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}&append_to_response=reviews,credits`;
  return request(requestString);
};
const requestTradingMovie = () => {
  const requestString = `https://api.themoviedb.org/3/trending/movie/week?api_key=${keyApi}&language='en-US'`;
  return request(requestString);
};
const requestSearchMovie = query => {
  const requestString = `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&page=1&query=${query}&language='en-US'`;
  return request(requestString);
};

const request = async requestString => {
  const fetchResult = await axios
    .get(requestString)
    .then(response => response.data)
    .catch(console.error);
  return fetchResult;
};

const fetchTheMovieDb = {
  requestMovieDetals,
  requestTradingMovie,
  requestSearchMovie,
};
export default fetchTheMovieDb;
