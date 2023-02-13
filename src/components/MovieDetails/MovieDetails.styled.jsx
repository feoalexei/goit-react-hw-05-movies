import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Figure = styled.div`
  min-width: 30%;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: ${p => p.theme.radii.normal};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: ${p => p.theme.space[5]}px;

  h3 {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const ExtraInfo = styled.div`
  display: flex;
  gap: 15px;
  color: ${p => p.theme.colors.text};
  margin-bottom: ${p => p.theme.space[4]}px;

  li:hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const BackLink = styled(Link)`
  display: block;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
