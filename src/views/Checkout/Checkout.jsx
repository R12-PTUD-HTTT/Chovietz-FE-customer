
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./checkout.css";
import { Link } from "react-router-dom";
import { selectUserId } from "../../redux/selectors/userSelector";
import { getUserInfor } from "../../api/user";
import { submitOrder } from "../../api/order";
import { TYPE_NEW_ORDER, WAIT_CONFIRM } from "../../constants/orderConstants";
import ChangeReceiverInfor from "../../component/customer/ChangeReceiverInfor";

const orderTemp = {
  customer: {
    id: 1,
    name: "John",
  },
  receiver: {
    name: "Nguyen Van A",
    phone_number: "0439243534",
    city: "TP Hồ Chí Minh",
    district: "Thủ Đức",
    ward: "Linh Trung",
    street: "60 đường Hoàng Diệu",
  },
  total_price: 150000,
  cart: [
    {
      shop: {
        id: "61cf2d142d94273c7a180efb",
        store_name: "FPT Shop",
        phone_number: "0364872648",
      },
      total_price: 100000,
      product: [
        {
          _id: "61e03382f37afea1e5e2b8d5",
          name: "Xoài",
          price: 12000,
          sale_price: 10000,
          image_link:
            "https://freshfruitvietnam.vn/upload/images/2020/03/331x331-1585646976-single_product1-Xoai2.jpg",
          quantity: 5,
        },
        {
          _id: "61e03382f37afea1e5e2b8d5",
          name: "Xoài",
          price: 12000,
          sale_price: 10000,
          image_link:
            "https://freshfruitvietnam.vn/upload/images/2020/03/331x331-1585646976-single_product1-Xoai2.jpg",
          quantity: 5,
        },
      ],
    },
    {
      shop: {
        id: "61cf2d142d94273c7a180efb",
        store_name: "FPT Shop",
        phone_number: "0364872648",
      },
      total_price: 50000,
      product: [
        {
          _id: "61e03382f37afea1e5e2b8d5",
          name: "Xoài",
          price: 12000,
          sale_price: 10000,
          image_link:
            "https://freshfruitvietnam.vn/upload/images/2020/03/331x331-1585646976-single_product1-Xoai2.jpg",
          quantity: 5,
        },
      ],
    },
  ],
};

export default function Checkout() {
  const userId = useSelector(selectUserId);
  const [order, setOrder] = useState({});
  const defaultDeliveryCost = 10000;
  useEffect(() => {
    async function fetchUserDetail() {
      try {
        const { data, status } = await getUserInfor(userId);
        if (status === 200) {
          setOrder({
            customer: {
              id: data.id,
              username: data.username,
              name: data.name,
              email: data.email,
              receiver: data.receiver,
            },
            receiver: data.receiver_infor,
            total_price: orderTemp.total_price,
            cart: orderTemp.cart,
            payment_type: "COD",
          });
        }
      } catch {}
    }
    userId && fetchUserDetail();
  }, [userId]);
  const handleChangeReceiver = () => {};
  const handleSubmitOrder = () => {
    const successOrder = [];
    try {
      order.cart.map(async (smallItem, index) => {
        let smallOrder = {
          customer: order.customer,
          receiver: order.receiver,
          total_price: smallItem.total_price,
          shop: smallItem.shop,
          product: smallItem.product,
          shipper: null,
          status: WAIT_CONFIRM.value,
          typeOrder: TYPE_NEW_ORDER,
        };
        console.log(JSON.stringify(smallOrder));
        const { status } = await submitOrder(smallOrder);
        if (status === 200) {
          successOrder.push(index);
        } else {
          return;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container my-5 ">
      <div className="">
        <ChangeReceiverInfor />
      </div>
      <div className="row justify-content-center ">
        <div className="col-xl-12">
          <div className="card shadow-lg ">
            <div className="row mx-auto justify-content-center text-center">
              <div className="col-12 mt-3 ">
                <nav aria-label="breadcrumb" className="second ">
                  <ol className="breadcrumb indigo lighten-6 first ">
                    <li className="breadcrumb-item font-weight-bold ">
                      <Link className="black-text text-uppercase " to="#">
                        <span className="mr-md-3 mr-1">BACK TO SHOP</span>
                      </Link>
                      <i
                        className="fa fa-angle-double-right "
                        aria-hidden="true"
                      ></i>
                    </li>
                    <li className="breadcrumb-item font-weight-bold">
                      <Link className="black-text text-uppercase" to="#">
                        <span className="mr-md-3 mr-1">Cart</span>
                      </Link>
                      <i
                        className="fa fa-angle-double-right text-uppercase "
                        aria-hidden="true"
                      ></i>
                    </li>
                    <li className="breadcrumb-item font-weight-bold">
                      <Link
                        className="black-text text-uppercase active-2"
                        to="#"
                      >
                        <span className="mr-md-3 mr-1">CHECKOUT</span>
                      </Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <h2 className="card-title my-2 ml-4r space">Checkout</h2>
            <div className="row justify-content-around text-dark">
              <div className="col-md-5">
                <div className="card border-0">
                  <div className="card-header pb-0">
                    <p className="card-text mt-4 space">

                      THÔNG TIN GIAO HÀNG{" "}
                      <Link
                        className=" small ml-3 text-primary"
                        to="#"
                        onClick={handleChangeReceiver}
                      >
                        Chỉnh sửa
                      </Link>
                    </p>
                  </div>

                  {!!order.receiver && (
                    <div className="card-body">
                      <div className="row justify-content-between">
                        <div className="col-auto mt-0">
                          <p className="mb-1">
                            <b>Người nhận hàng: {order.receiver.name}</b>
                          </p>
                          <p className="mb-1">
                            <b>SDT: {order.receiver.phone_number}</b>
                          </p>
                          <p className="mb-1">
                            <b>
                              Địa chỉ: {order.receiver.street},{" "}
                              {order.receiver.ward},{order.receiver.district},{" "}
                              {order.receiver.city}
                            </b>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="card border-0">
                  <div className="card-header pb-0">
                    <p className="card-text mt-4 space">
                      PHƯƠNG THỨC THANH TOÁN
                    </p>
                  </div>
                  <div className="card-body">
                    <div className="row justify-content-between">
                      <div className="col-auto mt-0">
                        <div className="form-check form-check-inline border border-success rounded-pill px-3 py-2 mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label
                            className="form-check-label ml-3"
                            htmlFor="inlineRadio1"
                          >
                            <b>Thanh toán khi nhận hàng</b>
                          </label>
                        </div>
                      </div>
                      <div className="col-auto mt-0">
                        <div className="form-check form-check-inline border border-success rounded-pill px-3 py-2 mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label ml-3"
                            htmlFor="inlineRadio2"
                          >
                            <b>Thẻ ngân hàng</b>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="card border-0 ">
                  <div className="card-header pb-0">
                    <p className="card-text mt-4 space">ĐƠN CỦA BẠN</p>
                  </div>
                  <div className="card-body pt-0">
                    {order.cart?.map((smallOrder, index) => (
                      <div key={index}>
                        <h5>
                          <b>{smallOrder.shop.store_name}</b>
                        </h5>
                        {smallOrder.product.map((productItem, index) => (
                          <div key={index}>
                            <div className="row justify-content-between">
                              <div className="col-auto col-md-7">
                                <div className="media flex-column flex-sm-row">
                                  <img
                                    className=" img-fluid"
                                    src={productItem.image_link}
                                    width="62"
                                    height="62"
                                    alt=""
                                  />
                                  <div className="media-body my-auto">
                                    <div className="row ">
                                      <div className="col-auto">
                                        <p className="mb-0">
                                          <b>{productItem.name}</b>
                                        </p>
                                        <small className="text-muted">
                                          SL: {productItem.sale_price}
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className=" pl-0 flex-sm-col col-auto my-auto">
                                <p className="boxed-1">2</p>
                              </div>
                              <div className=" pl-0 flex-sm-col col-md-3 my-auto text-right">
                                <p>
                                  <b>
                                    {productItem.sale_price *
                                      productItem.quantity}{" "}
                                  </b>
                                  VND
                                </p>
                              </div>
                            </div>
                            <hr className="my-2" />
                          </div>
                        ))}
                      </div>
                    ))}
                    <div className="row ">
                      <div className="col">
                        <div className="row justify-content-between">
                          <div className="col-4">
                            <p className="mb-1">
                              <b>Tổng tiền hàng</b>
                            </p>
                          </div>
                          <div className="flex-sm-col col-auto">
                            <p className="mb-1">

                              <b>{order.total_price}</b> VND
                            </p>
                          </div>
                        </div>
                        <div className="row justify-content-between">
                          <div className="col">
                            <p className="mb-1">
                              <b>Chi phí vận chuyển</b>
                            </p>
                          </div>
                          <div className="flex-sm-col col-auto">
                            <p className="mb-1">
                              <b>{defaultDeliveryCost}</b> VND
                            </p>
                          </div>
                        </div>
                        <div className="row justify-content-between">
                          <div className="col-4">
                            <p>
                              <b>Tổng thanh toán</b>
                            </p>
                          </div>
                          <div className="flex-sm-col col-auto">
                            <p className="mb-1">

                              <b style={{ color: "red" }}>
                                {defaultDeliveryCost + order.total_price}{" "}
                              </b>
                              VND
                            </p>
                          </div>
                        </div>
                        <hr className="my-0" />
                      </div>
                    </div>
                    <div className="row mb-5 mt-4 ">
                      <div className="col-md-7 col-lg-6 mx-auto">
                        <button
                          type="button"
                          className="btn btn-block btn-outline-primary btn-lg"
                          onClick={handleSubmitOrder}
                        >
                          Đặt đơn
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
