import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <header class="header-area">
        <div class="header-top">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6">
                <div class="header-phone">
                  <p>
                    <i class="fa fa-phone"></i> Call us:
                    <Link to="tel:+01900220033">+01900220033</Link>
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 text-center text-lg-right text-xl-right">
                <div class="language-currency">
                  <ul>
                    <li class="currency">
                      <Link to="#">
                        Currency <i class="fa fa-caret-down"></i>
                      </Link>
                      <ul class="dropdown-currency">
                        <li>
                          <Link to="#">€ Euro</Link>
                        </li>
                        <li>
                          <Link to="#">£ Pound Sterling</Link>
                        </li>
                        <li>
                          <Link to="#">$ US Dollar</Link>
                        </li>
                      </ul>
                    </li>
                    <li class="language">
                      <Link to="#">
                        Language <i class="fa fa-caret-down"></i>
                      </Link>
                      <ul class="dropdown-language">
                        <li>
                          <Link to="#">French</Link>
                        </li>
                        <li>
                          <Link to="#">Spanish</Link>
                        </li>
                        <li>
                          <Link to="#">Russian</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="header-middle">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-4">
                <div class="logo-wrap">
                  <Link to="index.html">
                    <img src="img/logo/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-8 text-center">
                <div class="search-box">
                  <input type="text" placeholder="Search for product" />
                  <button type="submit">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-4 text-right">
                <div class="header-acc-wrap">
                  <div class="header-acc-list header-wishlist">
                    <Link to="wishlist.html">
                      <span class="">
                        <img src="img/icon/like.png" alt="" />
                      </span>
                      <span class="item-count">3</span>
                    </Link>
                  </div>
                  <div class="header-acc-list  header-cart">
                    <Link to="cart.html">
                      <span class="">
                        <img src="img/icon/cart.png" alt="" />
                      </span>
                      <span class="item-count">2</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="header-bottom d-none">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-3 col-md-4">
                <div class="categories_menu">
                  <div class="categories-title">
                    <h2 class="category-toggle">Shop by cattegory</h2>
                  </div>
                  <div
                    class="categories-menu-toggle"
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
              <div class="col-lg-6 col-md-8 text-center">
                <div class="main-menu">
                  <nav>
                    <ul>
                      <li>
                        <Link class="active" to="index.html">
                          Home
                        </Link>
                      </li>

                      <li>
                        <Link class="active" to="index.html">
                          Products<i class="fa fa-angle-down"></i>
                        </Link>
                        <ul class="sub-menu">
                          <li>
                            <Link to="product.html">Product 1</Link>
                          </li>
                          <li>
                            <Link to="product-2.html">Product 2</Link>
                          </li>
                          <li>
                            <Link to="product-3.html">Product 3</Link>
                          </li>
                          <li>
                            <Link to="product-4.html">Product 4</Link>
                          </li>
                          <li>
                            <Link to="product-5.html">Product 5</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="blog.html">Blog</Link>
                      </li>
                      <li>
                        <Link to="about.html">About</Link>
                      </li>
                      <li>
                        <Link to="contact.html">Contact</Link>
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
