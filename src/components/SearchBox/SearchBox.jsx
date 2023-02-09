import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchForm, SearchInput, SearchBtn } from './SearchBox.styled';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        onChange={handleChange}
        placeholder="Search movie"
      />
      <SearchBtn>
        <FaSearch />
      </SearchBtn>
    </SearchForm>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
