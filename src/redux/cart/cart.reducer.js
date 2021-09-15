// import { decreaseCartItem } from "./cart.actions"
import CartActionTypes from "./cart.types";
import {
  addItemToCart,
  removeCartItem,
  decreaseCartItem,
  increaseCartItem,
} from "./cart.utils";
const INITIAL_STATE = {
  hidden: true,
  cartitems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

      break;
    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartitems: addItemToCart(state.cartitems, action.payload),
      };
      break;
    case CartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartitems: removeCartItem(state.cartitems, action.payload),
      };
      break;
    case CartActionTypes.DECREASE_CART_ITEM:
      return {
        ...state,
        cartitems: decreaseCartItem(state.cartitems, action.payload),
      };
      break;
    case CartActionTypes.INCREASE_CART_ITEM:
      return {
        ...state,
        cartitems: increaseCartItem(state.cartitems, action.payload),
      };

    default:
      return state;
      break;
  }
};

export default cartReducer;
