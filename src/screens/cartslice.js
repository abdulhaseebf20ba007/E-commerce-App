import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const existingProductIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, update its quantity
        state[existingProductIndex].quantity += 1;
      } else {
        // If the product is not in the cart, add it as a new item
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    
    removeCartItem: (state, action) => {
      state.splice(action.payload, 1);
    },

    incrementQuantity: (state, action) => {
      state[action.payload].quantity += 1;
    },

    decrementQuantity: (state, action) => {
      if (state[action.payload].quantity > 1) {
        state[action.payload].quantity -= 1;
      }
    },
    addwishlistitem: (state, action) => {
        const existingProductIndex = state.findIndex(
          (item) => item.id === action.payload.id
        );
      
        if (existingProductIndex === -1) {
          // If the product is not already in the wishlist, add it
          state.push({ ...action.payload, wishlist: true });
        }
      },
      
  },
});

// Export the reducer from the slice
export const cartReducer = cartSlice.reducer;

// Export the actions from the slice
export const { addCartItem, removeCartItem, incrementQuantity, decrementQuantity,addwishlistitem } = cartSlice.actions;
