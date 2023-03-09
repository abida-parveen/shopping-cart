import { CartTypes } from "../types";
import { AddItem, ClearItem, RemoveItem } from "../utils/cart";

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

// as adding and removing items to cart have more than 1 conditions so I have made util file for all the conditions so that reducer doesnot look complex

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: AddItem(state.cartItems, action.payload),
      };
    case CartTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: ClearItem(state.cartItems, action.payload)
      };
    case CartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: RemoveItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
