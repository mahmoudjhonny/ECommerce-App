import { combineReducers } from 'redux'
import reducer from './Reducers/productReducers'

const rootReducers = combineReducers({
    product: reducer
})

export default rootReducers