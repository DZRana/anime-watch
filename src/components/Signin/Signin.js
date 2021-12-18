import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signin.css";
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
    <div className="flex h-screen animated fadeInRight slow">
      <div
        className="m-auto rounded-lg shadow-2xl w-5/6 bg-cover bg-center h-4/5"
        style={{
          backgroundImage: `url(${signin_gif})`,
        }}
      >
        <div className="h-full flex flex-col text-center font-bold">
          <div className="m-auto w-full">
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
          <div className="flex flex-col gap-1 w-1/2 m-auto">
            <button
              type="submit"
              className="transition-colors font-bold text-white hover:bg-white hover:text-gray-700 py-2 px-4 border border-white rounded-full w-full"
              onClick={callSigninEndpoint}
            >
              Submit
            </button>
            <button
              className="transition-colors font-bold bg-red-900 text-red-500 hover:bg-red-500 hover:text-white py-2 px-4 border border-red-500 rounded-full w-full"
              onClick={() => history.push("/")}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Signin);
