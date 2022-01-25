import React from "react";
import ReactDOM from "react-dom";
import RowItem from "./RowItem/RowItem";
import { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectProductCheckout } from "../../redux/selectors/cartCheckout/productCheckout";
import { updateProductCheckout } from "../../redux/actions/cartCheckout";

function Cart(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  const [total, setTotal] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));
  const productCheckout = useSelector(selectProductCheckout);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `https://localhost:44336/api/ShoppingCart/GetDataShoppingCartById/${user.userId}`
        );
        console.log(res.data.lstCartView);
        setProductList(res.data.lstCartView);
      } catch (error) {
        console.log(error.message);
      }
    };

    getProducts();
  }, []);
  const calcTotal = (products) => {
    let total_money = 0;
    products.map((product) => {
      total_money = total_money + product.price * product.quantity;
    });
    setTotal(total_money);
  };
  useEffect(() => {
    productList?.length && calcTotal(productList);
    const clone = [];
    productCheckout.forEach((item) => {
      const existItem = productList.find((i) => i.id === item.id);
      if (existItem?.id) clone.push(item);
    });
    dispatch(updateProductCheckout(clone));
  }, [productList]);
  const handleChangeQuantity = (quantity, idProduct) => {
    let newProductList = productList.map((item) => {
      if (item.id === idProduct) {
        item.quantity = quantity;
      }
      return item;
    });
    setProductList(newProductList);
  };

  const handleDeleteProduct = async (id) => {
    try {
      const res = await axios.get(
        `https://localhost:44336/api/ShoppingCart/DeleteShopCart?idUser=${user.userId}&IdProduct=${id}`
      );

      const newProducts = productList.filter((product) => product.id !== id);
      setProductList(newProducts);
    } catch (error) {
      console.log(error.message);
    }
  };
  const onChangeSelectItem = (product) => {
    let newListItem = [...productCheckout];
    const item = productCheckout.find((item) => item.id === product.id);
    if (!item || !item.id) {
      newListItem.push(product);
    } else {
      newListItem = [];
      productCheckout.forEach((item) => {
        if (item.id !== product.id) {
          newListItem.push(item);
        }
      });
    }

    dispatch(updateProductCheckout(newListItem));
  };
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
                          Sản phẩm
                        </th>
                        <th scope="col">Số Lượng</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Tổng</th>

                        <th scope="col" class="text-right"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {productList?.length > 0 &&
                        productList?.map((product) => (
                          <RowItem
                            product={product}
                            onChangeQuantity={(quantity) =>
                              handleChangeQuantity(quantity, product.id)
                            }
                            onDeleteProduct={(id) => handleDeleteProduct(id)}
                            onChangeSelectItem={onChangeSelectItem}
                          />
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
                        <strong>{total}đ</strong>
                      </dd>
                    </dl>
                    <hr />
                    <p class="text-center mb-3">
                      <button
                        style={{ margin: "auto" }}
                        onClick={() => {
                          let order = productList;
                          console.log(JSON.stringify(order));
                          localStorage.setItem("order", JSON.stringify(order));
                          localStorage.setItem("totalMoney", total);
                          history.push("/checkout");
                        }}
                        class="boxed-btn mb-3 mt-4"
                      >
                        Đặt hàng
                      </button>
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
