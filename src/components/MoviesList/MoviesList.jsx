import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'services/movies-api';
import { Box } from 'Box';

const MoviesList = () => {
  const [trendList, setTrendList] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then(movies => setTrendList(movies.results))
      .catch(error => console.log(error));
  }, []);

  console.log(trendList);

  return (
    <>
      <ul>
        {trendList.map(movie => (
          <li key={movie.id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title || movie.name}
              />
              <Link to={`/movies/${movie.id}`}>
                {movie.title || movie.name}
              </Link>
              {movie.release_date && (
                <span>({movie?.release_date.slice(0, 4)})</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
