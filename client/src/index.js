import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";

ReactDom.render(
  <BrowserRouter>
    <App>
      <Route path="/" component={Welcome} exact={true} />
      <Route path="/signup" component={Signup} />
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);
