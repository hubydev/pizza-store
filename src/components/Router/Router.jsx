import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import App from "../App/App";
import PrivateRoute from "../../helpers/PrivateRoute";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
