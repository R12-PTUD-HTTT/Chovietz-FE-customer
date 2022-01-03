import React from "react";
import { Link } from "react-router-dom";

TopCategory.propTypes = {};

function TopCategory(props) {
  return (
    <>
      <section className="top-categories-area pd-tb-100 bg-soft-green">
        <div className="container">
          <header className="section-heading text-center">
            <h3 className="section-title">Top Categories</h3>
          </header>
          <div className="row">
            <div className="col-lg-12">
              <div className="top-categories-carousel owl-carousel">
                <Link to="" className="single-top-category text-center">
                  <span className="top-category-image mb-2">
                    <img src="img/category/cat-fruits.png" alt="" />
                  </span>
                  <span className="top-category-name">Fruits</span>
                </Link>

                <Link to="" className="single-top-category text-center">
                  <span className="top-category-image mb-2">
                    <img src="img/category/cat-cakes.png" alt="" />
                  </span>
                  <span className="top-category-name">Cakes</span>
                </Link>

                <Link to="" className="single-top-category text-center">
                  <span className="top-category-image mb-2">
                    <img src="img/category/cat-drinks.png" alt="" />
                  </span>
                  <span className="top-category-name">Drinks</span>
                </Link>

                <Link to="" className="single-top-category text-center">
                  <span className="top-category-image mb-2">
                    <img src="img/category/cat-eggs.png" alt="" />
                  </span>
                  <span className="top-category-name">Eggs</span>
                </Link>

                <Link to="" className="single-top-category text-center">
                  <span className="top-category-image mb-2">
                    <img src="img/category/cat-meats.png" alt="" />
                  </span>
                  <span className="top-category-name">Meats</span>
                </Link>

                <Link to="" className="single-top-category text-center">
                  <span className="top-category-image mb-2">
                    <img src="img/category/cat-vegetables.png" alt="" />
                  </span>
                  <span className="top-category-name">Vegetables</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offers-area pd-t-150">
        <div className="container">
          <div className="row offers-area-full-wrap align-items-center">
            <div className="col-lg-10">
              <div className="offers-carousel-wrap">
                <div className="offers-carousel">
                  <div className="single-offer">
                    <div className="single-food offer-item">
                      <figure className="card card-product-grid">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="img-wrap">
                              <span className="topbar">
                                <span className="badge badge-success">
                                  {" "}
                                  NEW{" "}
                                </span>
                              </span>
                              <img src="img/trendy-foods/tf-1..png" alt="" />
                              <span className="stc-hover">
                                <Link to="#">
                                  <i className="fa fa-search"></i>
                                </Link>
                                <Link to="#">
                                  <i className="fa fa-heart"></i>
                                </Link>
                                <Link to="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </Link>
                              </span>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <figcaption className="info-wrap">
                              <Link to="#" className="title mb-3">
                                Lemon
                              </Link>
                              <div className="price-wrap mt-2">
                                <span className="price">$25.00</span>
                                <del className="price-old">$28.55</del>
                              </div>
                              <div className="progress-wrap mb-4">
                                <div className="mt-3 mb-2">
                                  <span>Available: 237</span>
                                  <span className="float-right">
                                    Already Sold: 23
                                  </span>
                                </div>
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div className="clockdiv">
                                <div data-countdown="2021/03/01">
                                  <span className="cdown day">
                                    133 <p>Days</p>
                                  </span>
                                  <span className="cdown hour">
                                    6 <p>Hours</p>
                                  </span>
                                  <span className="cdown minutes">
                                    48 <p>Mins</p>
                                  </span>
                                  <span className="cdown second">
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

                  <div className="single-offer">
                    <div className="single-food offer-item">
                      <figure className="card card-product-grid">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="img-wrap">
                              <span className="topbar">
                                <span className="badge badge-success">
                                  {" "}
                                  20% Offer{" "}
                                </span>
                              </span>
                              <img src="img/trendy-foods/tf-2..png" alt="" />
                              <span className="stc-hover">
                                <Link to="#">
                                  <i className="fa fa-search"></i>
                                </Link>
                                <Link to="#">
                                  <i className="fa fa-heart"></i>
                                </Link>
                                <Link to="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </Link>
                              </span>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <figcaption className="info-wrap">
                              <Link to="#" className="title mb-3">
                                Organic Tomato
                              </Link>
                              <div className="price-wrap mt-2">
                                <span className="price">$25.00</span>
                                <del className="price-old">$28.55</del>
                              </div>
                              <div className="progress-wrap mb-4">
                                <div className="mt-3 mb-2">
                                  <span>Available: 237</span>
                                  <span className="float-right">
                                    Already Sold: 23
                                  </span>
                                </div>
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div className="clockdiv">
                                <div data-countdown="2021/03/01">
                                  <span className="cdown day">
                                    133 <p>Days</p>
                                  </span>
                                  <span className="cdown hour">
                                    6 <p>Hours</p>
                                  </span>
                                  <span className="cdown minutes">
                                    48 <p>Mins</p>
                                  </span>
                                  <span className="cdown second">
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

                  <div className="single-offer">
                    <div className="single-food offer-item">
                      <figure className="card card-product-grid">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="img-wrap">
                              <span className="topbar">
                                <span className="badge badge-success">
                                  {" "}
                                  NEW{" "}
                                </span>
                              </span>
                              <img src="img/trendy-foods/tf-3..png" alt="" />
                              <span className="stc-hover">
                                <Link to="#">
                                  <i className="fa fa-search"></i>
                                </Link>
                                <Link to="#">
                                  <i className="fa fa-heart"></i>
                                </Link>
                                <Link to="#">
                                  <i className="fa fa-shopping-cart"></i>
                                </Link>
                              </span>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <figcaption className="info-wrap">
                              <Link to="#" className="title mb-3">
                                Lemon
                              </Link>
                              <div className="price-wrap mt-2">
                                <span className="price">$25.00</span>
                                <del className="price-old">$28.55</del>
                              </div>
                              <div className="progress-wrap mb-4">
                                <div className="mt-3 mb-2">
                                  <span>Available: 237</span>
                                  <span className="float-right">
                                    Already Sold: 23
                                  </span>
                                </div>
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                              <div className="clockdiv">
                                <div data-countdown="2021/03/01">
                                  <span className="cdown day">
                                    133 <p>Days</p>
                                  </span>
                                  <span className="cdown hour">
                                    6 <p>Hours</p>
                                  </span>
                                  <span className="cdown minutes">
                                    48 <p>Mins</p>
                                  </span>
                                  <span className="cdown second">
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
            <div className="col-lg-2">
              <div className="offers-carousel-thumbnail d-none d-lg-block d-xl-block ">
                <div className="single-offer-thumbnail">
                  <div className="img-wrap">
                    <img src="img/trendy-foods/tf-1..png" alt="" />
                  </div>
                </div>

                <div className="single-offer-thumbnail">
                  <div className="img-wrap">
                    <img src="img/trendy-foods/tf-2..png" alt="" />
                  </div>
                </div>

                <div className="single-offer-thumbnail">
                  <div className="img-wrap">
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
