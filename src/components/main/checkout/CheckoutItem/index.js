import React from "react";
import "./checkout-items.css";
import { connect } from "react-redux";
import {
  ClearItem,
  addItem,
  RemoveItem,
} from "../../../../state-management/actions/cart";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <div className="checkout-item">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(ClearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(RemoveItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
