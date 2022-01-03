import React, { useEffect } from "react";
import { getCustomer } from "../../api/product";
import SaleBanner from "./SaleBanner/SaleBanner";
import SaleProduct from "./SaleProduct/SaleProduct";
import TopCategory from "./TopCategory";
import TrendyFood from "./TrendyFood/TrendyFood";

function HomePage({}) {
  // useEffect(() => {
  //   try {
  //     const res = getCustomer();
  //   } catch (error) {
  //   }
  // }, []);
  return (
    <>
      <main>
        <section className="hero-area">
          <div className="hero-carousel">
            <div className="single-hero d-flex align-items-center text-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 text-center">
                    <div className="hero-content">
                      <h3>Organic Food</h3>
                      <h2>
                        Looking for <br />
                        the fresh Organic Food
                      </h2>
                      <a href="" className="boxed-btn">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="focus-area pd-tb-120">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-3">
                <article className="card card-body single-focus">
                  <figure className="text-center">
                    <span className="icon-md mb-2">
                      <img src="img/focus/f-car.png" alt="" />
                    </span>
                    <figcaption className="pt-4">
                      <h5 className="title mb-3">Free Shipping</h5>
                      <p>Free shipping for all US order</p>
                    </figcaption>
                  </figure>
                </article>
              </div>

              <div className="col-md-3">
                <article className="card card-body single-focus">
                  <figure className="text-center">
                    <span className="icon-md mb-2">
                      <img src="img/focus/f-headphone.png" alt="" />
                    </span>
                    <figcaption className="pt-4">
                      <h5 className="title mb-3">Support 24/7</h5>
                      <p>We support 24h a day</p>
                    </figcaption>
                  </figure>
                </article>
              </div>

              <div className="col-md-3">
                <article className="card card-body single-focus">
                  <figure className="text-center">
                    <span className="icon-md mb-2">
                      <img src="img/focus/f-money.png" alt="" />
                    </span>
                    <figcaption className="pt-4">
                      <h5 className="title mb-3">100% Money Back</h5>
                      <p>You have 30 days to return</p>
                    </figcaption>
                  </figure>
                </article>
              </div>

              <div className="col-md-3">
                <article className="card card-body single-focus">
                  <figure className="text-center">
                    <span className="icon-md mb-2">
                      <img src="img/focus/f-security.png" alt="" />
                    </span>
                    <figcaption className="pt-4">
                      <h5 className="title mb-3">Payment Secure</h5>
                      <p>We ensure secure payment</p>
                    </figcaption>
                  </figure>
                </article>
              </div>
            </div>
          </div>
        </section>

        <TopCategory />
        <TrendyFood />
        <SaleBanner />
        <SaleProduct />

        <section className="brand-carousel-area pd-tb-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="brand-carousel-wrap">
                  <div className="brand-carousel owl-carousel">
                    <div className="single-brand">
                      <img src="img/brand/brand-1.png" alt="" />
                    </div>
                    <div className="single-brand">
                      <img src="img/brand/brand-2.png" alt="" />
                    </div>
                    <div className="single-brand">
                      <img src="img/brand/brand-3.png" alt="" />
                    </div>
                    <div className="single-brand">
                      <img src="img/brand/brand-4.png" alt="" />
                    </div>
                    <div className="single-brand">
                      <img src="img/brand/brand-5.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
