import {
    ADD_FAVORITE,
    DEL_FAVORITE
} from "../ActionTypes/productActionTypes";

const initialState = {
    favorite: []
}

const favoriteReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {

            }
        case DEL_FAVORITE:
            return {

            }
        default:
            return state
    }
}