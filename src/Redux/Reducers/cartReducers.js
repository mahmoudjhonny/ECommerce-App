import { ADD_ITEM, ADJUST_QTY, DEL_ITEM, LOAD_CURRENT_ITEM } from '../ActionTypes/productActionTypes'
const initialState = {
    cart: [],
    currentItem: null
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            // To get item detailed
            // const item = state.products.find((prod) => prod.id === action.payload.id);
            const item = { id: action.payload.id, };
            // To check if item in cart or no
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map(item =>
                    item.id === action.payload.id ? {...item, qty: item.qty + 1 } :
                    item
                ) : [...state.cart, {...item, qty: 1 }]
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
                    item.id === action.payload.id ? {...item, qty: action.payload.qty } :
                    item
                )
            }
        case LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        default:
            return state
    }
}

export default cartReducers