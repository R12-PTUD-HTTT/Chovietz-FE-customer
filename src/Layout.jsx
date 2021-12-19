import React from "react";
import { Route, Switch } from "react-router-dom";
import SecureView from "./routers/SecureView";
import HomePage from "./views/HomePage";
import LoginPage from "./views/Login/LoginPage";
import Cart from "./views/Cart/Cart";
import NotFoundPage from "./views/Error/NotFoundPage";
function Layout(props) {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/cart" component={Cart} />
      {SecureView()}
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default Layout;
