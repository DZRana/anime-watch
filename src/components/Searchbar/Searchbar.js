import React from "react";
import "./Searchbar.scss";

const Searchbar = ({ onSearchChange }) => {
  return (
    <div>
      <input
        className="search__input"
        type="text"
        placeholder="Search (minimum of 3 letters)"
        onKeyDown={onSearchChange}
      />
    </div>
  );
};

export default Searchbar;
