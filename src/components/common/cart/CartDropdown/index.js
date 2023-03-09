import React from "react";
import CustomButton from "../../CustomButton";
import CartItem from "../CartItem";
import "./cart-dropdown.css";
import toggleCartHidden from "../../../../state-management/actions/cart";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems, toggleCartHidden, total }) => {
  const navigate = useNavigate();
  // ensuring that the cart is empty or not
  const cartItemsLength = cartItems.length;
  return (
    <div className="cart_dropdown">
      <div className="cart_items">
        {cartItemsLength ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty_message">Your cart is empty</span>
        )}
        {cartItemsLength ? (
          <div className="total">
            <span>TOTAL: ${total}</span>
          </div>
        ) : null}
      </div>
      <CustomButton
        onClick={() => {
          toggleCartHidden();
          navigate("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // items that are currently selected by user
  cartItems: state.cart.cartItems,
  // multiplying the price with number of items and adding them to get the total price
  total: state.cart.cartItems.reduce(
    (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
    0
  ),
});

export default connect(mapStateToProps, { toggleCartHidden })(CartDropdown);
