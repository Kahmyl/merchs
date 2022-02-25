import { getCartItemsAndTotal } from "../../utils/cart";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes"


const initialState = {
    cart: {},
    number_of_items: 0

}


const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART: 
            // checks the cart array for a unique product id. If id does not exist yet, it adds id to the array and gives it 
            // an object with a quantity of 1. If id already exists in array it updates the quantity

            
            if (state.cart[action.payload] === undefined) {
                console.log("Not found")
                state.cart[action.payload] = {'quantity':1}
                console.log(newArray, state.cart[action.payload]);
                newArray.push(state.cart[action.payload])
                console.log(newArray)
            }else{
                state.cart[action.payload]['quantity'] += 1
                console.log(state.cart[action.payload])
                newArray.push(state.cart[action.payload])
                console.log(newArray)
            }
            return {
                ...state, 
                ...newArray
            }
        case REMOVE_FROM_CART: return {
            ...state
        }
        default: return state
    }
}

export default cartReducer