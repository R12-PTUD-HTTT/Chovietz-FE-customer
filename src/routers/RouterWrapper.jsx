import React from "react";
import { Route } from "react-router";
import { Redirect } from "react-router-dom";
import Layout from "../Layout";

function RouterWrapper({
  requireLogin,
  path,
  exact,
  component: Component,
  ...rest
}) {
  //check role here
  const isLogin = false;
  if (requireLogin && !isLogin) {
    return <Redirect to="/login" />;
  }

  if (isLogin && path === "/login") {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Route
        exact={exact}
        path={path}
        {...rest}
        render={(props) => (
          <Layout>
            <Component {...props} />;
          </Layout>
        )}
      />
    </>
  );
}

export default RouterWrapper;
