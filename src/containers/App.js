import React, { Component } from "react";
import "./App.scss";
import Topnav from "../components/Topnav/Topnav";
import Home from "../components/Home/Home";
import Signin from "../components/Signin/Signin";
import Register from "../components/Register/Register";
import Explore from "../components/Explore/Explore";
import Watchlist from "../components/Watchlist/Watchlist";
import jikanjs from "jikanjs";

const initialState = {
  searchResults: [],
  loadingSearchResults: false,
  user: {
    id: "",
    name: "",
    email: "",
    joined: "",
    watchlistData: {
      animes: {},
      columns: {
        c1: {
          id: "c1",
          title: "Watchlist",
          animeIds: []
        },
        c2: {
          id: "c2",
          title: "Finished Watching",
          animeIds: []
        }
      },
      columnOrder: ["c1", "c2"]
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
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

  onWatchlistAdd = animeInfo => {
    const { user } = this.state;
    const { watchlistData } = this.state.user;

    this.setState({
      user: {
        ...user,
        watchlistData: {
          ...watchlistData,
          animes: {
            ...watchlistData.animes,
            [animeInfo.mal_id.toString()]: {
              id: animeInfo.mal_id.toString(),
              content: animeInfo.title
            }
          },
          columns: {
            ...watchlistData.columns,
            c1: {
              ...watchlistData.columns.c1,
              animeIds: [
                ...watchlistData.columns.c1.animeIds,
                animeInfo.mal_id.toString()
              ]
            }
          }
        }
      }
    });
    //console.log(watchlistData);
  };

  render() {
    const { searchResults, loadingSearchResults } = this.state;
    const { watchlistData } = this.state.user;
    return (
      <div className="container-fluid">
        {/*<Home />*/}
        {/*<Signin />
        {/*<Register />*/}
        <Topnav />
        <Explore
          onSearchChange={this.onSearchChange}
          searchResults={searchResults}
          loadingSearchResults={loadingSearchResults}
          onWatchlistAdd={this.onWatchlistAdd}
        />
        <Watchlist watchlistData={watchlistData} />
      </div>
    );
  }
}

export default App;
