import React, { Component } from "react";
import "./Explore.scss";

class Explore extends Component {
  render() {
    return (
      <div className="mt-2 row text-center text-nowrap animated fadeInUp slow">
        <div className="col">
          <a href="javascript:void(0);">Explore</a>
        </div>
        <div className="col">
          <a href="javascript:void(0);">My Watchlist</a>
        </div>
      </div>
    );
  }
}

export default Explore;
