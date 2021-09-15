import React from 'react'
import "./CartItemComponent.scss"

function CartItemComponent({item:{imageUrl,price,name, quantity}}) {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">

                <span className="name">{name}</span>
                <span className="name">{quantity} X GHS {price}</span>


            </div>
        </div>
    )
}

export default CartItemComponent
