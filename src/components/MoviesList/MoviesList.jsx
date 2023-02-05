import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'services/movies-api';
import { Box } from 'Box';
import { FaStar } from 'react-icons/fa';

const MoviesList = () => {
  const [trendList, setTrendList] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then(movies => setTrendList(movies.results))
      .catch(error => console.log(error));
  }, []);

  console.log(trendList);

  const generateRating = rate => {
    return Array(Math.floor(rate)).fill('*');
  };

  return (
    <>
      <Box
        as="ul"
        display="grid"
        gridGap={5}
        gridTemplateColumns="repeat(auto-fit, minmax(200px, auto))"
      >
        {trendList.map(movie => (
          <li key={movie.id}>
            <div>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title || movie.name}
                />
                {movie.title || movie.name}
              </Link>{' '}
              {movie.release_date && (
                <span>({movie?.release_date.slice(0, 4)})</span>
              )}
              <Box as="ul" display="flex">
                {generateRating(movie.vote_average).map(star => (
                  <li>
                    <FaStar style={{ fill: 'darkgoldenrod' }} />
                  </li>
                ))}{' '}
                ({movie.vote_average.toFixed(1)}/10)
              </Box>
            </div>
          </li>
        ))}
      </Box>
    </>
  );
};

export default MoviesList;
