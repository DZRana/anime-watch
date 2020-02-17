import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { toast } from "react-toastify";
import "./App.scss";
import Topnav from "../components/Topnav/Topnav";
import Home from "../components/Home/Home";
import Signin from "../components/Signin/Signin";
import Register from "../components/Register/Register";
import Explore from "../components/Explore/Explore";
import Watchlist from "../components/Watchlist/Watchlist";

toast.configure({
  autoClose: 1500
});

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
          title: "Currently Watching",
          animeIds: []
        },
        c2: {
          id: "c2",
          title: "Finished Watching",
          animeIds: []
        },
        c3: {
          id: "c3",
          title: "Remove from Watchlist"
        }
      },
      columnOrder: ["c1", "c2", "c3"]
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        joined: data.joined,
        watchlistData: data.watchlist_data
      }
    });
  };

  updateUserWatchlist = async () => {
    const { id, watchlistData } = this.state.user;
    try {
      await fetch("https://arcane-garden-26081.herokuapp.com/watchlist", {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
          watchlistData: watchlistData
        })
      });
    } catch (err) {
      console.log(err);
    }
  };

  callAPI = async event => {
    if (event.target.value.length >= 3) {
      this.setState({ loadingSearchResults: true });
      try {
        const res = await fetch(
          "https://arcane-garden-26081.herokuapp.com/explore",
          {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              input: event.target.value
            })
          }
        );
        const api = await res.json();
        this.setState({ searchResults: api.results });
      } catch (err) {
        console.log(err);
      }
      this.setState({ loadingSearchResults: false });
    } else toast.error("Minimum 3 letters required!");
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
    const { animes, columns } = this.state.user.watchlistData;

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
    if (start !== finish && (finish.id === "c1" || finish.id === "c2")) {
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
    }

    // Deleting an anime
    if (start !== finish && finish.id === "c3") {
      const startAnimeIds = Array.from(start.animeIds);
      const removed = startAnimeIds.splice(source.index, 1);

      const newStart = {
        ...start,
        animeIds: startAnimeIds
      };

      const newState = {
        user: {
          ...user,
          watchlistData: {
            ...watchlistData,
            columns: {
              ...columns,
              [newStart.id]: newStart
            }
          }
        }
      };

      this.setState(newState);
      delete animes[removed];
    }
  };

  render() {
    const { searchResults, loadingSearchResults } = this.state;
    const { watchlistData } = this.state.user;
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/signin"
          render={() => {
            return <Signin loadUser={this.loadUser} />;
          }}
        />
        <Route
          path="/register"
          render={() => {
            return <Register loadUser={this.loadUser} />;
          }}
        />
        <Route
          path="/explore"
          render={() => {
            return (
              <div className="container-fluid explore">
                <Topnav updateUserWatchlist={this.updateUserWatchlist} />
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
                <Topnav updateUserWatchlist={this.updateUserWatchlist} />
                <div className="animated fadeIn slow">
                  <Watchlist
                    onDragEnd={this.onDragEnd}
                    watchlistData={watchlistData}
                  />
                </div>
              </div>
            );
          }}
        />
      </Switch>
    );
  }
}

export default App;
