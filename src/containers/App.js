import React, { Component } from "react";
import "./App.scss";
import Home from "../components/Home/Home";
import Signin from "../components/Signin/Signin";
import Register from "../components/Register/Register";
import Explore from "../components/Explore/Explore";
import jikanjs from "jikanjs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: []
    };
  }

  callAPI = async event => {
    try {
      const res = await jikanjs.search("anime", event.target.value);
      this.setState({ searchResults: res.results });
    } catch (err) {
      console.log(err);
    }
  };

  onSearchChange = event => {
    if (event.keyCode === 13) {
      this.callAPI(event);
    }
  };

  render() {
    const { searchResults } = this.state;
    return (
      <div className="container-fluid">
        {/*<Home />*/}
        {/*<Signin />*/}
        {/*<Register />*/}
        <Explore
          onSearchChange={this.onSearchChange}
          callAPI={this.callAPI}
          searchResults={searchResults}
        />
      </div>
    );
  }
}

export default App;
