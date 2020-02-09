import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signin.scss";
import signin_gif from "./signin-gif.gif";

toast.configure({
  autoClose: 3000
});

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: ""
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  callSigninEndpoint = async () => {
    try {
      const res = await fetch("http://localhost:3000/signin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.signInEmail,
          password: this.state.signInPassword
        })
      });
      const user = await res.json();
      if (user.id) {
        this.props.toggleSignedIn();
        this.props.loadUser(user);
        this.props.history.push("/explore");
      } else toast.error("Wrong credentials!!!");
    } catch (err) {
      console.log(err);
    }
  };

  onSubmitSignIn = event => {
    if (event.key === "Enter") this.callSigninEndpoint();
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="card animated fadeInRight slow">
            <img className="card-img-top" alt="signin-gif" src={signin_gif} />
            <div className="card-body">
              <article className="text-center">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="email@site.com"
                    onChange={this.onEmailChange}
                    onKeyDown={this.onSubmitSignIn}
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
                    onKeyDown={this.onSubmitSignIn}
                  />
                </div>
                <div className="col">
                  <div className="row justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-outline-light btn-block"
                      onClick={this.callSigninEndpoint}
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

export default withRouter(Signin);
