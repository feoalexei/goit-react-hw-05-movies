import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'services/movies-api';

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
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
