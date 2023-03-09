import { CartTypes } from "../types/index";

const toggleCart = () => (dispatch) => {
  dispatch({
    type: CartTypes.TOGGLE_CART,
  });
};

export const addItem = (item) => ({
  type: CartTypes.ADD_ITEM,
  payload: item,
});

export const ClearItem = (item) => ({
  type: CartTypes.CLEAR_ITEM,
  payload: item,
});

export const RemoveItem = (item) => ({
  type: CartTypes.REMOVE_ITEM,
  payload: item,
});

export default toggleCart;
