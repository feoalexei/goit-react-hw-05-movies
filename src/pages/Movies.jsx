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
      const getMovieByName = async () => {
        try {
          const { results } = await fetchMovieByName(name);
          setMovies(results);
        } catch (error) {
          throw new Error(error.message);
        }
      };
      getMovieByName();
    }
  }, [name]);

  const handleSubmit = query => {
    if (!query) return;
    setSearchParams({ name: query });
  };

  return (
    <main>
      <SearchBox onSearch={handleSubmit} />
      {movies.length === 0 && name !== '' ? (
        <p>Sorry, there are no results on your query</p>
      ) : (
        <MoviesList movies={movies} />
      )}
    </main>
  );
};
export default Movies;
