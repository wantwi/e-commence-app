import CartActionTypes from "./cart.types"
import { addItemToCart } from "./cart.utils"
const INITIAL_STATE = {
    hidden: true,
    cartitems:[]
}

const cartReducer =(state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
          
           return {
                ...state, hidden: !state.hidden
            }
            
            break;
        case CartActionTypes.ADD_ITEM_TO_CART:

        return {

            ...state,cartitems:addItemToCart(state.cartitems,action.payload)
        }
        break;
        default:
            return state
            break;
    }
}

export default cartReducer