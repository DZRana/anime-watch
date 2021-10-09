import React, { Component } from "react";
import "./Explore.scss";
import Searchbar from "./Searchbar/Searchbar";
import Results from "./Results/Results";

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      onSearchSubmit,
      searchResults,
      loadingSearchResultsFlag,
      onWatchlistAdd,
      watchlistData,
    } = this.props;
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
  }
}

export default Explore;
