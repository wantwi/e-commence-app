export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems,{...itemToAdd,quantity:1}]
};

export const removeCartItem =(cartItems, itemId)=>{

  return cartItems.filter(cartItem => cartItem.id !==itemId)
}

export const decreaseCartItem =(cartItems, itemId)=>{

  let findItem =  cartItems.find(cartItem => cartItem.id === itemId)
  if(findItem){
    if(findItem.quantity > 1){

      return cartItems.map((cartItem) =>
      cartItem.id === itemId
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    }

    return cartItems.filter(cartItem => cartItem.id !==itemId)
  }

}

export const increaseCartItem =(cartItems, itemId)=>{

  let findItem =  cartItems.find(cartItem => cartItem.id === itemId)
  if(findItem){
   

      return cartItems.map((cartItem) =>
      cartItem.id === itemId
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    
  }

}
