import React from "react";
import "./Explore.scss";
import Searchbar from "./Searchbar/Searchbar";
import Results from "./Results/Results";

const Explore = ({ onSearchSubmit }) => {
  return (
    <div>
      <Searchbar onSearchSubmit={onSearchSubmit} />
      <Results />
    </div>
  );
};

export default Explore;
