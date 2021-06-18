import React from "react";
import { Route, Switch } from "react-router";
import { Navbar } from "../Component/Navigation/Navbar";
import { Signup } from "../Component/Authentication/Signup";
import { Login } from "../Component/Authentication/Login";
import { Error } from "../Component/404/Error";
import { Home } from "./Home";
import { Brand } from "../Component/Brand/Brand";
import { Wishlistpage } from "../Component/WishlistPage/Wishlistpage";
import { Address } from "../Component/Payment/Address";
import { Pay } from "../Component/Payment/Pay";
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
        <Route path='/wishlist'>
          <Wishlistpage/>
        </Route>
        <Route path='/address'>
          <Address/>
        </Route>
        <Route path='/payment'>
          <Pay/>
        </Route>
        <Route>
             <Error/>
        </Route>
      </Switch>
    </>
  );
};
