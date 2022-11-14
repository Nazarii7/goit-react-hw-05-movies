import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const KEY = '438b209afcbf786d00b41cef323b2ca7';

export const fetchTrendingMovie = () => {
  return axios.get(`3/trending/movie/day?api_key=${KEY}`).then(res => {
    return res.data.results;
  });
};

export const fetchSearchMovies = id => {
  return axios.get(`3/movie/${id}?api_key=${KEY}`).then(res => {
    return res.data;
  });
};

export const fetchMovieCast = id => {
  return axios.get(`3/movie/${id}/credits?api_key=${KEY}`).then(res => {
    return res.data.cast;
  });
};

export const fetchMovieReviews = id => {
  return axios.get(`3/movie/${id}/reviews?api_key=${KEY}`).then(res => {
    return res.data.results;
  });
};

export const fetchMovies = query => {
  return axios.get(`3/search/movie?api_key=${KEY}&query=${query}`).then(res => {
    return res.data.results;
  });
};
