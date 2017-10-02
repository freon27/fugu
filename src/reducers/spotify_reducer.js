//import { LOGIN_SUCCESS } from "redux-implicit-oauth2";
import {
  FETCHING_AUTHENTICATED_USER,
  FETCHING_AUTHENTICATED_USER_SUCCESS,
  FETCHING_AUTHENTICATED_USER_FAILED
} from "../actions";

import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCHING_AUTHENTICATED_USER:
      console.log("FETCHING_AUTHENTICATED_USER");
      return state;
      break;
    case FETCHING_AUTHENTICATED_USER_SUCCESS:
      console.log("FETCHING_AUTHENTICATED_USER_SUCCESS", {
        ...state,
        authenticatedUser: action.payload
      });
      return { ...state, authenticatedUser: action.payload };
      break;
    case FETCHING_AUTHENTICATED_USER_FAILED:
      console.log("FETCHING_AUTHENTICATED_USER_FAILED", action.payload);
      return state;
      break;
    default:
      return state;
  }
}
