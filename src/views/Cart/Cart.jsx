import "./Cart.css";
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import RowItem from "./RowItem/RowItem";

const productList = [
  {
    name: "Lecture",
    weight: 2,
    price: 1.2,
  },
  {
    name: "Lecture",
    weight: 2,
    price: 1.2,
  },
  {
    name: "Lecture",
    weight: 2,
    price: 1.2,
  },
  {
    name: "Lecture",
    weight: 2,
    price: 1.2,
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
                        <label>Have coupon?</label>
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            name=""
                            placeholder="Coupon code"
                          />
                          <span class="input-group-append">
                            <button class="btn btn-primary">Apply</button>
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
                      <dt>Total price:</dt>
                      <dd class="text-right text-dark">USD 568</dd>
                    </dl>
                    <dl class="dlist-align">
                      <dt>Discount:</dt>
                      <dd class="text-right text-danger">USD 658</dd>
                    </dl>
                    <dl class="dlist-align">
                      <dt>Total:</dt>
                      <dd class="text-right  h5 text-success">
                        <strong>$1,650</strong>
                      </dd>
                    </dl>
                    <hr />
                    <p class="text-center mb-3">
                      <Link to="">
                        <img src="img/payments.png" height="26" />
                      </Link>
                      <Link to="" class="boxed-btn mb-3 mt-4">
                        Make Purchase
                      </Link>
                      <Link to="" class="boxed-btn btn-outline">
                        Make Purchase
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
