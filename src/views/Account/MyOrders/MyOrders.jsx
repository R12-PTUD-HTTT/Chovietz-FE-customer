import React from "react";
import PropTypes from "prop-types";
import AccountMenu from "../AccountMenu";
import ListOrder from "./ListOrder/ListOrder";

function MyOrders({}) {
  return (
    <main>
      <h2>Đơn hàng của tôi</h2>
      <ListOrder />
    </main>
  );
}

export default MyOrders;
