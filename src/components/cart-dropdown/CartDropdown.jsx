import React from "react";
import ButtonComponent from "../button-component/ButtonComponent";
import CartItemComponent from "../cart-item/CartItemComponent";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { Link,withRouter } from "react-router-dom";
import {toggleCartHidden} from "../../redux/cart/cart.actions"

function CartDropdown({ carditems,history,dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {carditems.length > 0 ? (
          carditems.map((cartItem) => (
            <CartItemComponent key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

     
        <ButtonComponent onClick={()=>{
           
          history.push('/checkout');
          dispatch(toggleCartHidden())
           }}>GO TO CHECKOUT</ButtonComponent>
     
    </div>
  );
}

// const mapDispatchToProps = dispatch =>({
//   toggleCartHidden: ()=> dispatch(toggleCartHidden())
// })

const mapStateToProp = (state) => ({
  // cardItems : state.cart.cartitems
  carditems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProp)(CartDropdown));
