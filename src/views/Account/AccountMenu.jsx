import React from "react";
import { Link } from "react-router-dom";

function AccountMenu(props) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default AccountMenu;
