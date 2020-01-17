import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signin.scss";
import signin_gif from "./signin-gif.gif";

toast.configure({
  autoClose: 3000
});

class Signin extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="card animated fadeInRight slow">
          <img className="card-img-top" alt="signin-gif" src={signin_gif} />
          <div className="card-body">
            <form className="text-center">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="email@site.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="col">
                <div className="row justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-outline-light btn-block"
                  >
                    Submit
                  </button>
                </div>
                <div className="mt-1 row justify-content-center">
                  <button className="btn btn-outline-danger btn-block">
                    Back
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
