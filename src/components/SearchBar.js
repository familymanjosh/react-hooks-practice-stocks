import React from "react";

function SearchBar({sort, onSortChange, filter, onFilterChange}) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sort === "Alphabetically"}
          onChange={(e)=>onSortChange(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sort === "Price"}
          onChange={(e)=>onSortChange(e.target.value)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select value={filter}  onChange={(e)=> onFilterChange(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
