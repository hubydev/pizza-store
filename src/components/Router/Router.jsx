import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import App from "../App/App";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/:storeName" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
