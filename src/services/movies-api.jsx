import axios from 'axios';

export const movieService = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'bb66d39a29feb698f032f2613a49cacc',
  },
});

export const fetchTrending = async () => {
  const { data } = await movieService.get('/trending/all/day');
  return data;
};

export const fetchMovieById = async movieId => {
  const { data } = await movieService.get(`/movie/${movieId}`);
  return data;
};

export const fetchMovieCredits = async movieId => {
  const { data } = await movieService.get(`/movie/${movieId}/credits`);
  return data;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await movieService.get(`/movie/${movieId}/reviews`);
  return data;
};

export const fetchMovieByName = async query => {
  const { data } = await movieService.get(`/search/movie?query=${query}`);
  return await data;
};
