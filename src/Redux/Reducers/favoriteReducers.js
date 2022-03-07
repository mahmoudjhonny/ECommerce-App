import {
    ADD_FAVORITE,
    DEL_FAVORITE
} from "../ActionTypes/productActionTypes";

const initialState = {
    favorite: []
}

export   const favoriteReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            const item = {
                id: action.payload.id,
            };
            const inFavCart = state.favorite.find(item => item.id === action.payload.id)
            return {
                // ...state,
                // favorite: inFavCart ? state.favorite.map(item => 
                //     item.id === action.payload.id ? {
                //     })
            }
        case DEL_FAVORITE:
            return {
                ...state,
                favorite: state.favorite.filter(item => item.id !== action.payload.id)
            }
        default:
            return state
    }
}