import React from "react";
import { Link } from "react-router-dom";
import OrderItem from "./OrderItem";
function ListOrder(props) {
  return (
    <React.Fragment>
      <div class="">
        {orders.map((order, index) => (
          <Link to={`/account/orders/${order._id}/detail`}>
            <OrderItem order={order} key={index} />
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
}

export default ListOrder;
const orders = [
  {
    _id: "1",
    customer: {
      customer_id: 1,
      customer_name: "VanHai",
    },
    delivery_address: "Tp HCM",
    shop: {
      _id: "2",
      store_name: "FPT Store",
    },
    shipper: {
      _id: "2",
      name: "Vo Van Duong",
    },
    status: "Shipping",
    payment_type: "COD",
    is_paid: false,
    total_cost: 120000,
    created_Date: "12-12-2021",
    products: [
      {
        _id: "1",
        name: "Sach Van Hoc",
        price: 50000,
        quantity: 1,
        description: "Sach kho 12x12, 120 trang, NXB Kim DOng",
      },
      {
        _id: "2",
        name: "Sach Toan Hoc",
        price: 70000,
        quantity: 1,
        description: "Sach kho 12x12, 120 trang, NXB Kim DOng",
      },
    ],
  },
  {
    _id: "12",
    customer: {
      customer_id: 1,
      customer_name: "VanHai",
    },
    delivery_address: "Tp HCM",
    shop: {
      _id: "2",
      store_name: "FPT Store",
    },
    shipper: {
      _id: "2",
      name: "Vo Van Duong",
    },
    status: "Shipping",
    payment_type: "COD",
    is_paid: false,
    total_cost: 120000,
    created_Date: "12-12-2021",
    products: [
      {
        _id: "1",
        name: "Sach Van Hoc 2",
        price: 50000,
        quantity: 1,
        description: "Sach kho 12x12, 120 trang, NXB Kim DOng",
      },
    ],
  },
];
