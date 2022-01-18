import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RowItem({ product, onUpdateTotal }) {
  const [price, setPrice] = useState(product.price * product.quantity);

  return (
    <>
      <tr class="align-items-center">
        <td>
          <figure class="itemside align-items-center">
            <div class="aside">
              <input type="checkbox"></input>
              <img src="img/tr-bs-os/tr/tr-1.png" class="img-sm" alt="" />
            </div>
            <figcaption class="info">
              <Link to="#" class="title text-dark">
                {product.name}
              </Link>
              <p class="text-muted small">{product.weight} Kg</p>
            </figcaption>
          </figure>
        </td>
        <td>
          <select
            id="select-quanlity"
            onChange={(e) => setPrice(product.price * e.target.value)}
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
            <var class="price">{product.price}</var>
          </div>
          {/* price-wrap .// */}
        </td>
        <td>
          <div class="price-wrap">
            <var class="price">{price.toFixed(1)}</var>
          </div>
          {/* price-wrap .// */}
        </td>
        <td class="text-right">
          <Link to="" class="btn btn-danger btn-remove">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </Link>
        </td>
      </tr>
    </>
  );
}

export default RowItem;
