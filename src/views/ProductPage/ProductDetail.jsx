import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './ProductDetail.css';
import axios from 'axios';

function ProductDetail() {
  const AddtoCart = (id) => {
    console.log('call api');
    return axios
      .get(
        `https://localhost:44336/api/ShoppingCart/InsertShopCart?IdUser=61e2a00631f2514657b67942&IdProduct=${id}&quantity=${quantity}`
      )
      .then((response) => console.log(response));
  };
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const res = await axios
          .get(
            `https://localhost:44336/api/Product/${localStorage.getItem(
              'product_id'
            )}`
          )
          .then((res) => {
            setProduct(res.data);
            console.log(res.data);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log('Failed to get Product', error);
      }
    };
    fetchProductDetail();
  }, []);
  return (
    <>
      <section id="services" class="services section-bg">
        <div class="container-fluid">
          <div class="row row-sm">
            <div class="col-md-4 _boxzoom">
              <img src={product.image_link} />
            </div>
            <div class="col-md-6">
              <div class="_product-detail-content">
                <p class="_p-name">{product.name} </p>
                <div class="_p-price-box">
                  <div class="p-list">
                    <span>
                      {' '}
                      Giá gốc : <i class="fa fa-inr"></i>{' '}
                      <del> {product.price} </del>{' '}
                    </span>
                    <span class="price">Chỉ còn {product.sale_price} đ </span>
                  </div>
                  <div class="_p-add-cart">
                    <div class="_p-qty">
                      <span>Số lượng</span>
                      <div
                        class="value-button decrease_"
                        id=""
                        value="Decrease Value"
                        onClick={() => {
                          if (quantity === 1) setQuantity(quantity);
                          else setQuantity(quantity - 1);
                        }}
                      >
                        -
                      </div>
                      <input
                        type="number"
                        name="qty"
                        id="number"
                        value={quantity}
                      />
                      <div
                        class="value-button increase_"
                        id=""
                        value="Increase Value"
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div class="_p-features">
                    <span> Mô tả: </span>
                    {product.description}
                  </div>
                  <div class="_p-features">
                    <span> Cửa hàng: </span>
                    {product.store_name}
                  </div>
                  <form action="" method="post" accept-charset="utf-8">
                    <ul class="spe_ul"></ul>
                    <div class="_p-qty-and-cart">
                      <div class="_p-add-cart">
                        <button class="btn-theme btn buy-btn" tabindex="0">
                          <i class="fa fa-shopping-cart"></i> Mua ngay
                        </button>

                        <button
                          onClick={() => AddtoCart(product.Id)}
                          class="btn-theme btn btn-success"
                          tabindex="0"
                        >
                          <i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                        </button>
                        <input type="hidden" name="pid" value="18" />
                        <input type="hidden" name="price" value="850" />
                        <input type="hidden" name="url" value="" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
