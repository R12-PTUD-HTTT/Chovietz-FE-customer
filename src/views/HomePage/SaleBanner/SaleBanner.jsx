import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

SaleBanner.propTypes = {};

function SaleBanner(props) {
  return (
    <>
      <section
        className="banner-area pd-tb-100 bg-img"
        data-background="img/banner/banner-bg-1.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-content">
                <h3>BLACK FRIDAYS !</h3>
                <h2>
                  SALE 50% OFF <br />
                  ALL VEGETABLE PRODUCTS
                </h2>
                <Link to="" className="boxed-btn">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SaleBanner;
