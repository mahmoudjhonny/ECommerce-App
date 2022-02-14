import { combineReducers } from 'redux'
import cartReducers from './Reducers/cartReducers'
import reducer from './Reducers/productReducers'

const rootReducers = combineReducers({
    product: reducer,
    cart: cartReducers
})

export default rootReducers