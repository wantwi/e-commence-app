import React from "react";
import "./CheckOutItemComponent.scss";
import { connect } from "react-redux";
import {
  removeCartItem,
  decreaseCartItem,
  increaseCartItem
} from "../../redux/cart/cart.actions";

function CheckOutItemComponent({
  cartItem: { id, imageUrl, name, price, quantity },
  removeCartItem,
  decreaseCartItem,
  increaseCartItem
}) {
  const re = () => {};

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item-image" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow"  onClick={() => decreaseCartItem(id)}>&#10094; </div>
        <span className="value"> {quantity} </span>
        <div className="arrow" onClick={() => increaseCartItem(id)}>&#10095; </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeCartItem(id)}>
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  decreaseCartItem: (item) => dispatch(decreaseCartItem(item)),
  increaseCartItem: (item) => dispatch(increaseCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckOutItemComponent);
