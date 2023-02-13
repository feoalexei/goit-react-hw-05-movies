import { Link, useLocation } from 'react-router-dom';
import { Box } from 'Box';
import PropTypes from 'prop-types';
import StarRating from 'components/StarRating';
import { Image, Title, Year } from './MoviesList.styled';
import noPoster from '../../images/no_poster.jpg';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <Box
        as="ul"
        display="grid"
        gridGap={5}
        gridTemplateColumns="repeat(auto-fit, minmax(200px, auto))"
        mt={5}
      >
        {movies.map(movie => (
          <li key={movie.id}>
            <div>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <Image
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                      : noPoster
                  }
                  alt={movie.title || movie.name}
                />

                <Title>{movie.title || movie.name}</Title>
                {movie.release_date && (
                  <Year>({movie?.release_date.slice(0, 4)})</Year>
                )}
              </Link>{' '}
              <StarRating rate={movie.vote_average} />
            </div>
          </li>
        ))}
      </Box>
    </>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array,
};
