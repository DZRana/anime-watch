import React from "react";
import "./Explore.scss";
import Searchbar from "./Searchbar/Searchbar";
import Results from "./Results/Results";

const Explore = ({
  onSearchSubmit,
  searchResults,
  loadingSearchResultsFlag,
  onWatchlistAdd,
  watchlistData,
}) => {
  return (
    <div>
      <Searchbar onSearchSubmit={onSearchSubmit} />
      <Results
        searchResults={searchResults}
        loadingSearchResultsFlag={loadingSearchResultsFlag}
        onWatchlistAdd={onWatchlistAdd}
        watchlistData={watchlistData}
      />
    </div>
  );
};

export default Explore;
