import { createSelector } from "@reduxjs/toolkit";
import { productsAdapter } from "./productSlice";
export const { selectAll: selectProducts, selectById: selectProductById } =
  productsAdapter.getSelectors((state) => state.product);

export const selectProductIds = createSelector(
  // First, pass one or more "input selector" functions:
  selectProducts,
  // Then, an "output selector" that receives all the input results as arguments
  // and returns a final result value
  (products) => products.map((product) => product.id)
);
