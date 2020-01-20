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
      searchResults: [],
      loadingSearchResults: false
    };
  }

  callAPI = async event => {
    this.setState({ loadingSearchResults: true });
    try {
      const res = await jikanjs.search("anime", event.target.value);
      this.setState({ searchResults: res.results });
    } catch (err) {
      console.log(err);
    }
    this.setState({ loadingSearchResults: false });
  };

  onSearchChange = event => {
    if (event.keyCode === 13) {
      this.callAPI(event);
    }
  };

  render() {
    const { searchResults, loadingSearchResults } = this.state;
    return (
      <div className="container-fluid">
        {/*<Home />*/}
        {/*<Signin />
        {/*<Register />*/}
        <Explore
          onSearchChange={this.onSearchChange}
          searchResults={searchResults}
          loadingSearchResults={loadingSearchResults}
        />
      </div>
    );
  }
}

export default App;
