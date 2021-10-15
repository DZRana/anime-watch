import animeWatchApi from "../apis/anime-watch-api";

export const fetchAnime = (anime) => async (dispatch) => {
  const response = await animeWatchApi.post("/explore", {
    input: anime,
  });

  dispatch({ type: "FETCH_ANIME", payload: response.data.results });
};

export const fetchUser = (data) => {
  return {
    type: "FETCH_USER",
    payload: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined,
      watchlistData: data.watchlist_data,
    },
  };
};

export const updateUserAnimes = (user, animeInfo) => {
  const { watchlistData } = user;
  const { animes, columns } = user.watchlistData;
  return {
    type: "UPDATE_USER_ANIMES",
    payload: {
      ...user,
      watchlistData: {
        ...watchlistData,
        animes: {
          ...animes,
          [animeInfo.mal_id.toString()]: {
            id: animeInfo.mal_id.toString(),
            content: animeInfo.title,
          },
        },
        columns: {
          ...columns,
          c1: {
            ...columns.c1,
            animeIds: [...columns.c1.animeIds, animeInfo.mal_id.toString()],
          },
        },
      },
    },
  };
};

export const updateWatchlistOrder = (newOrder) => {
  return {
    type: "UPDATE_WATCHLIST_ORDER",
    payload: newOrder,
  };
};
