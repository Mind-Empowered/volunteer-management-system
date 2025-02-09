import React from "react";
import { FaBell, FaFilter, FaSort } from "react-icons/fa"; // Import icons

const FilterSort = () => {
  return (
    <div className="d-flex justify-content-between align-items-upperright p-2">
      
      {/* Right Section (Buttons & Notification) */}
      <div className="position-relative">
        {/* Bell Icon for Notifications */}
        <FaBell size={18} className="position-absolute top-0 end-0 text-dark" />

        {/* Filter & Sort Buttons */}
        <div className="d-flex gap-1 mt-4 my-2">
          <button className="btn btn-text-white bg-warning text-white d-flex align-items-center">
            <FaFilter className="me-2" /> Filter
          </button>
          <button className="btn btn- bg-warning text-white d-flex align-items-center ">
            <FaSort className="me-2" /> Sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;
