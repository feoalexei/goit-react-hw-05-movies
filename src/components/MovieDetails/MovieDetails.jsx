import { useState, useEffect, useRef, Suspense } from 'react';
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
import Loader from '../Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const scrollRef = useRef(null);

  useEffect(() => {
    fetchMovieById(movieId)
      .then(movie => setMovie(movie))
      .catch(error => console.log(error));
  }, [movieId]);

  const handleClickToScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    console.log(scrollRef);
  };

  // const scrollDown = () => {
  //   window.scrollTo({
  //     top: scrollRef.current.offsetTop,
  //     behavior: 'smooth',
  //   });
  // };

  if (!movie) return;

  const {
    poster_path: poster,
    title,
    name,
    overview,
    genres,
    vote_average: rate,
    release_date: date,
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
            src={`https://image.tmdb.org/t/p/w300${poster}`}
            alt={title || name}
          />
        </Figure>
        <Description>
          <h2>
            {title || name} ({date.slice(0, 4)})
          </h2>
          {rate && <StarRating rate={rate} />}
          {rate && <p>User score: {Math.round(rate * 10)}%</p>}
          {overview && (
            <div>
              <h3>Overview:</h3>
              <p>{overview}</p>
            </div>
          )}
          {genres?.length > 0 && (
            <div>
              <h3>Genres:</h3>
              <p>{genres.map(item => item.name).join(' / ')}</p>
            </div>
          )}
          <ExtraInfo>
            <InfoLink
              ref={scrollRef}
              onClick={handleClickToScroll}
              to="cast"
              state={{ from: location.state?.from ?? '/movies' }}
            >
              Cast
            </InfoLink>
            <InfoLink
              ref={scrollRef}
              onClick={handleClickToScroll}
              to="reviews"
              state={{ from: location.state?.from ?? '/movies' }}
            >
              Reviews
            </InfoLink>
          </ExtraInfo>
        </Description>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
