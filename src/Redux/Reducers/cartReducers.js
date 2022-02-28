import {
    ADD_ITEM,
    ADJUST_QTY,
    DEL_ITEM
} from '../ActionTypes/productActionTypes'
const initialState = {
    cart: [],
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const item = {
                id: action.payload.id,
            };
            // To check if item in cart or no
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map(item =>
                    item.id === action.payload.id ? {
                        ...item,
                        qty: item.qty + 1
                    } :
                    item
                ) : [...state.cart, {
                    ...item,
                    qty: 1
                }]
            }
        case DEL_ITEM:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id ? {
                        ...item,
                        qty: +action.payload.qty
                    } :
                    item
                )
            }
        default:
            return state
    }
}

export default cartReducers