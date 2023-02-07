const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'bb66d39a29feb698f032f2613a49cacc';

export async function fetchTrending() {
  const response = await fetch(
    `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`
  );
  return await response.json();
}

export async function fetchMovieById(movieId) {
  const response = await fetch(
    `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return await response.json();
}

export async function fetchMovieCredits(movieId) {
  const response = await fetch(
    `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return await response.json();
}

export async function fetchMovieReviews(movieId) {
  const response = await fetch(
    `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return await response.json();
}

export async function fetchMovieByName(query) {
  const response = await fetch(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return await response.json();
}
