import React, { Component } from "react";
import "./Explore.scss";
import Searchbar from "../Searchbar/Searchbar";
import Results from "../Results/Results";

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onSearchChange, searchResults, loadingSearchResults } = this.props;
    return (
      <div>
        <Searchbar onSearchChange={onSearchChange} />
        <Results
          searchResults={searchResults}
          loadingSearchResults={loadingSearchResults}
        />
      </div>
    );
  }
}

export default Explore;
