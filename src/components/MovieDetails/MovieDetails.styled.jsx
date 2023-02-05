import styled from 'styled-components';

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
