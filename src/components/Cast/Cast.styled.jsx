import styled from 'styled-components';

export const Photo = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: ${p => p.theme.radii.normal};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Name = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Character = styled.p`
  color: ${p => p.theme.colors.lighttext};
`;
