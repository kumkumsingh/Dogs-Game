import { combineReducers } from 'redux'
import GameReducer from './GameReducer'
import reducer from './reducer'

export default combineReducers({
    GameReducer,
    reducer
  })