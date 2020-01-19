import React from "react";
import "./Searchbar.scss";

const Searchbar = ({ onSearchChange }) => {
  return (
    <div className="searchbar d-flex justify-content-center animated fadeInUp slow delay-1s">
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
