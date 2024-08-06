import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../screens/cartslice"; // Import your cartslice reducer

const store2 = configureStore({
  reducer: {
    cart: cartReducer,
    
  },
});

export default store2;
