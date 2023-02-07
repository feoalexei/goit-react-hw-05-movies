import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/movies-api';
import MoviesList from 'components/MoviesList/MoviesList';

const TrendList = () => {
  const [trendList, setTrendList] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then(movies => setTrendList(movies.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <MoviesList movies={trendList} />
    </>
  );
};

export default TrendList;
