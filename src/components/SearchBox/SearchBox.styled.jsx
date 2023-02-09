import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  align-content: stretch;
  height: 40px;
`;
export const SearchInput = styled.input`
  height: 100%;
  outline: none;
  border: 1px solid ${p => p.theme.colors.accent};
  padding-left: ${p => p.theme.space[3]}px;
`;

export const SearchBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  border: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;
