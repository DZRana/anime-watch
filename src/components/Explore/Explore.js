import React, { Component } from "react";
import "./Explore.scss";
import Searchbar from "../Searchbar/Searchbar";
import Carousel from "../Carousel/Carousel";

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onSearchChange, searchResults } = this.props;
    return (
      <div>
        <div className="topnav row text-center text-nowrap animated fadeInUp slow">
          <div className="col">
            <a href="javascript:void(0);">Explore</a>
          </div>
          <div className="col">
            <a href="javascript:void(0);">My Watchlist</a>
          </div>
        </div>
        <div className="searchbar d-flex justify-content-center animated fadeInUp slow delay-1s">
          <Searchbar onSearchChange={onSearchChange} />
        </div>
        <div className="carousel d-flex justify-content-center">
          <Carousel searchResults={searchResults} />
        </div>
      </div>
    );
  }
}

export default Explore;
