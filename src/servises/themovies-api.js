import axios from 'axios';
let requestString;
const keyApi = '0e6eebd27dfd68a7c4ec96f04756cc6c';

const fetchTheMovieDb = async (typeQuery, movieId, query) => {
  const requestStringMovieDetals = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyApi}&language=en-US`;
  const requestStringTrading = `https://api.themoviedb.org/3/trending/movie/week?api_key=${keyApi}&language='en-US'`;
  const requestStringSearch = `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&page=1&query=${query}&language='en-US'`;
  const requestStringActors = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${keyApi}>&language=en-US`;
  const requestStringReviews = `https://api.themoviedb.org/3/movie${movieId}/reviews?api_key=${keyApi}&language=en-US&page=1`;

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
    case 'actors':
      requestString = requestStringActors;
      break;
    case 'reviews':
      requestString = requestStringReviews;
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
