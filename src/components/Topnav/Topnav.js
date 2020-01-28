import React from "react";
import "./Topnav.scss";
import { Link } from "react-router-dom";

const Topnav = () => {
  return (
    <div className="mt-4 topnav row text-center text-nowrap animated fadeInUp slow">
      <div className="col">
        <Link to="/explore">Explore</Link>
      </div>
      <div className="col">
        <Link to="/">Sign Out</Link>
      </div>
      <div className="col">
        <Link to="/watchlist">My Watchlist</Link>
      </div>
    </div>
  );
};

export default Topnav;
