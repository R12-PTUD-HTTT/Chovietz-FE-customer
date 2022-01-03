import React from "react";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import NavBar from "./component/NavBar/NavBar";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
