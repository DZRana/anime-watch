export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_ANIME":
      return action.payload;
    default:
      return state;
  }
};
