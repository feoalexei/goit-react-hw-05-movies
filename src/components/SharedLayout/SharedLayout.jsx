import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './Layout.styled';

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

      <Suspense fallback={<div>Loading...</div>}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};
export default SharedLayout;
