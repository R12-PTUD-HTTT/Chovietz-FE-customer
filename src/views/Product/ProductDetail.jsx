import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './ProductDetail.css';
import axios from 'axios';

function ProductDetail() {
  return (
    <>
      <section id="services" class="services section-bg">
        <div class="container-fluid">
          <div class="row row-sm">
            <div class="col-md-4 _boxzoom">
              <img src="https://images.elipsport.vn/anh-seo-tin-tuc/2021/1/25/co-nen-an-khoai-lang-luc-doi-hay-khong-tai-sao-1.jpg" />
            </div>
            <div class="col-md-6">
              <div class="_product-detail-content">
                <p class="_p-name"> Khoai lang </p>
                <div class="_p-price-box">
                  <div class="p-list">
                    <span>
                      {' '}
                      Giá gốc : <i class="fa fa-inr"></i> <del> 1399 </del>{' '}
                    </span>
                    <span class="price"> {`Chỉ còn 600đ`} </span>
                  </div>
                  <div class="_p-add-cart">
                    <div class="_p-qty">
                      <span>Số lượng</span>
                      <div
                        class="value-button decrease_"
                        id=""
                        value="Decrease Value"
                      >
                        -
                      </div>
                      <input type="number" name="qty" id="number" value="1" />
                      <div
                        class="value-button increase_"
                        id=""
                        value="Increase Value"
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div class="_p-features">
                    <span> Mô tả: </span>
                    Khoai lang xuất xứ ....
                  </div>
                  <form action="" method="post" accept-charset="utf-8">
                    <ul class="spe_ul"></ul>
                    <div class="_p-qty-and-cart">
                      <div class="_p-add-cart">
                        <button class="btn-theme btn buy-btn" tabindex="0">
                          <i class="fa fa-shopping-cart"></i> Mua ngay
                        </button>
                        <button class="btn-theme btn btn-success" tabindex="0">
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
