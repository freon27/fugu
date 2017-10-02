import React from "react";
import ReactDOM from "react-dom";
import promise from "redux-promise";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authMiddleware } from "redux-implicit-oauth2";

import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(
  authMiddleware,
  thunk,
  promise
)(createStore);

const store = createStoreWithMiddleware(
  reducers /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(".container")
);
