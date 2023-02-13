import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/movies-api';
import { Box } from 'Box';
import noPhoto from '../../images/no_image.jpg';
import { Photo, Name, Character } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const { cast } = await fetchMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    getMovieCredits();
  }, [movieId]);

  if (!cast) return;

  return (
    <Box
      as="ul"
      display="grid"
      gridGap={5}
      gridTemplateColumns="repeat(auto-fit, minmax(150px, auto))"
      pt={5}
      borderTop="1px solid lightgrey"
    >
      {cast.length > 0
        ? cast.map(actor => (
            <li key={actor.id}>
              <Photo
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : noPhoto
                }
                alt={actor.name}
              />
              <Name>{actor.name}</Name>
              <Character>Character: {actor.character}</Character>
            </li>
          ))
        : 'There is no information about the actors'}
    </Box>
  );
};

export default Cast;
