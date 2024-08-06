import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "../actiontypes";

const initialState = {
  cart: [], // initial cart items
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM: {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, update its quantity
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += 1;

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // If the product is not in the cart, add it as a new item
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case REMOVE_CART_ITEM: {
      const deleteArray = state.cart.filter((item, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        cart: deleteArray,
      };
    }

    case INCREMENT_QUANTITY: {
      const updatedCart = [...state.cart];
      updatedCart[action.payload].quantity += 1;

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case DECREMENT_QUANTITY: {
      const updatedCart = [...state.cart];
      if (updatedCart[action.payload].quantity > 1) {
        updatedCart[action.payload].quantity -= 1;
      }

      return {
        ...state,
        cart: updatedCart,
      };
    }

    default:
      return state;
  }
};
