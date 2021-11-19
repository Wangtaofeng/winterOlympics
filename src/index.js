import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { Routes } from "./routes";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {Routes.map((route) => {
        return <Route key={route.path} {...route} />;
      })}
      <Redirect to="/home" from="/" />
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
