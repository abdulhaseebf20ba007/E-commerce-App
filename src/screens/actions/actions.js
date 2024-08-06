import { ADD_CART_ITEM, REMOVE_CART_ITEM, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "../actiontypes";

export const addItemToCart = (item) => {
  return {
    type: ADD_CART_ITEM,
    payload: item,
  };
};

export const removeCartItem = (index) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: index,
  };
};

export const incrementQuantity = (index) => ({
  type: INCREMENT_QUANTITY,
  payload: index,
});

export const decrementQuantity = (index) => ({
  type: DECREMENT_QUANTITY,
  payload: index,
});
