import axios from 'axios';

const keyApi = '0e6eebd27dfd68a7c4ec96f04756cc6c';

const fetchTrandingMovies = async () => {
  const fetchString = `https://api.themoviedb.org/3/trending/movie/week?api_key=${keyApi}&page=1&language='en-US'`;
  const fetchResult = await axios
    .get(fetchString)
    .then(response => response.data)
    .catch(console.error);
  return fetchResult;
};

export default fetchTrandingMovies;
