import React from 'react'
import {connect} from "react-redux"
import "./CardIcon.scss";
import {ReactComponent as Shopping} from "../../assets/shopping-bag.svg"

import {toggleCartHidden} from "../../redux/cart/cart.actions"
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

function CardIcon({toggleCartHidden,itemsCount}) {
    return (
        <div className="cart-icon"  onClick={toggleCartHidden}>
            <Shopping className="shopping-icon"/>
            <span className="item-count">{itemsCount}</span>
            
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

const mapStateToProp = (state) =>({
    //itemsCount: cartitems.reduce((accumulatedQty,cartItem)=> accumulatedQty + cartItem.quantity,0) 
    itemsCount:selectCartItemsCount(state)
})
export default connect(mapStateToProp,mapDispatchToProps)(CardIcon)
