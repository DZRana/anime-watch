export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_USER":
    case "FETCH_GUEST_USER":
    case "UPDATE_USER_ANIMES":
    case "UPDATE_WATCHLIST_ORDER":
      return action.payload;
    default:
      return state;
  }
};
