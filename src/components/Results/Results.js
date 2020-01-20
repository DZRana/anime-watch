import React from "react";
import Carousel from "../Carousel/Carousel";
import "./Results.scss";

const Results = ({ searchResults, loadingSearchResults }) => {
  return (
    <div>
      {loadingSearchResults && (
        <div className="loading text-center animated flash infinite">
          <p>LOADING</p>
        </div>
      )}
      {!loadingSearchResults && searchResults.length > 4 && (
        <Carousel searchResults={searchResults} />
      )}
    </div>
  );
};

export default Results;
