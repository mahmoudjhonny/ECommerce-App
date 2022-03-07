import { combineReducers } from 'redux'
import cartReducers from './Reducers/cartReducers'
import { favoriteReducers } from './Reducers/favoriteReducers'
import reducer from './Reducers/productReducers'

const rootReducers = combineReducers({
    product: reducer,
    cart: cartReducers,
    favorite: favoriteReducers,
})

export default rootReducers