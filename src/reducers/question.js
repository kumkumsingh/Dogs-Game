const question = (state = [], action = {}) => {
    switch (action.type) {

    case GET_RANDOM_IMAGE:
        return [...state, payload]

    default:
        return state
    }
}

export default reducer