import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/movies-api';
import MoviesList from 'components/MoviesList/MoviesList';

const TrendList = () => {
  const [trendList, setTrendList] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const { results } = await fetchTrending();
        setTrendList(results);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    getTrending();
  }, []);

  return (
    <>
      <MoviesList movies={trendList} />
    </>
  );
};

export default TrendList;
