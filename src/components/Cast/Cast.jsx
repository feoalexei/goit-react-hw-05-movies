import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/movies-api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then(movie => setCast(movie.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  console.log(cast);

  // if (!cast) return;
  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
            alt={actor.name}
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
