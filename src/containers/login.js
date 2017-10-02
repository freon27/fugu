import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login, logout } from "redux-implicit-oauth2";

import { Button } from "react-bootstrap";
import UserDetail from "../components/user_detail";

import { getAuthenticatedUser } from "../actions/";

const client_id = "d03b2a6380a94298bda2eaaad8c972ee"; // Your client id
const redirect_uri = "http://localhost:3000/"; // Your redirect uri
const scope =
  "user-read-private user-read-email playlist-modify-private playlist-modify-public";

const config = {
  url: "https://accounts.spotify.com/authorize",
  client: client_id,
  redirect: "http://localhost:8080/webpack-dev-server/",
  scope: scope,
  width: 400, // Width (in pixels) of login popup window. Optional, default: 400
  height: 400 // Height (in pixels) of login popup window. Optional, default: 400
};

class Login extends React.Component {
  render() {
    const { isLoggedIn, login, logout, authenticatedUser } = this.props;
    console.log("Render login", authenticatedUser);
    if (isLoggedIn) {
      return (
        <div>
          <UserDetail user={authenticatedUser} />
          <Button type="button" onClick={logout}>
            Logout
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button type="button" onClick={login}>
            Login to Spotify
          </Button>
        </div>
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isLoggedIn && !this.props.authenticatedUser) {
      this.props.getAuthenticatedUser();
    }
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth, authenticatedUser, spotify }) => ({
  isLoggedIn: auth.isLoggedIn,
  authenticatedUser: spotify.authenticatedUser,
  token: auth.token
});

const mapDispatchToProps = {
  login: () => login(config),
  logout,
  getAuthenticatedUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
