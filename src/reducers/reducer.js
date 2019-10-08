import React from 'react'

const reducer = (state = [], action = {}) => {
    switch (action.type) {
    case 'SET_DOGS_LIST':
      return [...state,action.payload]
    default:
      return state
    }
  }
  
  export default reducer
  
