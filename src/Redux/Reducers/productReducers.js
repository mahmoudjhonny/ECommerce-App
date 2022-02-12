import { FETCH_PRODUCT_FAILUAR, FETCH_PRODUCT_REQUAST, FETCH_PRODUCT_SUCCESS } from "../ActionTypes/productActionTypes"

const initialState = {
    loading: false,
    products: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUAST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: ''
            }
        case FETCH_PRODUCT_FAILUAR:
            return {
                loading: false,
                products: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;