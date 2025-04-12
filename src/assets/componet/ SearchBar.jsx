import React from "react";


function SearchBar({ searchTerm, onSearchChange }) {
  
  function handleChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Search expenses..."
      value={searchTerm}
      onChange={handleChange}
      style={{
        padding: "10px",
        marginBottom: "20px",
        width: "100%",
        fontSize: "16px",
      }}
    />
  );
}

export default SearchBar;
