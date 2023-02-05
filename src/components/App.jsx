import { Routes, Route } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from './MovieDetails';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Container>
      </Header>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};
