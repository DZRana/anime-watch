import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.scss";
import register_gif from "./register-gif.gif";
import animeWatchApi from "../../apis/anime-watch-api";

toast.configure({
  autoClose: 3000,
});

const Register = ({ loadUser }) => {
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
      loadUser(response.data);
      history.push("/explore");
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    callRegisterEndpoint();
  };

  return (
    <div className="container-fluid register">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="card animated fadeInRight slow">
          <img className="card-img-top" alt="register-gif" src={register_gif} />
          <div className="card-body">
            <article className="text-center">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <form onSubmit={onFormSubmit}>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Full Name"
                    value={registerName}
                    onChange={(event) => setRegisterName(event.target.value)}
                  />
                </form>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <form onSubmit={onFormSubmit}>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="email@site.com"
                    value={registerEmail}
                    onChange={(event) => setRegisterEmail(event.target.value)}
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
                    value={registerPassword}
                    onChange={(event) =>
                      setRegisterPassword(event.target.value)
                    }
                  />
                </form>
              </div>
              <div className="col">
                <div className="row justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-outline-light btn-block"
                    onClick={callRegisterEndpoint}
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

export default withRouter(Register);
