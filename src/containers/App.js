import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
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
    const { animes, columns } = this.state.user.watchlistData;

    this.setState({
      user: {
        ...user,
        watchlistData: {
          ...watchlistData,
          animes: {
            ...animes,
            [animeInfo.mal_id.toString()]: {
              id: animeInfo.mal_id.toString(),
              content: animeInfo.title
            }
          },
          columns: {
            ...columns,
            c1: {
              ...columns.c1,
              animeIds: [...columns.c1.animeIds, animeInfo.mal_id.toString()]
            }
          }
        }
      }
    });
  };

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    const { user } = this.state;
    const { watchlistData } = this.state.user;
    const { columns } = this.state.user.watchlistData;

    if (!destination) {
      return;
    }

    if (
      destination.droppablId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];
    if (start === finish) {
      const newAnimeIds = Array.from(start.animeIds);
      newAnimeIds.splice(source.index, 1);
      newAnimeIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        animeIds: newAnimeIds
      };

      const newState = {
        user: {
          ...user,
          watchlistData: {
            ...watchlistData,
            columns: {
              ...columns,
              [newColumn.id]: newColumn
            }
          }
        }
      };

      this.setState(newState);
      return;
    }

    // Moving from one list to another
    const startAnimeIds = Array.from(start.animeIds);
    startAnimeIds.splice(source.index, 1);
    const newStart = {
      ...start,
      animeIds: startAnimeIds
    };

    const finishAnimeIds = Array.from(finish.animeIds);
    finishAnimeIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      animeIds: finishAnimeIds
    };

    const newState = {
      user: {
        ...user,
        watchlistData: {
          ...watchlistData,
          columns: {
            ...columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish
          }
        }
      }
    };

    this.setState(newState);
  };

  render() {
    const { searchResults, loadingSearchResults } = this.state;
    const { watchlistData } = this.state.user;
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/register" component={Register} />
        <Route
          path="/explore"
          render={() => {
            return (
              <div className="container-fluid">
                <Topnav />
                <Explore
                  onSearchChange={this.onSearchChange}
                  searchResults={searchResults}
                  loadingSearchResults={loadingSearchResults}
                  onWatchlistAdd={this.onWatchlistAdd}
                  watchlistData={watchlistData}
                />
              </div>
            );
          }}
        />
        <Route
          path="/watchlist"
          render={() => {
            return (
              <div className="container-fluid">
                <Topnav />
                <Watchlist
                  onDragEnd={this.onDragEnd}
                  watchlistData={watchlistData}
                />
              </div>
            );
          }}
        />
      </Switch>
    );
  }
}

export default App;
