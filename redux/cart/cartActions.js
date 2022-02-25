import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes"

export const addToCart = productId => {
    return {
        type: ADD_TO_CART,
        payload: productId
    }
}

export const removeFromCart = () => {
    return {
        type: REMOVE_FROM_CART
    }
}