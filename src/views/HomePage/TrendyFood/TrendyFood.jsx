import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    nameProduct: "lemons",
    oldPrice: 12000,
    salePrice: 12000,
  },
  {
    id: 2,
    nameProduct: "lemons",
    oldPrice: 12000,
    salePrice: 12000,
  },
  {
    id: 3,
    nameProduct: "lemons",
    oldPrice: 12000,
    salePrice: 12000,
  },
  {
    id: 4,
    nameProduct: "lemons",
    oldPrice: 12000,
    salePrice: 12000,
  },
  {
    id: 5,
    nameProduct: "lemons",
    oldPrice: 12000,
    salePrice: 12000,
  },
  {
    id: 6,
    nameProduct: "lemons",
    oldPrice: 12000,
    salePrice: 12000,
  },
  {
    id: 6,
    nameProduct: "lemons",
    oldPrice: 12000,
    salePrice: 12000,
  },
  {
    id: 6,
    nameProduct: "lemons",
    oldPrice: 12000,
    salePrice: 12000,
  },
];
function TrendyFood(props) {
  return (
    <>
      <section class="trendy-foods-area pd-tb-120">
        <div class="container">
          <header class="section-heading text-center">
            <h3 class="section-title">Trendy Foods</h3>
          </header>
          <div class="row">
            <div class="col-lg-12">
              <div class="trendy-foods-filtering">
                <div class="button-group filter-button-group text-center">
                  <button class="active" data-filter="*">
                    All
                  </button>
                  <button data-filter=".featured">Featured</button>
                  <button data-filter=".new">New</button>
                  <button data-filter=".onsale">Onsell</button>
                  <button data-filter=".deal">Deal</button>
                </div>
                <div class="row grid">
                  {products?.length &&
                    products.map((product) => (
                      <div class="col-md-3 col-sm-6 featured grid-item">
                        <div class="single-food">
                          <figure class="card card-product-grid">
                            <div class="img-wrap mb-3">
                              <span class="topbar">
                                <span class="badge badge-success"> NEW </span>
                              </span>
                              <img src="img/trendy-foods/tf-1.png" alt="" />
                              <span class="stc-hover">
                                <Link to="">
                                  <i class="fa fa-search"></i>
                                </Link>
                                <Link to="">
                                  <i class="fa fa-heart"></i>
                                </Link>
                                <Link to="">
                                  <i class="fa fa-shopping-cart"></i>
                                </Link>
                              </span>
                            </div>
                            <figcaption class="info-wrap">
                              <Link to="#" class="title mb-3">
                                {product.nameProduct}
                              </Link>
                              <div class="price-wrap mt-2">
                                <span class="price">{product.salePrice} đ</span>
                                <del class="price-old">
                                  {product.oldPrice} đ
                                </del>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TrendyFood;
