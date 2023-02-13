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
    onSearch(query.trim());
    if (query === '') {
      alert('you should enter something to find a movie');
    }
    setQuery('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        onChange={handleChange}
        placeholder="Search movie"
        value={query}
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
