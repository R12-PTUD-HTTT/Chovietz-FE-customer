import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import RowItem from './RowItem/RowItem';

const productList = [
  {
    name: 'Lecture',
    weight: 2,
    price: 1.2,
    quantity: 1,
  },
  {
    name: 'Lecture',
    weight: 3,
    price: 1.2,
    quantity: 2,
  },
  {
    name: 'Lecture',
    weight: 2,
    price: 1.2,
    quantity: 4,
  },
  {
    name: 'Lecture',
    weight: 2,
    price: 1.2,
    quantity: 1,
  },
];
function Cart(props) {
  return (
    <>
      <main>
        <section class="section-content pd-tb-150">
          <div class="container">
            <div class="row">
              <main class="col-lg-9">
                <div class="">
                  <table class="table table-borderless table-shopping-cart">
                    <thead class="text-muted mb-3">
                      <tr class="small text-uppercase">
                        <th scope="col" class="sm-w">
                          Product
                        </th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Subtotal</th>

                        <th scope="col" class="text-right"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {productList?.length > 0 &&
                        productList?.map((product) => (
                          <RowItem product={product} />
                        ))}
                    </tbody>
                  </table>
                </div>
                {/* card.// */}
              </main>
              {/* col.// */}
              <aside class="col-lg-3">
                <div class="card coupon-card mb-4">
                  <div class="card-body">
                    <form>
                      <div class="form-group">
                        <label>Nhập Mã Giảm giá?</label>
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            name=""
                            placeholder="Mã giảm giá"
                          />
                          <span class="input-group-append">
                            <button class="btn btn-primary">Áp dụng</button>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* card-body.// */}
                </div>
                {/* card .// */}
                <div class="card payment-card">
                  <div class="card-body">
                    <dl class="dlist-align">
                      <dt>Tổng:</dt>
                      <dd class="text-right  h5 text-success">
                        <strong>$jhjS</strong>
                      </dd>
                    </dl>
                    <hr />
                    <p class="text-center mb-3">
                      <Link to="" class="boxed-btn mb-3 mt-4">
                        Đặt hàng
                      </Link>
                    </p>
                  </div>
                  {/* card-body.// */}
                </div>
                {/* card .// */}
              </aside>
              {/* col.// */}
            </div>
          </div>
          {/* container .//  */}
        </section>
      </main>
    </>
  );
}

export default Cart;
