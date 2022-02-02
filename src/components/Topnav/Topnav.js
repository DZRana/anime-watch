import React from "react";
import { Link, withRouter } from "react-router-dom";

const Topnav = ({ updateUserWatchlist }) => {
  return (
    <div className="mt-5 flex flex-row text-center animated fadeInUp slow text-white text-xl md:text-3xl">
      <div className="flex-grow">
        <Link
          className="opacity-70 hover:transition-opacity hover:opacity-100 duration-300"
          to="/explore"
        >
          Explore
        </Link>
      </div>
      <div className="flex-grow pl-8">
        <Link
          className="opacity-70 hover:transition-opacity hover:opacity-100 duration-300"
          to="/"
          onClick={() => {
            updateUserWatchlist();
          }}
        >
          Sign Out
        </Link>
      </div>
      <div className="flex-grow">
        <Link
          className="opacity-70 hover:transition-opacity hover:opacity-100 duration-300"
          to="/watchlist"
        >
          My Watchlist
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Topnav);
