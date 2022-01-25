import * as actionTYpe from "../constants/cartCheckout";

export const updateProductCheckout = (data) => {
  return (dispatch) =>
    dispatch({ type: actionTYpe.UPDATE_CART_CHECKOUT, payload: data });
};
