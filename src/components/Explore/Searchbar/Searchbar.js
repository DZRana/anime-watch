import React, { useState } from "react";

const Searchbar = ({ onSearchSubmit }) => {
  const [anime, setAnime] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(anime);
  };

  return (
    <div className="my-8 flex items-center justify-center animated fadeIn slow">
      <form
        className="flex border-2 rounded border-opacity-70"
        onSubmit={onFormSubmit}
      >
        <input
          className="px-4 py-2 w-60 bg-white bg-opacity-0 text-white placeholder-white placeholder-opacity-70"
          type="text"
          placeholder="Search (min 3 letters)"
          value={anime}
          onChange={(event) => setAnime(event.target.value)}
        />
        <button className="flex items-center justify-center px-4 border-l">
          <svg
            className="w-6 h-6 text-white text-opacity-70"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
