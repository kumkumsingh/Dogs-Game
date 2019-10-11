const initialState = {
   
    dogImageGame2CorrectAns: null,
    Game2correctAnswer: null
  }
const reducer = (state = initialState ,action = {}) => {
    switch(action.type) {

        case 'GET_DOG_IMAGE_GAME2_CORRECTANS':

        return {dogImageGame2CorrectAns:action.payload,
            Game2correctAnswer:action.payload.split('/')[4].split('-')[0]}

        default :

        return state;
    }
}

export default reducer