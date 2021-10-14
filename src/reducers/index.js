import { combineReducers } from "redux";
import animeReducer from "./animeReducer";
import userReducer from "./userReducer";

export default combineReducers({
  searchResults: animeReducer,
  user: userReducer,
});
