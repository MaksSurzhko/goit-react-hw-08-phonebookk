import React from "react";
import pcss from "../contform/form.module.css";

export const Filter = ({ filter, onFilterChange }) => {
  return (
    
    <label className={pcss.clabel} htmlFor="filterInput">
      Find contacts by name:
      <input
        className={pcss.cinput}
        id="filterInput"
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
    
  );
};

// export default Filter;