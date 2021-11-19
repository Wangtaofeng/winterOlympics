import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Routes } from "./routes";
import "./App.css";

function App() {
  return (
    <Switch>
      {Routes.map((route) => {
        return (
          <Route
            key={route.path}
            {...route}
            render={(routerProps) => {
              return <route.component {...routerProps} />;
            }}
          />
        );
      })}
      <Redirect to="/home" />
    </Switch>
  );
}

export default App;
