import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <header className="header-area">
        <div className="header-middle">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3">
                <div className="logo-wrap">
                  <Link to="/">
                    <img src="img/logo/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-8 text-center">
                <div className="search-box">
                  <input type="text" placeholder="Search for product" />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
<<<<<<< HEAD
              <div class="col-lg-4 col-md-4 col-4 text-right">
                <div class="header-acc-wrap">
                <div class="header-acc-list header-account">
                    <Link to="/login">
                      <span class="">
                        <img src="img/icon/account_circle.svg" alt="" width="35px" height="35px"/>
                      </span>
                    </Link>
                  </div>
                  <div class="header-acc-list header-wishlist">
                    <Link to="wishlist.html">
                      <span class="">
=======
              <div className="col-lg-5 col-md-5 col-5 text-right">
                <div className="header-acc-wrap">
                  <div className="header-acc-list header-wishlist">
                    <Link to="">
                      <span className="">
>>>>>>> dev
                        <img src="img/icon/like.png" alt="" />
                      </span>
                      <span className="item-count">3</span>
                    </Link>
                  </div>
                  <div className="header-acc-list  header-cart">
                    <Link to="/cart">
                      <span className="">
                        <img src="img/icon/cart.png" alt="" />
                      </span>
                      <span className="item-count">2</span>
                    </Link>
                  </div>

                  <div className="header-acc-list  header-cart">
                    <Link to="/signup" style={{ marginRight: "5px" }}>
                      <Button variant="light">Đăng Kí </Button>
                    </Link>
                    <Link to="/login">
                      <Button variant="success">Đăng Nhập </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom d-none">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4">
                <div className="categories_menu">
                  <div className="categories-title">
                    <h2 className="category-toggle">Đi chợ online</h2>
                  </div>
                  <div
                    className="categories-menu-toggle"
                    style={{ display: "none" }}
                  >
                    <ul>
                      <li>
                        <Link to="#">Fresh Meat</Link>
                      </li>
                      <li>
                        <Link to="#">Butter &amp; Eggs</Link>
                      </li>
                      <li>
                        <Link to="#">Milk</Link>
                      </li>
                      <li>
                        <Link to="#">Oil &amp; Vinegars</Link>
                      </li>
                      <li>
                        <Link to="#">Bread</Link>
                      </li>
                      <li>
                        <Link to="#">Jam &amp; Honey</Link>
                      </li>
                      <li>
                        <Link to="#">Frozen Food</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-8 text-center">
                <div className="main-menu">
                  <nav>
                    <ul>
                      <li>
                        <Link className="active" to="/">
                          Trang chủ
                        </Link>
                      </li>

                      <li>
                        <Link className="active" to="/product">
                          Sản phẩm<i className="fa fa-angle-down"></i>
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="product">Product 1</Link>
                          </li>
                          <li>
                            <Link to="product">Product 2</Link>
                          </li>
                          <li>
                            <Link to="product">Product 3</Link>
                          </li>
                          <li>
                            <Link to="product">Product 4</Link>
                          </li>
                          <li>
                            <Link to="product">Product 5</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/about">Giới thiệu</Link>
                      </li>
                      <li>
                        <Link to="/contact">Liên hệ</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
