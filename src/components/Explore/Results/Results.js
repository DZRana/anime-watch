import React from "react";
import Carousel from "./Carousel/Carousel";
import "./Results.scss";

const Results = ({
  searchResults,
  loadingSearchResultsFlag,
  onWatchlistAdd,
  watchlistData,
}) => {
  return (
    <div>
      {loadingSearchResultsFlag && (
        <div className="loading text-center animated flash infinite">
          <p>LOADING</p>
        </div>
      )}
      {!loadingSearchResultsFlag && searchResults.length > 4 && (
        <Carousel
          searchResults={searchResults}
          onWatchlistAdd={onWatchlistAdd}
          watchlistData={watchlistData}
        />
      )}
    </div>
  );
};

export default Results;
