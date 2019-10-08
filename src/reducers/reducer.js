
const reducer = (state =  [], action = {}) => {
  // first we checked to see what the action.payload actually was with console.log, then we decided to only return this because this is the initial start. When we for example add something, then we have to return ...state.
    switch (action.type) {
      case 'SET_DOGS_LIST':
        return [...action.payload]

      default:
        return state
    }
}

export default reducer