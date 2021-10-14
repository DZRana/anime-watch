import React from "react";
import "./Explore.scss";
import Searchbar from "./Searchbar/Searchbar";
import Results from "./Results/Results";

const Explore = ({ onSearchSubmit, loadingSearchResultsFlag }) => {
  return (
    <div>
      <Searchbar onSearchSubmit={onSearchSubmit} />
      <Results loadingSearchResultsFlag={loadingSearchResultsFlag} />
    </div>
  );
};

export default Explore;
