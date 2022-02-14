import { ADD_ITEM, ADJUST_QTY, DEL_ITEM, LOAD_CURRENT_ITEM } from '../ActionTypes/productActionTypes'
export const addToCart = (itemId) => {
    return {
        type: ADD_ITEM,
        payload: {
            id: itemId,
        }
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: DEL_ITEM,
        payload: {
            id: itemId
        }
    }
}

export const adjustQty = (itemId, value) => {
    return {
        type: ADJUST_QTY,
        payload: {
            id: itemId,
            qty: value,
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: LOAD_CURRENT_ITEM,
        payload: item
    }
}