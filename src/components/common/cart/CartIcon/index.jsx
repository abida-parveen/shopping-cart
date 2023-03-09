import React from "react";
import { ReactComponent as ShoppingIcon } from "../../../../assets/icons/shopping-bag.svg";
import "./cart-icon.css";
import { connect } from "react-redux";
import toggleCart from "../../../../state-management/actions/cart";

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className="cart_icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping_icon" />
      <span className="item_count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // adding the quantities of each item in cart
  itemCount: state.cart.cartItems.reduce(
    (quantity, cartItem) => quantity + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps, { toggleCart })(CartIcon);
