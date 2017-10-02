import axios from "axios";
import SpotifyWebApi from "spotify-web-api-js";

export const FETCHING_AUTHENTICATED_USER = "FETCHING_AUTHENTICATED_USER";
export const FETCHING_AUTHENTICATED_USER_SUCCESS =
  "FETCHING_AUTHENTICATED_USER_SUCCESS";
export const FETCHING_AUTHENTICATED_USER_FAILED =
  "FETCHING_AUTHENTICATED_USER_FAILED";

function getAuthenticatedUserFetching() {
  return {
    type: FETCHING_AUTHENTICATED_USER
  };
}

export const getAuthenticatedUser = () => {
  return (dispatch, getState) => {
    dispatch(getAuthenticatedUserFetching());
    const { auth } = getState();
    const spotifyClient = new SpotifyWebApi();
    spotifyClient.setAccessToken(auth.token);
    spotifyClient
      .getMe()
      .then(data => {
        dispatch({
          type: FETCHING_AUTHENTICATED_USER_SUCCESS,
          payload: data
        });
      })
      .catch(err => {
        dispatch({
          type: FETCHING_AUTHENTICATED_USER_FAILED,
          payload: err
        });
      });
  };
};
