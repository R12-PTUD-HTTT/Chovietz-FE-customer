import { createSelector } from "reselect";

const cart = (state) => state.cartCheckout;

export const selectProductCheckout = createSelector(
  cart,
  (state) => state.products
);
