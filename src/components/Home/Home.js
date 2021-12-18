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
    <div className="flex h-screen overflow-hidden text-white font-bold">
      <div className="m-auto text-center">
        <h1 className="animated fadeInLeft slow flex flex-row justify-center items-center text-3xl">
          Anime
          <img alt="ninja" src={ninja} />
          Watch
        </h1>
        <h2 className="animated fadeInUp slow delay-1s text-2xl">
          Your own personal anime watchlist tracker
        </h2>
        <div className="animated fadeInUp slow delay-2s flex flex-col gap-1 m-16 text-xl">
          <div>
            <div className="absolute pointer-events-none w-full">
              <img
                className="m-auto opacity-20"
                alt="signin-icon"
                src={signin_icon}
              />
            </div>
            <button
              type="button"
              className="transition-colors bg-transparent hover:bg-white hover:text-gray-700 py-2 px-4 border border-white rounded-full w-full"
              onClick={() => history.push("/signin")}
            >
              Sign In
            </button>
          </div>
          <div>
            <div className="absolute pointer-events-none w-full">
              <img
                className="m-auto opacity-20"
                alt="register-icon"
                src={register_icon}
              />
            </div>
            <button
              type="button"
              className="transition-colors bg-transparent hover:bg-white hover:text-gray-700 py-2 px-4 border border-white rounded-full w-full"
              onClick={() => history.push("/register")}
            >
              Register
            </button>
          </div>
          <div>
            <div className="absolute pointer-events-none w-full">
              <img
                className="m-auto opacity-20"
                alt="signin-icon"
                src={signin_icon}
              />
            </div>
            <button
              type="button"
              className="transition-colors bg-transparent hover:bg-white hover:text-gray-700 py-2 px-4 border border-white rounded-full w-full"
              onClick={() => {
                dispatch(fetchGuestUser());
                history.push("/explore");
              }}
            >
              Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
