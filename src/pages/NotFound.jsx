import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { Box } from 'Box';
import { Link } from 'react-router-dom';
import page_404 from '../images/page_404.png';
import Button from '../components/shared/Button';

const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Image src={page_404} alt="page not found" />
      <Title>Sorry we couldn't find that page</Title>
      <Link to="/">
        <Button>
          <BsArrowLeft />
          Back to Home
        </Button>
      </Link>
    </Box>
  );
};

export const Image = styled.img`
  width: 300px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const Title = styled.p`
  color: ${p => p.theme.colors.lighttext};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export default NotFound;
