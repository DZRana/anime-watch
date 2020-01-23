import React from "react";
import Carousel from "../Carousel/Carousel";
import "./Results.scss";

const Results = ({ searchResults, loadingSearchResults, onWatchlistAdd }) => {
  return (
    <div>
      {loadingSearchResults && (
        <div className="loading text-center animated flash infinite">
          <p>LOADING</p>
        </div>
      )}
      {!loadingSearchResults && searchResults.length > 4 && (
        <Carousel
          searchResults={searchResults}
          onWatchlistAdd={onWatchlistAdd}
        />
      )}
    </div>
  );
};

export default Results;
