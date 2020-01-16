import React, { Component } from "react";
import "./App.scss";
import Home from "../components/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center h-100">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
