import React from 'react';
import ReactDOM from 'react-dom';
import RowItem from './RowItem/RowItem';
import { Fragment, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function Cart(props) {
  const history = useHistory();
  const [productList, setProductList] = useState([]);
  const [total, setTotal] = useState(0);
  const user = JSON.parse(localStorage.getItem('user'));
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
      console.log(res.data);
      const newProducts = productList.filter((product) => product.id !== id);
      setProductList(newProducts);
    } catch (error) {
      console.log(error.message);
    }
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
                          S???n ph???m
                        </th>
                        <th scope="col">S??? L?????ng</th>
                        <th scope="col">Gi??</th>
                        <th scope="col">T???ng</th>

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
                        <label>Nh???p M?? Gi???m gi???</label>
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            name=""
                            placeholder="M?? gi???m gi??"
                          />
                          <span class="input-group-append">
                            <button class="btn btn-primary">??p d???ng</button>
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
                      <dt>T???ng:</dt>
                      <dd class="text-right  h5 text-success">
                        <strong>{total}??</strong>
                      </dd>
                    </dl>
                    <hr />
                    <p class="text-center mb-3">
                      <button
                        style={{ margin: 'auto' }}
                        onClick={() => {
                          let order = productList;
                          console.log(JSON.stringify(order));
                          localStorage.setItem('order', JSON.stringify(order));
                          localStorage.setItem('totalMoney', total);
                          history.push('/checkout');
                        }}
                        class="boxed-btn mb-3 mt-4"
                      >
                        ?????t h??ng
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
