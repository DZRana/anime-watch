import React from "react";
import "./Topnav.scss";

const Topnav = () => {
  return (
    <div className="topnav row text-center text-nowrap animated fadeInUp slow">
      <div className="col">
        <a href="javascript:void(0);">Explore</a>
      </div>
      <div className="col">
        <a href="javascript:void(0);">My Watchlist</a>
      </div>
    </div>
  );
};

export default Topnav;
