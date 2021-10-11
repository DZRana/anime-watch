import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signin.scss";
import signin_gif from "./signin-gif.gif";
import animeWatchApi from "../../apis/anime-watch-api";

toast.configure({
  autoClose: 3000,
});

const Signin = ({ loadUser }) => {
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
      loadUser(response.data);
      history.push("/explore");
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    callSigninEndpoint();
  };

  return (
    <div className="container-fluid signin">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="card animated fadeInRight slow">
          <img className="card-img-top" alt="signin-gif" src={signin_gif} />
          <div className="card-body">
            <article className="text-center">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <form onSubmit={onFormSubmit}>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="email@site.com"
                    value={signInEmail}
                    onChange={(event) => setSignInEmail(event.target.value)}
                  />
                </form>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <form onSubmit={onFormSubmit}>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={signInPassword}
                    onChange={(event) => setSignInPassword(event.target.value)}
                  />
                </form>
              </div>

              <div className="col">
                <div className="row justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-outline-light btn-block"
                    onClick={callSigninEndpoint}
                  >
                    Submit
                  </button>
                </div>
                <div className="mt-1 row justify-content-center">
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={() => history.push("/")}
                  >
                    Back
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Signin);
