import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    items:  [] ,
    searchableProducts : []
  },
  reducers: {
    getItems:(state,action)=>{
        state.items=action.payload
    },
    addItem: (state,action) => {
      state.items = [...state.items,action.payload]
    },
   searchProducts:(state,action)=>{
    state.searchableProducts = state.items.filter((item) =>
    action.payload.length >= 3
      ? item.name
          .toLocaleLowerCase()
          .includes(action.payload.toLocaleLowerCase())
      : item.name.toLocaleLowerCase() === action.payload.toLocaleLowerCase()
  ) || []
   },
  },
})

// Action creators are generated for each case reducer function
export const { addItem , getItems, searchProducts, emptySearchableProducts} = productSlice.actions

export default productSlice.reducer