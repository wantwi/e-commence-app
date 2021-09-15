import CartActionTypes from "./cart.types"

export const toggleCartHidden =()=>({

    type:CartActionTypes.TOGGLE_CART_HIDDEN
})


export const addItemsToCart =(item)=>({

    type:CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
})

export const removeCartItem =(id)=>({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: id
})

export const decreaseCartItem =(id)=>({
    type: CartActionTypes.DECREASE_CART_ITEM,
    payload: id
})

export const increaseCartItem =(id)=>({
    type: CartActionTypes.INCREASE_CART_ITEM,
    payload: id
})