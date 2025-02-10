import React from "react";
import "../styles/FilterSort.css"; 

const FilterSort = ({ onFilter, onSort }) => {
  return (
    <div className="filter-sort">
      <button onClick={() => onFilter("upcoming")} className="filter-btn">Filter</button>
      <button onClick={() => onSort("seats")} className="sort-btn">Sort</button>
    </div>
  );
};

export default FilterSort;

