import { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/movies-api';
import { Box } from 'Box';
import { Figure, Image, Description } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId)
      .then(movie => setMovie(movie))
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movie) return;

  const {
    poster_path,
    title,
    name,
    overview,
    genres,
    vote_average,
    release_date,
  } = movie;

  return (
    <>
      <Box as="div" display="flex">
        <Figure>
          <Image
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title || name}
          />
        </Figure>
        <Description>
          <h2>
            {title || name} ({release_date.slice(0, 4)})
          </h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <div>
            <h3>Overview:</h3>
            <p>{overview}</p>
          </div>
          <div>
            <h3>Genres:</h3>
            <p>{genres.map(item => item.name).join(' / ')}</p>
          </div>
        </Description>
      </Box>
      <Box>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </Box>
      <Outlet />
    </>
  );
};

export default MovieDetails;
