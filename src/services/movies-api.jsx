// Fetch feedback
const API_KEY = 'bb66d39a29feb698f032f2613a49cacc';

// Example
// https://api.themoviedb.org/3/movie/550?api_key=bb66d39a29feb698f032f2613a49cacc

export async function fetchTrending() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
  return await response.json();
}

export async function fetchMovieById(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return await response.json();
}
