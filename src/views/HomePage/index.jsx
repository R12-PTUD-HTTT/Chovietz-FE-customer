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
        <section class="hero-area">
          <div class="hero-carousel">
            <div class="single-hero d-flex align-items-center text-center">
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2 text-center">
                    <div class="hero-content">
                      <h3>Organic Food</h3>
                      <h2>
                        Looking for <br />
                        the fresh Organic Food
                      </h2>
                      <a href="" class="boxed-btn">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="focus-area pd-tb-120">
          <div class="container">
            <div class="row text-center">
              <div class="col-md-3">
                <article class="card card-body single-focus">
                  <figure class="text-center">
                    <span class="icon-md mb-2">
                      <img src="img/focus/f-car.png" alt="" />
                    </span>
                    <figcaption class="pt-4">
                      <h5 class="title mb-3">Free Shipping</h5>
                      <p>Free shipping for all US order</p>
                    </figcaption>
                  </figure>
                </article>
              </div>

              <div class="col-md-3">
                <article class="card card-body single-focus">
                  <figure class="text-center">
                    <span class="icon-md mb-2">
                      <img src="img/focus/f-headphone.png" alt="" />
                    </span>
                    <figcaption class="pt-4">
                      <h5 class="title mb-3">Support 24/7</h5>
                      <p>We support 24h a day</p>
                    </figcaption>
                  </figure>
                </article>
              </div>

              <div class="col-md-3">
                <article class="card card-body single-focus">
                  <figure class="text-center">
                    <span class="icon-md mb-2">
                      <img src="img/focus/f-money.png" alt="" />
                    </span>
                    <figcaption class="pt-4">
                      <h5 class="title mb-3">100% Money Back</h5>
                      <p>You have 30 days to return</p>
                    </figcaption>
                  </figure>
                </article>
              </div>

              <div class="col-md-3">
                <article class="card card-body single-focus">
                  <figure class="text-center">
                    <span class="icon-md mb-2">
                      <img src="img/focus/f-security.png" alt="" />
                    </span>
                    <figcaption class="pt-4">
                      <h5 class="title mb-3">Payment Secure</h5>
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

        <section class="brand-carousel-area pd-tb-150">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="brand-carousel-wrap">
                  <div class="brand-carousel owl-carousel">
                    <div class="single-brand">
                      <img src="img/brand/brand-1.png" alt="" />
                    </div>
                    <div class="single-brand">
                      <img src="img/brand/brand-2.png" alt="" />
                    </div>
                    <div class="single-brand">
                      <img src="img/brand/brand-3.png" alt="" />
                    </div>
                    <div class="single-brand">
                      <img src="img/brand/brand-4.png" alt="" />
                    </div>
                    <div class="single-brand">
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
