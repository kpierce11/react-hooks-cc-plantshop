import React from "react";

function Search({ searchQuery, onSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Type a name to search..."
      />
    </div>
  );
}

export default Search;
