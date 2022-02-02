import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signin_gif from "./signin-gif.gif";
import animeWatchApi from "../../apis/anime-watch-api";
import { fetchUser } from "../../actions";

toast.configure({
  autoClose: 3000,
});

const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const callSigninEndpoint = async () => {
    const response = await animeWatchApi
      .post("/signin", {
        email: signInEmail,
        password: signInPassword,
      })
      .catch(() => {
        toast.error("Wrong credentials!!!");
      });
    if (response) {
      dispatch(fetchUser(response.data));
      history.push("/explore");
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    callSigninEndpoint();
  };

  return (
    <div className="flex h-screen animated fadeInRight slow font-bold overflow-hidden">
      <div className="m-auto text-center space-y-8 w-3/4 sm:max-w-md rounded-lg shadow-lg">
        <div>
          <img
            className="m-auto rounded-tl-lg rounded-tr-lg sm:w-1/2 sm:h-24 lg:w-auto lg:h-auto"
            src={`${signin_gif}`}
          />
        </div>
        <div className="flex flex-col">
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
              value={signInEmail}
              onChange={(event) => setSignInEmail(event.target.value)}
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
              value={signInPassword}
              onChange={(event) => setSignInPassword(event.target.value)}
            />
          </form>
        </div>
        <div className="flex flex-col space-y-1 pb-5">
          <button
            type="submit"
            className="m-auto font-bold transition-colors text-white hover:bg-white hover:text-gray-700 py-2 px-4 border border-white rounded-full w-1/2"
            onClick={callSigninEndpoint}
          >
            Submit
          </button>
          <button
            className="m-auto font-bold transition-colors  bg-red-900 text-red-500 hover:bg-red-500 hover:text-white py-2 px-4 border border-red-500 rounded-full w-1/2"
            onClick={() => history.push("/")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Signin);
