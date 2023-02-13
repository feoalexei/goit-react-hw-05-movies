import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Outlet, useLocation, NavLink } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { fetchMovieById } from 'services/movies-api';
import { Box } from 'Box';
import {
  Figure,
  Image,
  Description,
  ExtraInfo,
  BackLink,
} from './MovieDetails.styled';
import StarRating from 'components/StarRating';
import Loader from '../Loader/Loader';
import Button from 'components/shared/Button';
import noPoster from '../../images/no_poster.jpg';

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
        <Button>
          <BsArrowLeft />
          Go Back
        </Button>
      </BackLink>
      <Box as="div" display="flex" mb={5}>
        <Figure>
          <Image
            s
            src={poster ? `https://image.tmdb.org/t/p/w300${poster}` : noPoster}
            alt={title || name}
          />
        </Figure>
        <Description>
          <h2>
            {title || name} ({date.slice(0, 4)})
          </h2>
          {rate > 0 && <StarRating rate={rate} />}
          {rate > 0 && <p>User score: {Math.round(rate * 10)}%</p>}
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
            <NavLink
              ref={scrollRef}
              onClick={handleClickToScroll}
              to="cast"
              state={{ from: location.state?.from ?? '/movies' }}
            >
              <Button>Cast</Button>
            </NavLink>
            <NavLink
              ref={scrollRef}
              onClick={handleClickToScroll}
              to="reviews"
              state={{ from: location.state?.from ?? '/movies' }}
            >
              <Button>Reviews</Button>
            </NavLink>
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
