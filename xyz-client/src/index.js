import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "hub/app";

import 'assets/scss_admin/style.scss';

import { Provider } from "react-redux";
import { store } from "_redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
