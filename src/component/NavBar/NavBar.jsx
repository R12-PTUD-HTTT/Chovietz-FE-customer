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
                <Link className="nav-link" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  data-toggle="dropdown"
                  to="/products"
                  aria-expanded="false"
                >
                  Sản phẩm<i className="fa fa-angle-down"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/categories">
                    Loại hàng
                  </Link>
                  <Link className="dropdown-item" to="/cart">
                    Giỏ hàng
                  </Link>
                  <Link className="dropdown-item" to="/checkout">
                    Checkout
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Giới thiệu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Liên hệ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Đăng kí
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
