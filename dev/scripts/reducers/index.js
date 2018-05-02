import { combineReducers } from 'redux';
import { itemsReducer, toggledItemsReducer } from './example-reducer'
import { dataReducer } from './partials-reducer'


const rootReducer = combineReducers({
    data : dataReducer
})

export default rootReducer;