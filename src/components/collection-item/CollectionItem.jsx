import React from 'react'
import './CollectionItem.scss'
import ButtonComponent from "../button-component/ButtonComponent"
import {connect} from "react-redux"
import {addItemsToCart} from "../../redux/cart/cart.actions"

function CollectionItem(props) {
    const {item,addItemsToCart}= props
    const {name,price,imageUrl} = item
    return (
        <div className="collection-item">

            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="value">GHS {price}</span>

            </div>
          <ButtonComponent onClick={()=>addItemsToCart(props.item)} inverted>Add to cart</ButtonComponent>
        </div>
    )
}
 const mapDispatchToProps = (dispatch) =>({
    addItemsToCart: item => dispatch(addItemsToCart(item))
 })

export default connect(null,mapDispatchToProps)(CollectionItem)
