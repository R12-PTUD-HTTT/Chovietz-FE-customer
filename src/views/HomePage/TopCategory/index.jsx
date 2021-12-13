import React from "react";
import { Link } from "react-router-dom";

TopCategory.propTypes = {};

function TopCategory(props) {
  return (
    <>
      <section class="top-categories-area pd-tb-100 bg-soft-green">
        <div class="container">
          <header class="section-heading text-center">
            <h3 class="section-title">Top Categories</h3>
          </header>
          <div class="row">
            <div class="col-lg-12">
              <div class="top-categories-carousel owl-carousel">
                <Link to="" class="single-top-category text-center">
                  <span class="top-category-image mb-2">
                    <img src="img/category/cat-fruits.png" alt="" />
                  </span>
                  <span class="top-category-name">Fruits</span>
                </Link>

                <Link to="" class="single-top-category text-center">
                  <span class="top-category-image mb-2">
                    <img src="img/category/cat-cakes.png" alt="" />
                  </span>
                  <span class="top-category-name">Cakes</span>
                </Link>

                <Link to="" class="single-top-category text-center">
                  <span class="top-category-image mb-2">
                    <img src="img/category/cat-drinks.png" alt="" />
                  </span>
                  <span class="top-category-name">Drinks</span>
                </Link>

                <Link to="" class="single-top-category text-center">
                  <span class="top-category-image mb-2">
                    <img src="img/category/cat-eggs.png" alt="" />
                  </span>
                  <span class="top-category-name">Eggs</span>
                </Link>

                <Link to="" class="single-top-category text-center">
                  <span class="top-category-image mb-2">
                    <img src="img/category/cat-meats.png" alt="" />
                  </span>
                  <span class="top-category-name">Meats</span>
                </Link>

                <Link to="" class="single-top-category text-center">
                  <span class="top-category-image mb-2">
                    <img src="img/category/cat-vegetables.png" alt="" />
                  </span>
                  <span class="top-category-name">Vegetables</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="offers-area pd-t-150">
        <div class="container">
          <div class="row offers-area-full-wrap align-items-center">
            <div class="col-lg-10">
              <div class="offers-carousel-wrap">
                <div class="offers-carousel">
                  <div class="single-offer">
                    <div class="single-food offer-item">
                      <figure class="card card-product-grid">
                        <div class="row align-items-center">
                          <div class="col-md-4">
                            <div class="img-wrap">
                              <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                              </span>
                              <img src="img/trendy-foods/tf-1..png" alt="" />
                              <span class="stc-hover">
                                <Link to="#">
                                  <i class="fa fa-search"></i>
                                </Link>
                                <Link to="#">
                                  <i class="fa fa-heart"></i>
                                </Link>
                                <Link to="#">
                                  <i class="fa fa-shopping-cart"></i>
                                </Link>
                              </span>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <figcaption class="info-wrap">
                              <Link to="#" class="title mb-3">
                                Lemon
                              </Link>
                              <div class="price-wrap mt-2">
                                <span class="price">$25.00</span>
                                <del class="price-old">$28.55</del>
                              </div>
                              <div class="progress-wrap mb-4">
                                <div class="mt-3 mb-2">
                                  <span>Available: 237</span>
                                  <span class="float-right">
                                    Already Sold: 23
                                  </span>
                                </div>
                                <div class="progress">
                                  <div
                                    class="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div class="clockdiv">
                                <div data-countdown="2021/03/01">
                                  <span class="cdown day">
                                    133 <p>Days</p>
                                  </span>
                                  <span class="cdown hour">
                                    6 <p>Hours</p>
                                  </span>
                                  <span class="cdown minutes">
                                    48 <p>Mins</p>
                                  </span>
                                  <span class="cdown second">
                                    30 <p>Sec</p>
                                  </span>
                                </div>
                              </div>
                            </figcaption>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>

                  <div class="single-offer">
                    <div class="single-food offer-item">
                      <figure class="card card-product-grid">
                        <div class="row align-items-center">
                          <div class="col-md-4">
                            <div class="img-wrap">
                              <span class="topbar">
                                <span class="badge badge-success">
                                  {" "}
                                  20% Offer{" "}
                                </span>
                              </span>
                              <img src="img/trendy-foods/tf-2..png" alt="" />
                              <span class="stc-hover">
                                <Link to="#">
                                  <i class="fa fa-search"></i>
                                </Link>
                                <Link to="#">
                                  <i class="fa fa-heart"></i>
                                </Link>
                                <Link to="#">
                                  <i class="fa fa-shopping-cart"></i>
                                </Link>
                              </span>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <figcaption class="info-wrap">
                              <Link to="#" class="title mb-3">
                                Organic Tomato
                              </Link>
                              <div class="price-wrap mt-2">
                                <span class="price">$25.00</span>
                                <del class="price-old">$28.55</del>
                              </div>
                              <div class="progress-wrap mb-4">
                                <div class="mt-3 mb-2">
                                  <span>Available: 237</span>
                                  <span class="float-right">
                                    Already Sold: 23
                                  </span>
                                </div>
                                <div class="progress">
                                  <div
                                    class="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div class="clockdiv">
                                <div data-countdown="2021/03/01">
                                  <span class="cdown day">
                                    133 <p>Days</p>
                                  </span>
                                  <span class="cdown hour">
                                    6 <p>Hours</p>
                                  </span>
                                  <span class="cdown minutes">
                                    48 <p>Mins</p>
                                  </span>
                                  <span class="cdown second">
                                    30 <p>Sec</p>
                                  </span>
                                </div>
                              </div>
                            </figcaption>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>

                  <div class="single-offer">
                    <div class="single-food offer-item">
                      <figure class="card card-product-grid">
                        <div class="row align-items-center">
                          <div class="col-md-4">
                            <div class="img-wrap">
                              <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                              </span>
                              <img src="img/trendy-foods/tf-3..png" alt="" />
                              <span class="stc-hover">
                                <Link to="#">
                                  <i class="fa fa-search"></i>
                                </Link>
                                <Link to="#">
                                  <i class="fa fa-heart"></i>
                                </Link>
                                <Link to="#">
                                  <i class="fa fa-shopping-cart"></i>
                                </Link>
                              </span>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <figcaption class="info-wrap">
                              <Link to="#" class="title mb-3">
                                Lemon
                              </Link>
                              <div class="price-wrap mt-2">
                                <span class="price">$25.00</span>
                                <del class="price-old">$28.55</del>
                              </div>
                              <div class="progress-wrap mb-4">
                                <div class="mt-3 mb-2">
                                  <span>Available: 237</span>
                                  <span class="float-right">
                                    Already Sold: 23
                                  </span>
                                </div>
                                <div class="progress">
                                  <div
                                    class="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div class="clockdiv">
                                <div data-countdown="2021/03/01">
                                  <span class="cdown day">
                                    133 <p>Days</p>
                                  </span>
                                  <span class="cdown hour">
                                    6 <p>Hours</p>
                                  </span>
                                  <span class="cdown minutes">
                                    48 <p>Mins</p>
                                  </span>
                                  <span class="cdown second">
                                    30 <p>Sec</p>
                                  </span>
                                </div>
                              </div>
                            </figcaption>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="offers-carousel-thumbnail d-none d-lg-block d-xl-block ">
                <div class="single-offer-thumbnail">
                  <div class="img-wrap">
                    <img src="img/trendy-foods/tf-1..png" alt="" />
                  </div>
                </div>

                <div class="single-offer-thumbnail">
                  <div class="img-wrap">
                    <img src="img/trendy-foods/tf-2..png" alt="" />
                  </div>
                </div>

                <div class="single-offer-thumbnail">
                  <div class="img-wrap">
                    <img src="img/trendy-foods/tf-3..png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopCategory;
