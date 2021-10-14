import React from "react";
import Carousel from "./Carousel/Carousel";
import "./Results.scss";
import { useSelector } from "react-redux";

const Results = ({ loadingSearchResultsFlag }) => {
  const searchResults = useSelector((state) => state.searchResults);

  return (
    <div>
      {loadingSearchResultsFlag && (
        <div className="loading text-center animated flash infinite">
          <p>LOADING</p>
        </div>
      )}
      {!loadingSearchResultsFlag && searchResults.length > 4 && <Carousel />}
    </div>
  );
};

export default Results;
