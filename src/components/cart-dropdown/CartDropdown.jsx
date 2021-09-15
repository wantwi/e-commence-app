import React from 'react'
import ButtonComponent from '../button-component/ButtonComponent'
import "./CartDropdown.scss"


function CartDropdown() {
    return (
        <div className="cart-dropdown">
            <div className ="cart-items"></div>
            <ButtonComponent>GO TO CHECKOUT</ButtonComponent>
        </div>
    )
}

export default CartDropdown
