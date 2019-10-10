import { combineReducers } from 'redux'
import dogs from './dogs'
import gameOne from './gameOneReducer'

export default combineReducers({
    dogs,
    gameOne
  })