import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/movies-api';
import { FaUserCircle } from 'react-icons/fa';
import { Box } from 'Box';
import { Review, Author, Date } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => setReviews(data.results))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <Box as="ul" pt={5} borderTop="1px solid lightgrey">
      {reviews.length > 0
        ? reviews.map(({ id, author, content, created_at }) => (
            <Review key={id}>
              <Box display="flex" alignItems="center" mb={4}>
                <FaUserCircle
                  style={{
                    fill: 'lightblue',
                    fontSize: '50px',
                  }}
                />
                <Box display="flex" flexDirection="column" ml={4}>
                  <Author>{author}</Author>
                  <Date>{created_at.slice(0, 10)}</Date>
                </Box>
              </Box>

              <p>{content}</p>
            </Review>
          ))
        : 'There are no reviews on this movie yet'}
    </Box>
  );
};
export default Reviews;
