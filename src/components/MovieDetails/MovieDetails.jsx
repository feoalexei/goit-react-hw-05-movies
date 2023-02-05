import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/movies-api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId)
      .then(movie => setMovie(movie))
      .catch(error => console.log(error));
  }, [movieId]);

  console.log(movie);

  // return <div>Now showing Movie Details with id {movie.id} </div>;
};
export default MovieDetails;
