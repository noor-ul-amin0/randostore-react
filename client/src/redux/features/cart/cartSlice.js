import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems:JSON.parse(localStorage.getItem('cartItems')) || []
  },
  reducers: {
    addCartItem: (state,action) => {
      const {id} = action.payload
      let cartItems = [...state.cartItems]
      let find = cartItems.find((cart) => cart.id === id);
      if (find) {
        cartItems = cartItems.map((cart) =>
        cart.id ===id ? { ...cart, quantity: cart.quantity + 1 } : cart
        );
      } else {
        cartItems = [...cartItems, { ...action.payload, quantity: 1 }];
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      state.cartItems = cartItems
    },
    updateCartItem: (state,action) => {
      const {itemId,qty} = action.payload
      let cartItems = [...state.cartItems]
      const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + qty } : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      state.cartItems = updatedCartItems
    },
    removeCartItem: (state,action) => {
    const cartItems = [...state.cartItems]
    const updatedCartItems = cartItems.filter((item) => item.id !== action.payload);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      state.cartItems = updatedCartItems
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { addCartItem , updateCartItem, removeCartItem} = cartSlice.actions

export default cartSlice.reducer