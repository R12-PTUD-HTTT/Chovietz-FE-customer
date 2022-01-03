import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RowItem({ product, onUpdateTotal }) {
  return (
    <>
      <tr class="align-items-center">
        <td>
          <figure class="itemside align-items-center">
            <div class="aside">
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
          <select class="form-control">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </td>
        <td>
          <div class="price-wrap">
            <var class="price">{product.price}</var>
          </div>
          {/* price-wrap .// */}
        </td>
        <td class="text-right">
          <Link
            data-original-title="Save to Wishlist"
            title=""
            to=""
            class="btn wishlist-btn mr-2"
            data-toggle="tooltip"
          >
            <i class="fa fa-heart"></i>
          </Link>
          <Link to="" class="btn btn-danger btn-remove">
            Remove
          </Link>
        </td>
      </tr>
    </>
  );
}

export default RowItem;
