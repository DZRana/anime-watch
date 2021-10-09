import React, { useState } from "react";
import "./Searchbar.scss";

const Searchbar = ({ onSearchSubmit }) => {
  const [anime, setAnime] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(anime);
  };

  return (
    <div className="mt-5 searchbar d-flex justify-content-center animated fadeIn slow">
      <form onSubmit={onFormSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder="Search (min 3 letters)"
          value={anime}
          onChange={(event) => setAnime(event.target.value)}
        />
      </form>
    </div>
  );
};

export default Searchbar;
