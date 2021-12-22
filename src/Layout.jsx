import React from "react";
import { Route, Switch } from "react-router-dom";
import SecureView from "./routers/SecureView";
import HomePage from "./views/HomePage";
import LoginPage from "./views/Login/LoginPage";
import Cart from "./views/Cart/Cart";
import NotFoundPage from "./views/Error/NotFoundPage";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import NavBar from "./component/NavBar/NavBar";
import SignUpPage from "./component/SignUp/SignUp";
function Layout(props) {
  return (
    <>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/signup" component={SignUpPage} />

        {SecureView()}
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default Layout;
