import React from "react";
import "./Home.scss";
import ninja from "./ninja.png";
import register_icon from "./register-icon.png";
import signin_icon from "./signin-icon.png";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="animated fadeInLeft slower text-nowrap">
        Anime
        <img alt="ninja" src={ninja} />
        Watch
      </h1>
      <h2 className="animated fadeInLeft slower delay-1s">
        Your own personal anime watchlist tracker
      </h2>
      <div className="mt-5 animated fadeInUp slower delay-2s">
        <div className="col">
          <div className="row justify-content-center">
            <button type="button" className="btn btn-outline-light btn-block">
              Sign In
            </button>
            <div className="overlay-img">
              <img alt="signin" src={signin_icon} />
            </div>
          </div>
          <div className="mt-1 row justify-content-center">
            <button type="button" className="btn btn-outline-light btn-block">
              Register
            </button>
            <div className="overlay-img">
              <img alt="register" src={register_icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
