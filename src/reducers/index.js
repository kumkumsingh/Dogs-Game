import { combineReducers } from 'redux'
import GameReducer from './GameReducer'
import reducer from './reducer'
import Game2Reducer from './Game2Reducer'

export default combineReducers({
    GameReducer,
    reducer,
    Game2Reducer
  })