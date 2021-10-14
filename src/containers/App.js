import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { toast } from "react-toastify";
import "./App.scss";
import Topnav from "../components/Topnav/Topnav";
import Home from "../components/Home/Home";
import Signin from "../components/Signin/Signin";
import Register from "../components/Register/Register";
import Explore from "../components/Explore/Explore";
import Watchlist from "../components/Watchlist/Watchlist";
import animeWatchApi from "../apis/anime-watch-api";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnime, updateWatchlistOrder } from "../actions";

toast.configure({
  autoClose: 1500,
});

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // HERE
  const [loadingSearchResultsFlag, setLoadingSearchResultsFlag] =
    useState(false);

  const updateUserWatchlist = async () => {
    const { id, watchlistData } = user;
    await animeWatchApi.put("/watchlist", {
      id,
      watchlistData,
    });
  };

  const callAPI = (anime) => {
    if (anime.length >= 3) {
      setLoadingSearchResultsFlag(true);
      dispatch(fetchAnime(anime));
      setLoadingSearchResultsFlag(false);
    } else toast.error("Minimum 3 letters required!");
  };

  const onSearchSubmit = (anime) => {
    callAPI(anime);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    const { watchlistData } = user;
    const { animes, columns } = user.watchlistData;

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
        animeIds: newAnimeIds,
      };

      const newState = {
        ...user,
        watchlistData: {
          ...watchlistData,
          columns: {
            ...columns,
            [newColumn.id]: newColumn,
          },
        },
      };

      dispatch(updateWatchlistOrder(newState));
      return;
    }

    // Moving from one list to another
    if (start !== finish && (finish.id === "c1" || finish.id === "c2")) {
      const startAnimeIds = Array.from(start.animeIds);
      startAnimeIds.splice(source.index, 1);
      const newStart = {
        ...start,
        animeIds: startAnimeIds,
      };

      const finishAnimeIds = Array.from(finish.animeIds);
      finishAnimeIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        animeIds: finishAnimeIds,
      };

      const newState = {
        ...user,
        watchlistData: {
          ...watchlistData,
          columns: {
            ...columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish,
          },
        },
      };

      dispatch(updateWatchlistOrder(newState));
    }

    // Deleting an anime
    if (start !== finish && finish.id === "c3") {
      const startAnimeIds = Array.from(start.animeIds);
      const removed = startAnimeIds.splice(source.index, 1);

      const newStart = {
        ...start,
        animeIds: startAnimeIds,
      };

      const newState = {
        ...user,
        watchlistData: {
          ...watchlistData,
          columns: {
            ...columns,
            [newStart.id]: newStart,
          },
        },
      };

      dispatch(updateWatchlistOrder(newState));
      delete animes[removed];
    }
  };

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/signin"
        render={() => {
          return <Signin />;
        }}
      />
      <Route
        path="/register"
        render={() => {
          return <Register />;
        }}
      />
      <Route
        path="/explore"
        render={() => {
          return (
            <div className="container-fluid explore">
              <Topnav updateUserWatchlist={updateUserWatchlist} />
              <Explore
                onSearchSubmit={onSearchSubmit}
                loadingSearchResultsFlag={loadingSearchResultsFlag}
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
              <Topnav updateUserWatchlist={updateUserWatchlist} />
              <div className="animated fadeIn slow">
                <Watchlist onDragEnd={onDragEnd} />
              </div>
            </div>
          );
        }}
      />
    </Switch>
  );
};

export default App;
