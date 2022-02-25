import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes"

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART: 
            // checks the cart array for a unique product id. If id does not exist yet, it adds id to the array and gives it 
            // an object with a quantity of 1. If id already exists in array it updates the quantity
            const newArray = []
            if (cart[action.payload] === undefined) {
                cart[action.payload] = {'quantity':1}
                newArray.push(cart[action.payload])
            }else{
                cart[action.payload]['quantity'] += 1
                console.log(cart[action.payload])
                newArray.push(cart[action.payload])
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