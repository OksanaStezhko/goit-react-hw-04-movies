import axios from 'axios';
let requestString;
const keyApi = '0e6eebd27dfd68a7c4ec96f04756cc6c';

const fetchTheMovieDb = async (typeQuery, movieId, query) => {
  const requestStringMovieDetals = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}&append_to_response=reviews,credits`;
  const requestStringTrading = `https://api.themoviedb.org/3/trending/movie/week?api_key=${keyApi}&language='en-US'`;
  const requestStringSearch = `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&page=1&query=${query}&language='en-US'`;

  switch (typeQuery) {
    case 'trading':
      requestString = requestStringTrading;
      break;
    case 'movieInfo':
      requestString = requestStringMovieDetals;
      break;
    case 'search':
      requestString = requestStringSearch;
      break;

    default:
      console.log('Не выбран тип запроса');
  }

  const fetchResult = await axios
    .get(requestString)
    .then(response => response.data)
    .catch(console.error);
  return fetchResult;
};

export default fetchTheMovieDb;
