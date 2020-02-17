import React from "react";
import "./Searchbar.scss";

const Searchbar = ({ onSearchChange }) => {
  return (
    <div className="mt-5 searchbar d-flex justify-content-center animated fadeIn slow">
      <input
        className="search__input"
        type="text"
        placeholder="Search (min 3 letters)"
        onKeyDown={onSearchChange}
      />
    </div>
  );
};

export default Searchbar;
