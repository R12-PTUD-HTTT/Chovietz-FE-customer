import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RowItem({
  product,
  onUpdateTotal,
  onChangeQuantity,
  onDeleteProduct,
}) {
  const [price, setPrice] = useState(product.price * product.quantity);
  const handleChangeQuantity = (event) => {
    let value = +event.target.value;
    //console.log(value);
    onChangeQuantity && onChangeQuantity(value);
  };
  const handleDeleteProduct = (id) => {
    //console.log(`Xóa ${id}`);
    onDeleteProduct && onDeleteProduct(id);
  };

  return (
    <>
      <tr class="align-items-center">
        <td>
          <figure class="itemside align-items-center">
            <div class="aside">
              <input type="checkbox"></input>
              <img src={product.imagelink} class="img-sm" alt="" />
            </div>
            <figcaption class="info">
              <Link to="#" class="title text-dark">
                {product.name}
              </Link>
              <p class="text-muted small">{product.store_name}</p>
            </figcaption>
          </figure>
        </td>
        <td>
          <select
            id="select-quanlity"
            onChange={handleChangeQuantity}
            class="form-control"
          >
            <option selected={product.quantity === 1} value={1}>
              1
            </option>
            <option selected={product.quantity === 2} value={2}>
              2
            </option>
            <option selected={product.quantity === 3} value={3}>
              3
            </option>
            <option selected={product.quantity === 4} value={4}>
              4
            </option>
            <option selected={product.quantity === 5} value={5}>
              5
            </option>
          </select>
        </td>
        <td>
          <div class="price-wrap">
            <var class="price">{product.price} đ</var>
          </div>
          {/* price-wrap .// */}
        </td>
        <td>
          <div class="price-wrap">
            <var class="price">{product.price * product.quantity} đ</var>
          </div>
          {/* price-wrap .// */}
        </td>
        <td class="text-right">
          <button
            style={{ marginTop: '14px' }}
            onClick={() => handleDeleteProduct(product.id)}
            class="btn btn-danger btn-remove"
          >
            {/*<i class="fa fa-trash" aria-hidden="true"></i>*/}
            Xóa
          </button>
        </td>
      </tr>
    </>
  );
}

export default RowItem;
