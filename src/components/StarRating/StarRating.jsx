import PropTypes from 'prop-types';
import { Box } from 'Box';
import { FaStar, FaRegStar } from 'react-icons/fa';

// Generates movie rating in a form of stars according to the
const StarRating = ({ rate }) => {
  const generateStars = rate => {
    return Array(Math.floor(rate)).fill('*');
  };

  const generateBlankStars = rate => {
    return Array(Math.ceil(10 - rate)).fill('-');
  };

  return (
    <Box as="div" display="flex">
      <Box as="ul" display="flex">
        {generateStars(rate).map((_, i) => (
          <li key={i}>
            <FaStar
              style={{
                fill: 'darkgoldenrod',
                fontSize: '14px',
              }}
            />
          </li>
        ))}
      </Box>
      <Box as="ul" display="flex" mr={3}>
        {generateBlankStars(rate).map((_, i) => (
          <li key={i}>
            <FaRegStar
              style={{
                fill: 'darkgoldenrod',
                fontSize: '14px',
              }}
            />
          </li>
        ))}
      </Box>
      <p>({rate.toFixed(1)}/10)</p>
    </Box>
  );
};
export default StarRating;

StarRating.propTypes = {
  rate: PropTypes.number.isRequired,
};
