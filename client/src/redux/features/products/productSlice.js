import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { addProduct, fetchProducts } from "./thunk";
import { toast } from "react-toastify";

export const productsAdapter = createEntityAdapter();
const initialState = productsAdapter.getInitialState({
  loading: false,
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProducts.pending,
        (state, action) => void (state.loading = true)
      )
      .addCase(fetchProducts.fulfilled, (state, action) => {
        productsAdapter.setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        toastify("error", action.error.message);
      })
      .addCase(addProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        productsAdapter.addOne(state, action.payload);
        state.loading = false;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        toastify("error", action.error.message);
      });
  },
});
function toastify(state = "error", message = "Something Went Wrong!") {
  toast[state](message, {
    position: toast.POSITION.TOP_CENTER,
  });
}
// Action creators are generated for each case reducer function
// export const {} = productSlice.actions;

export default productSlice.reducer;
