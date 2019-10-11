const game2 = (state = [], action = {}) => {
    switch (action.type) {

    case 'START_GAME':
        return action.payload

    default:
        return state
    }
}


export default game2