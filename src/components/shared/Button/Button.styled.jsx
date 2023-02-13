import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-flex;
  align-items: flex-end;
  gap: 5px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid grey;
  cursor: pointer;
  transition: all 0.4s;
  padding: 10px 15px;

  &.active,
  &:hover {
    color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.accent};
  }
`;
