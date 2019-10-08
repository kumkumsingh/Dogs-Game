import React, { Component } from 'react'

const reducer = (state = [], action = {}) => {
    switch (action.type) {
    case 'SET_DOGS_LIST':
    // first we checked to see what the action.payload actually was with console.log, then we decided to only return this because this is the initial start. When we for example add something, then we have to return ...state.
        // console.log(action.payload);
      return action.payload

    default:
      return state
    }
  }
  
  export default reducer
  