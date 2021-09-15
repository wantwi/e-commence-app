import React from 'react'
import ButtonComponent from '../button-component/ButtonComponent'
import CartItemComponent from '../cart-item/CartItemComponent'
import "./CartDropdown.scss";
import {connect} from "react-redux"


function CartDropdown({cardItems}) {
    return (
        <div className="cart-dropdown">
            <div className ="cart-items">

              {
                  cardItems.map(cartItem =>  <CartItemComponent key={cartItem.id} item={cartItem} /> )
              }

               
            </div>
            <ButtonComponent>GO TO CHECKOUT</ButtonComponent>
        </div>
    )
}

const mapStateToProp = state =>({
    cardItems : state.cart.cartitems
})

export default connect(mapStateToProp)(CartDropdown)
