import React from "react";
import AccountMenu from "./AccountMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailOrder from "./MyOrders/DetailOrder";
import ListOrder from "./MyOrders/ListOrder/ListOrder";
import MyOrders from "./MyOrders/MyOrders";

function AccountManagement(props) {
  return (
    <main>
      <section class="section-content" style={{ marginTop: "20px" }}>
        <div class="container">
          <div class="row">
            <aside class="col-lg-3">
              <AccountMenu />
            </aside>
            <main class="col-lg-9">
              <Router>
                <Switch>
                  <Route
                    path="/account/orders/my-orders"
                    component={MyOrders}
                  />
                  <Route
                    path="/account/orders/:id/detail"
                    component={DetailOrder}
                  />
                </Switch>
              </Router>
            </main>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AccountManagement;
