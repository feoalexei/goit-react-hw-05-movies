import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './Layout.styled';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
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

      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};
export default SharedLayout;
