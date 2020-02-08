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
      onSearchChange,
      searchResults,
      loadingSearchResults,
      onWatchlistAdd,
      watchlistData
    } = this.props;
    return (
      <div>
        <Searchbar onSearchChange={onSearchChange} />
        <Results
          searchResults={searchResults}
          loadingSearchResults={loadingSearchResults}
          onWatchlistAdd={onWatchlistAdd}
          watchlistData={watchlistData}
        />
      </div>
    );
  }
}

export default Explore;
