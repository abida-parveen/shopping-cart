import React from "react";
import { connect } from "react-redux";
import CheckoutItem from "../../components/main/checkout/CheckoutItem";
import "./checkout.css";

const Checkout = ({ cartItems, total }) => {
  return (
    <section className="checkout_page">
      <div className="checkout_header">
        <div className="header_block">Product</div>
        <div className="header_block">Description</div>
        <div className="header_block">Quantity</div>
        <div className="header_block">Price</div>
        <div className="header_block">Remove</div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  // multiplying the price with number of items and adding them to get the total price
  total: state.cart.cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  ),
});

export default connect(mapStateToProps)(Checkout);
