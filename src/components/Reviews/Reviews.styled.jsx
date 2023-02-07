import styled from 'styled-components';

export const Review = styled.li`
  padding-bottom: ${p => p.theme.space[5]}px;
  border-bottom: 1px solid lightgrey;
  &:not(:first-child) {
    padding-top: ${p => p.theme.space[5]}px;
  }
`;

export const Author = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.secondary};
`;

export const Date = styled.p`
  color: ${p => p.theme.colors.lighttext};
`;
