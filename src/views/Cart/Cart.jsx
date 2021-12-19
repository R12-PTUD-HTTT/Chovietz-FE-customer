import "./Cart.css";
import React from "react";
import ReactDOM from "react-dom";

function Cart(props) {
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
                                        <th scope="col" class="sm-w">Product</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col" class="text-right"> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="align-items-center">
                                        <td>
                                            <figure class="itemside align-items-center">
                                                <div class="aside"> <img src="" class="img-sm"/> </div>
                                                <figcaption class="info">
                                                    <a href="#" class="title text-dark">Lettuce</a>
                                                    <p class="text-muted small">2 KG</p>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>
                                            <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </td>
                                        <td>
                                            <div class="price-wrap">
                                                <var class="price">$1156.00</var>
                                            </div> {/* price-wrap .// */}
                                        </td>
                                        <td class="text-right">
                                            <a data-original-title="Save to Wishlist" title="" href="" class="btn wishlist-btn mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                                            <a href="" class="btn btn-danger btn-remove"> Remove</a>
                                        </td>
                                    </tr>
                                    
                                    <tr class="align-items-center">
                                        <td>
                                            <figure class="itemside align-items-center">
                                                <div class="aside"><img src="img/tr-bs-os/tr/tr-2.png" class="img-sm"/></div>
                                                <figcaption class="info">
                                                    <a href="#" class="title text-dark">Lettuce</a>
                                                    <p class="text-muted small">2 KG</p>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>
                                            <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </td>
                                        <td>
                                            <div class="price-wrap">
                                                <var class="price">$1156.00</var>
                                            </div> {/* price-wrap .// */}
                                        </td>
                                        <td class="text-right">
                                            <a data-original-title="Save to Wishlist" title="" href="" class="btn wishlist-btn mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                                            <a href="" class="btn btn-danger btn-remove"> Remove</a>
                                        </td>
                                    </tr>
                                    
                                    <tr class="align-items-center">
                                        <td>
                                            <figure class="itemside align-items-center">
                                                <div class="aside"><img src="img/tr-bs-os/tr/tr-3.png" class="img-sm"/></div>
                                                <figcaption class="info">
                                                    <a href="#" class="title text-dark">Lettuce</a>
                                                    <p class="text-muted small">2 KG</p>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>
                                            <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </td>
                                        <td>
                                            <div class="price-wrap">
                                                <var class="price">$1156.00</var>
                                            </div> {/* price-wrap .// */}
                                        </td>
                                        <td class="text-right">
                                            <a data-original-title="Save to Wishlist" title="" href="" class="btn wishlist-btn mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                                            <a href="" class="btn btn-danger btn-remove"> Remove</a>
                                        </td>
                                    </tr>
                                    
                                    <tr class="align-items-center">
                                        <td>
                                            <figure class="itemside align-items-center">
                                                <div class="aside"><img src="img/tr-bs-os/tr/tr-1.png" class="img-sm"/></div>
                                                <figcaption class="info">
                                                    <a href="#" class="title text-dark">Lettuce</a>
                                                    <p class="text-muted small">2 KG</p>
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>
                                            <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </td>
                                        <td>
                                            <div class="price-wrap">
                                                <var class="price">$1156.00</var>
                                            </div> {/* price-wrap .// */}
                                        </td>
                                        <td class="text-right">
                                            <a data-original-title="Save to Wishlist" title="" href="" class="btn wishlist-btn mr-2" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                                            <a href="" class="btn btn-danger btn-remove"> Remove</a>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div> {/* card.// */}

                    </main> {/* col.// */}
                    <aside class="col-lg-3">
                        <div class="card coupon-card mb-4">
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <label>Have coupon?</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="" placeholder="Coupon code"/>
                                            <span class="input-group-append">
                                                <button class="btn btn-primary">Apply</button>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div> {/* card-body.// */}
                        </div> {/* card .// */}
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
                                    <dd class="text-right  h5 text-success"><strong>$1,650</strong></dd>
                                </dl>
                                <hr/>
                                <p class="text-center mb-3">
                                    <a href="">
                                        <img src="img/payments.png" height="26"/>
                                    </a>
                                    <a href="" class="boxed-btn mb-3 mt-4">Make Purchase</a>
                                    <a href="" class="boxed-btn btn-outline">Make Purchase</a>
                                </p>

                            </div> {/* card-body.// */}
                        </div> {/* card .// */}
                    </aside> {/* col.// */}
                </div>

            </div> {/* container .//  */}
        </section>
            
        </main>
        </>
  );
}

export default Cart;
