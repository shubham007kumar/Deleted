import React from "react";
import { Route, Switch } from "react-router";
import { Navbar } from "../Component/Navigation/Navbar";
import { Signup } from "../Component/Authentication/Signup";
import { Login } from "../Component/Authentication/Login";
import { Home } from "./Home";
import { Brand } from "../Component/Brand/Brand";
export const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/product">
          <Brand />
        </Route>
      </Switch>
    </>
  );
};
