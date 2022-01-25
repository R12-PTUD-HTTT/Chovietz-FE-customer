import { combineReducers } from "redux";
import cartCheckoutReducer from "./cartCheckout/cartCheckoutReducer";
import { userReducer } from "./userReducer";
const rootReducer = combineReducers({
  user: userReducer,
  cartCheckout: cartCheckoutReducer,
});

export default rootReducer;
