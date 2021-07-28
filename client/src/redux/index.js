import cartSlice from "./features/cart/cartSlice"
import counterReducer from "./features/counter/counterSlice"
import productSlice from "./features/products/productSlice"

 const rootReducer={
    counter: counterReducer,
    product: productSlice,
    cart: cartSlice
}

export default rootReducer