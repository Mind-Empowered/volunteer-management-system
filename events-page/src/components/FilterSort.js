import React from "react";
import "./FilterSort.css"; 

const FilterSort = ({ onFilter, onSort }) => {
  return (
    <div className="filter-sort">
      <button onClick={() => onFilter("upcoming")} className="filter-btn">Filter Upcoming</button>
      <button onClick={() => onFilter("past")} className="filter-btn">Filter Past</button>
      <button onClick={() => onSort("date")} className="sort-btn">Sort by Date</button>
      <button onClick={() => onSort("seats")} className="sort-btn">Sort by Seats</button>
    </div>
  );
};

export default FilterSort;

