import styled from 'styled-components';

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: ${p => p.theme.radii.normal};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Title = styled.h3`
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const Year = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
