import * as actionType from "../../constants/cartCheckout";

const initData = {
  products: [],
};

const cartCheckoutReducer = (state = initData, action) => {
  switch (action.type) {
    case actionType.UPDATE_CART_CHECKOUT:
      return { ...state, products: [...action.payload] };
    default:
      return { ...state };
  }
};

export default cartCheckoutReducer;
