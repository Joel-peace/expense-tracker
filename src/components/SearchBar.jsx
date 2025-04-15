// src/components/SearchBar.jsx
import React from 'react';

function SearchBar(props) {
  function handleSearchChange(event) {
    props.onSearch(event.target.value);
  }

  return (
    <input
      type="text"
      value={props.searchTerm}
      onChange={handleSearchChange}
      placeholder="Search Expenses"
    />
  );
}

export default SearchBar;
