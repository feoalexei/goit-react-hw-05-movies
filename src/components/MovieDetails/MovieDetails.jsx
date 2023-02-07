import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { fetchMovieById } from 'services/movies-api';
import { Box } from 'Box';
import {
  Figure,
  Image,
  Description,
  ExtraInfo,
  InfoLink,
  BackLink,
} from './MovieDetails.styled';
import StarRating from 'components/StarRating';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

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
      <BackLink to={backLinkHref}>
        <BsArrowLeft />
        Go back
      </BackLink>
      <Box as="div" display="flex" mb={5}>
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
          <StarRating rate={vote_average} />
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <div>
            <h3>Overview:</h3>
            <p>{overview}</p>
          </div>
          <div>
            <h3>Genres:</h3>
            <p>{genres.map(item => item.name).join(' / ')}</p>
          </div>
          <ExtraInfo>
            <InfoLink
              to="cast"
              state={{ from: location.state?.from ?? '/movies' }}
            >
              Cast
            </InfoLink>
            <InfoLink
              to="reviews"
              state={{ from: location.state?.from ?? '/movies' }}
            >
              Reviews
            </InfoLink>
          </ExtraInfo>
        </Description>
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
