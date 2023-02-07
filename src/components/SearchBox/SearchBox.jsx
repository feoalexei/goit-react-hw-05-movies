import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ value, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        // value={value}
        onChange={handleChange}
        placeholder="Search movie"
      />
      <button>
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBox;
