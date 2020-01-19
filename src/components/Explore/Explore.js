import React, { Component } from "react";
import "./Explore.scss";
import Searchbar from "../Searchbar/Searchbar";
import Topnav from "../Topnav/Topnav";
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
        <Topnav />
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
