import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.scss";
import register_gif from "./register-gif.gif";
import Explore from "../Explore/Explore";

toast.configure({
  autoClose: 3000
});

class Register extends Component {
  render() {
    return (
      <div className="d-flex align-items-center">
        <div className="card">
          <img className="card-img-top" alt="register-gif" src={register_gif} />
          <div className="card-body">
            <form className="text-center">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Full Name"
                />
              </div>
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

export default Register;
