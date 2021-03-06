import React from 'react'
import "./ChechOutPage.scss"
import {connect} from 'react-redux'
import {createStructuredSelector } from "reselect"
import {selectCartItems,selectCartTotal} from "../../redux/cart/cart.selector"
import CheckOutItemComponent from '../../components/checkout-item/CheckOutItemComponent'
import StripeButtonComponent from '../../components/stripeButton/StripeButtonComponent'


function ChechOutPage({cartItems,total}) {
    return (
        <div className="checkout-page">
           <div className="checkout-header">
               <div className="header-block">
                    <span>Product</span>
               </div>
               <div className="header-block">
                    <span>Description</span>
               </div>
               <div className="header-block">
                    <span>Quantity</span>
               </div>
               <div className="header-block">
                    <span>Price</span>
               </div>
               <div className="header-block">
                    <span>Remove</span>
               </div>
           </div>
           {
               cartItems.map(cartItem => <CheckOutItemComponent key={cartItem.id} cartItem={cartItem}/>)
           }
           <div className="total">
               <span>TOTAL: GHS {total}</span>
           </div>
           <div>
               <StripeButtonComponent price={total}/>
               <h3>For Test:</h3>
               <h4 style={{color:'salmon'}}>No.: 4242 4242 4242 4242 -Exp: 12/21 -cvv: 123</h4>
           </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
}

)

export default connect(mapStateToProps)(ChechOutPage)
