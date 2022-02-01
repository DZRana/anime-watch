import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
import register_gif from "./register-gif.gif";
import animeWatchApi from "../../apis/anime-watch-api";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../actions";

toast.configure({
  autoClose: 3000,
});

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");

  const callRegisterEndpoint = async () => {
    const response = await animeWatchApi
      .post("/register", {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
        watchlistData: {
          animes: {},
          columns: {
            c1: {
              id: "c1",
              title: "Currently Watching",
              animeIds: [],
            },
            c2: {
              id: "c2",
              title: "Finished Watching",
              animeIds: [],
            },
            c3: {
              id: "c3",
              title: "Remove from Watchlist",
            },
          },
          columnOrder: ["c1", "c2", "c3"],
        },
      })
      .catch(() => {
        toast.error("Invalid entries!!!");
      });
    if (response) {
      dispatch(fetchUser(response.data));
      history.push("/explore");
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    callRegisterEndpoint();
  };

  return (
    <div className="flex h-screen animated fadeInRight slow font-bold overflow-hidden">
      <div className="m-auto text-center space-y-8 w-3/4 sm:max-w-md rounded-lg shadow-lg">
        <div className="flex flex-col">
          <div>
            <img
              className="m-auto rounded-tl-lg rounded-tr-lg sm:w-1/2 sm:h-16 lg:w-auto lg:h-auto"
              src={`${register_gif}`}
            />
          </div>
          <label className="text-white pt-5" htmlFor="name">
            Name
          </label>
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              className="rounded bg-gray-300 w-1/2"
              id="name"
              placeholder="Full Name"
              value={registerName}
              onChange={(event) => setRegisterName(event.target.value)}
            />
          </form>
          <label className="text-white" htmlFor="email">
            Email
          </label>
          <form onSubmit={onFormSubmit}>
            <input
              type="email"
              className="rounded bg-gray-300 w-1/2"
              id="email"
              aria-describedby="emailHelp"
              placeholder="email@site.com"
              value={registerEmail}
              onChange={(event) => setRegisterEmail(event.target.value)}
            />
          </form>
          <label className="text-white" htmlFor="password">
            Password
          </label>
          <form onSubmit={onFormSubmit}>
            <input
              type="password"
              className="rounded bg-gray-300 w-1/2"
              id="password"
              placeholder="Password"
              value={registerPassword}
              onChange={(event) => setRegisterPassword(event.target.value)}
            />
          </form>
        </div>
        <div className="flex flex-col space-y-1 pb-5">
          <button
            type="submit"
            className="m-auto font-bold transition-colors text-white hover:bg-white hover:text-gray-700 py-2 px-4 border border-white rounded-full w-1/2"
            onClick={callRegisterEndpoint}
          >
            Submit
          </button>
          <button
            className="m-auto font-bold transition-colors bg-red-900 text-red-500 hover:bg-red-500 hover:text-white py-2 px-4 border border-red-500 rounded-full w-1/2"
            onClick={() => history.push("/")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Register);
