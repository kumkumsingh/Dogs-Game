import { combineReducers } from 'redux'
import GameReducer from './GameReducer'
import reducer from './reducer'
import Game2Reducer from './Game2Reducer'
import Game2ReducerCorrectAns from './Game2ReducerCorrectAns'

export default combineReducers({
    GameReducer,
    reducer,
    Game2Reducer,
    Game2ReducerCorrectAns
  })