import React from "react";
import { Link } from "react-router-dom";

function HomeNavBar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
            aria-controls="main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link cat"
                  data-toggle="dropdown"
                  to="#"
                  aria-expanded="false"
                >
                  <strong>&nbsp; Shop By Category</strong>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">
                    Foods and Drink
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Fresh Meat
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Sea Fishes
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Butter &amp; Eggs
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Fruits
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Frozen Foods
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="index.html">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  data-toggle="dropdown"
                  to="#"
                  aria-expanded="false"
                >
                  Products<i className="fa fa-angle-down"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="category.html">
                    Category
                  </Link>
                  <Link className="dropdown-item" to="cart.html">
                    Cart
                  </Link>
                  <Link className="dropdown-item" to="checkout.html">
                    Checkout
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="blog.html">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about.html">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact.html">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HomeNavBar;
