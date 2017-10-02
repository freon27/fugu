import { combineReducers } from "redux";
import { authReducer as auth } from "redux-implicit-oauth2";
import SpotifyReducer from "./spotify_reducer";

const rootReducer = combineReducers({
  auth,
  spotify: SpotifyReducer
});

export default rootReducer;
