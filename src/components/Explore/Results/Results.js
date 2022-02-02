import React from "react";
import Carousel from "./Carousel/Carousel";
import { useSelector } from "react-redux";

const Results = () => {
  const searchResults = useSelector((state) => state.searchResults);

  return <div>{searchResults.length > 0 && <Carousel />}</div>;
};

export default Results;
