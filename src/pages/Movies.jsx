import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'services/movies-api';
import SearchBox from 'components/SearchBox';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') ?? '';

  useEffect(() => {
    if (name !== '') {
      fetchMovieByName(name)
        .then(data => setMovies(data.results))
        .catch(error => console.log(error));
    }
  }, [name]);

  const handleSubmit = query => {
    if (!query) return;
    setSearchParams({ name: query });
  };

  return (
    <main>
      <SearchBox onSearch={handleSubmit} />
      <MoviesList movies={movies} />
    </main>
  );
};
export default Movies;
