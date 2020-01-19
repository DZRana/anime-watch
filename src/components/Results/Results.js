import React from "react";
import Carousel from "../Carousel/Carousel";

const Results = ({ searchResults, loadingSearchResults }) => {
  return (
    <div>
      {!loadingSearchResults && searchResults.length < 1 && <div></div>}
      {loadingSearchResults && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center animated flash infinite">
            <p>LOADING</p>
          </div>
        </div>
      )}
      {!loadingSearchResults && searchResults.length > 0 && (
        <Carousel searchResults={searchResults} />
      )}
    </div>
  );
};

export default Results;
