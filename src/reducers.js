import { combineReducers } from 'redux'
import snakeServiceReducer from './services/snakeService/reducer'

const rootReducer = combineReducers({
    snakeServiceReducer
});

export default rootReducer;