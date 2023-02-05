import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: 2px solid lightgrey;

  nav {
    display: flex;
    gap: 20px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: tomato;
  }
`;
