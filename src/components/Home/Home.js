import React from "react";
import "./Home.css";
import ninja from "./ninja.png";
import signin_icon from "./signin-icon.png";
import register_icon from "./register-icon.png";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchGuestUser } from "../../actions";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="container-fluid home">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-center">
          <h1 className="animated fadeInLeft slow text-nowrap">
            Anime
            <img alt="ninja" src={ninja} />
            Watch
          </h1>
          <h2 className="animated fadeInUp slow delay-1s">
            Your own personal anime watchlist tracker
          </h2>
          <div className="mt-5 animated fadeInUp slow delay-2s">
            <div className="col">
              <div className="row justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline-light btn-block"
                  onClick={() => history.push("/signin")}
                >
                  Sign In
                </button>
                <div className="overlay-img">
                  <img alt="signin-icon" src={signin_icon} />
                </div>
              </div>
              <div className="mt-1 row justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline-light btn-block"
                  onClick={() => history.push("/register")}
                >
                  Register
                </button>
                <div className="overlay-img">
                  <img alt="register-icon" src={register_icon} />
                </div>
              </div>
              <div className="row justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline-light btn-block"
                  onClick={() => {
                    dispatch(fetchGuestUser());
                    history.push("/explore");
                  }}
                >
                  Guest
                </button>
                <div className="overlay-img">
                  <img alt="signin-icon" src={signin_icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
