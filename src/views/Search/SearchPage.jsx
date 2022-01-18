import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    nameProduct: 'lemons',
    price: 12000,
    salePrice: 12000,
  },
  {
    id: 2,
    nameProduct: 'lemons',
    price: 12000,
    salePrice: 12000,
  },
  {
    id: 3,
    nameProduct: 'lemons',
    price: 12000,
    salePrice: 12000,
  },
  {
    id: 4,
    nameProduct: 'lemons',
    price: 12000,
    salePrice: 12000,
  },
  {
    id: 5,
    nameProduct: 'lemons',
    price: 12000,
    salePrice: 12000,
  },
  {
    id: 6,
    nameProduct: 'lemons',
    price: 12000,
    salePrice: 12000,
  },
  {
    id: 6,
    nameProduct: 'lemons',
    price: 12000,
    salePrice: 12000,
  },
  {
    id: 6,
    nameProduct: 'lemons',
    price: 12000,
    salePrice: 12000,
  },
  {
    id: 6,
    nameProduct: 'lemons',
    price: 12000,
    salePrice: 12000,
  },
];
function SearchPage(props) {
  return (
    <>
      <section className="trendy-foods-area pd-tb-120">
        <div className="container">
          <div>
            Kết quả tìm kiếm cho từ khóa
            <p>{}</p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="trendy-foods-filtering">
                <div className="row grid">
                  {products?.length &&
                    products.map((product, index) => (
                      <div
                        className="col-md-3 col-sm-6 featured grid-item"
                        key={index}
                      >
                        <div className="single-food">
                          <figure className="card card-product-grid">
                            <div className="img-wrap mb-3">
                              <span className="topbar">
                                <span className="badge badge-success">
                                  {' '}
                                  NEW{' '}
                                </span>
                              </span>
                              <img src="img/trendy-foods/tf-1.png" alt="" />
                              <span className="stc-hover">
                                <Link to="">
                                  <i className="fa fa-search"></i>
                                </Link>
                                <Link to="">
                                  <i className="fa fa-heart"></i>
                                </Link>
                                <Link to="">
                                  <i className="fa fa-shopping-cart"></i>
                                </Link>
                              </span>
                            </div>
                            <figcaption className="info-wrap">
                              <Link to="#" className="title mb-3">
                                {product.nameProduct}
                              </Link>
                              <div className="price-wrap mt-2">
                                <span className="price">
                                  {product.salePrice} đ
                                </span>
                                <del className="price-old">
                                  {product.price} đ
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

export default SearchPage;
