import {createSelector} from 'reselect'

const selectCart =  state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartitems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartitems =>  cartitems.reduce((accumulatedQty,cartItem)=> accumulatedQty + cartItem.quantity,0) 
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartitems =>  cartitems.reduce((accumulatedQty,cartItem)=> accumulatedQty + cartItem.quantity * cartItem.price,0) 

)