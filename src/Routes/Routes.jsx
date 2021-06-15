import React from "react";
import { Route, Switch } from "react-router";
import { Navbar } from "../Component/Navigation/Navbar";
import { Signup } from "../Component/Authentication/Signup";
import { Login } from "../Component/Authentication/Login";
import { Error } from "../Component/404/Error";
import { Home } from "./Home";
import { Brand } from "../Component/Brand/Brand";
import { Wishlistpage } from "../Component/WishlistPage/Wishlistpage";
import { useLocation } from "react-router-dom";
export const Routes = () => {
  const match=useLocation()
  console.log(match)
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
        <Route>
             <Error/>
        </Route>
      </Switch>
    </>
  );
};
