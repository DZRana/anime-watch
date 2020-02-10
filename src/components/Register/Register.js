import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.scss";
import register_gif from "./register-gif.gif";

toast.configure({
  autoClose: 3000
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  callRegisterEndpoint = async () => {
    try {
      const res = await fetch("http://localhost:3000/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          watchlistData: this.props.watchlistData
        })
      });
      const user = await res.json();
      if (user.id) {
        this.props.loadUser(user);
        this.props.history.push("/explore");
      } else toast.error("Invalid entries!!!");
    } catch (err) {
      console.log(err);
    }
  };

  onSubmitRegister = event => {
    if (event.key === "Enter") this.callRegisterEndpoint();
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="card animated fadeInRight slow">
            <img
              className="card-img-top"
              alt="register-gif"
              src={register_gif}
            />
            <div className="card-body">
              <article className="text-center">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Full Name"
                    onChange={this.onNameChange}
                    onKeyDown={this.onSubmitRegister}
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
                    onChange={this.onEmailChange}
                    onKeyDown={this.onSubmitRegister}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={this.onPasswordChange}
                    onKeyDown={this.onSubmitRegister}
                  />
                </div>
                <div className="col">
                  <div className="row justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-outline-light btn-block"
                      onClick={this.callRegisterEndpoint}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="mt-1 row justify-content-center">
                    <button
                      className="btn btn-outline-danger btn-block"
                      onClick={() => this.props.history.push("/")}
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
  }
}

export default withRouter(Register);
