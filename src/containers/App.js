import React, { Component } from "react";
import "./App.scss";
//import Home from "../components/Home/Home";
//import Signin from "../components/Signin/Signin";
//import Register from "../components/Register/Register";
import Explore from "../components/Explore/Explore";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center h-100">
          {/*<Home />*/}
          {/*<Signin />*/}
          {/*<Register />*/}
          <Explore />
        </div>
      </div>
    );
  }
}

export default App;
