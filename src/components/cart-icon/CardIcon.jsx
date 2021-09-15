import React from 'react'
import {connect} from "react-redux"
import "./CardIcon.scss";
import {ReactComponent as Shopping} from "../../assets/shopping-bag.svg"

import {toggleCartHidden} from "../../redux/cart/cart.actions"

function CardIcon({toggleCartHidden}) {
    return (
        <div className="cart-icon"  onClick={toggleCartHidden}>
            <Shopping className="shopping-icon"/>
            <span className="item-count">0</span>
            
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchToProps)(CardIcon)
