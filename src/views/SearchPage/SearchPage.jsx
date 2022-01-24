import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';

function SearchPage(props) {
  let history = useHistory();
  const { key } = useParams();
  //console.log(key);
  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     const getProducts = () => {
  //       fetch(
  //         `https://localhost:44336/api/ShoppingCart/FindProductByKey?name=${key}&fromPrice=5000&toPrice=1000000&type=food`
  //       )
  //         .then((res) => res.json())
  //         .then((products) => setProducts(products));
  //       console.log(key);
  //       console.log(products);
  //     };
  //     getProducts();
  //   }, []);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `https://localhost:44336/api/ShoppingCart/FindProductByKey?name=${key}&fromPrice=5000&toPrice=1000000&type=food`
        );
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getProducts();
  }, []);

  const GetProductDetail = (id) => {
    console.log(id);
    localStorage.setItem('product_id', id);
    //history.push(`/products/detail/${id}`);
  };
  return (
    <>
      <section className="trendy-foods-area pd-tb-120">
        <div className="container">
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
                              <img src={product.image_link} alt="" />
                              <span className="stc-hover">
                                <Link
                                  to={`/products/detail/${product.Id}`}
                                  onClick={() => GetProductDetail(product.Id)}
                                >
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
                                {product.name}
                              </Link>
                              <Link to="#">{product.store_name}</Link>
                              <div className="price-wrap mt-2">
                                <span className="price">
                                  {product.sale_price} đ
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
